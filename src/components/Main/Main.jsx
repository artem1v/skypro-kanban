import React, { useState, useEffect } from 'react';
import Column from './Column/Column';
import Loader from '../CardLoader/Loader';
import CardLoader from '../CardLoader/CardLoader';
import { tasksAPI } from '../../api/tasks';
import {
  MainContainer,
  MainColumnsContainer,
  MainColumnWrapper,
  LoadingContainer,
  ColumnTitle,
  ErrorMessage,
  RetryButton
} from './Main.styled';

export default function Main({ onTaskCreated }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      setError('');
      const tasks = await tasksAPI.getTasks();
      setCards(tasks);
    } catch (err) {
      setError(err.message);
      console.error('Error loading tasks:', err);
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

  if (error) {
    return (
      <MainContainer>
        <div className="container">
          <ErrorMessage>
            {error}
            <RetryButton onClick={loadTasks}>
              Попробовать снова
            </RetryButton>
          </ErrorMessage>
        </div>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <div className="container">
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