import React, { useState, useEffect } from 'react';
import Column from './Column/Column';
import Loader from '../CardLoader/Loader';
import CardLoader from '../CardLoader/CardLoader';
import {
  MainContainer,
  MainColumnsContainer,
  MainColumnWrapper,
  LoadingContainer,
  ColumnTitle,
  ErrorMessage
} from './Main.styled';
import { fetchCards } from '../../api/tasks';

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      setError('');
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('Токен авторизации не найден');
      }
      const tasksData = await fetchCards(token);
      setTasks(tasksData);
    } catch (error) {
      setError(error.message);
      console.error('Ошибка загрузки задач:', error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(tasks)

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
            Ошибка загрузки задач: {error}
            <button onClick={loadTasks} style={{ marginLeft: '10px' }}>
              Повторить
            </button>
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
            const filteredTasks = tasks.tasks.filter(task => task.status === status);
            return (
              <MainColumnWrapper key={status}>
                <Column 
                  title={status}
                  tasks={filteredTasks}
                  isEmpty={filteredTasks.length === 0}
                />
              </MainColumnWrapper>
            );
          })}
        </MainColumnsContainer>
      </div>
    </MainContainer>
  );
}