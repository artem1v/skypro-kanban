import React, { useState, useEffect } from 'react';
import Column from './Column/Column';
import Loader from '../Loader/Loader';
import CardLoader from '../CardLoader/CardLoader';
import { tasksAPI } from '../../api/tasks';
import { cardsData } from '../../data'; // Импортируем локальные данные как fallback
import {
  MainContainer,
  MainColumnsContainer,
  MainColumnWrapper,
  LoadingContainer,
  ColumnTitle,
  ErrorMessage,
  RetryButton,
  WarningMessage
} from './Main.styled';

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      setError('');
      setUsingFallback(false);
      
      const tasks = await tasksAPI.getTasks();
      setCards(tasks);
      
    } catch (err) {
      console.error('API Error:', err);
      
      // Если API недоступно, используем локальные данные
      if (err.message.includes('Failed to fetch') || err.message.includes('Network Error')) {
        setError('Сервер временно недоступен. Используются демо-данные.');
        setUsingFallback(true);
        setCards(cardsData); // Используем локальные данные
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const columnStatuses = [
    "Без статуса",
    "Нужно сделать", 
    "В работе",
    "Тестирование",
    "Готово"
  ];

  if (isLoading) {
    return (
      <MainContainer>
        <div className="container">
          <MainColumnsContainer>
            {columnStatuses.map((status, index) => (
              <MainColumnWrapper key={index}>
                <ColumnTitle>
                  <p>{status}</p>
                </ColumnTitle>
                <div className="cards">
                  {[...Array(3)].map((_, i) => (
                    <CardLoader key={i} />
                  ))}
                </div>
              </MainColumnWrapper>
            ))}
          </MainColumnsContainer>
        </div>
        <Loader />
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <div className="container">
        {error && (
          <WarningMessage $isError={!usingFallback}>
            {error}
            {!usingFallback && (
              <RetryButton onClick={loadTasks}>
                Попробовать снова
              </RetryButton>
            )}
          </WarningMessage>
        )}
        
        <MainColumnsContainer>
          {columnStatuses.map((status) => {
            const filteredCards = cards.filter(card => card.status === status);
            return (
              <MainColumnWrapper key={status}>
                <Column 
                  title={status}
                  cards={filteredCards}
                  isEmpty={filteredCards.length === 0}
                />
              </MainColumnWrapper>
            );
          })}
        </MainColumnsContainer>
      </div>
    </MainContainer>
  );
}