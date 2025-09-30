import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardItem,
  CardContainer,
  CardGroup,
  CardTheme,
  CardButton,
  CardContent,
  CardTitle,
  CardDate
} from './Card.styled';

export default function Card({ task }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (task && task.id) {
      navigate(`/card/${task.id}`);
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (task && task.id) {
      navigate(`/card/${task.id}`);
    }
  };

  // Функция для преобразования данных API в наш формат
  const getTaskData = () => {
    if (!task) return null;

    // Если задача уже в нашем формате
    if (task.topic && task.theme) {
      return task;
    }

    // Преобразуем данные из API
    return {
      id: task.id,
      title: task.title || 'Название задачи',
      topic: task.topic || 'Web Design',
      theme: task.theme || 'orange',
      date: task.date ? new Date(task.date).toLocaleDateString('ru-RU') : '30.10.23',
      status: task.status || 'Без статуса',
      description: task.description || 'Описание задачи'
    };
  };

  const taskData = getTaskData();
  if (!taskData) return null;

  return (
    <CardItem onClick={handleCardClick}>
      <CardContainer>
        <CardGroup>
          <CardTheme $theme={taskData.theme}>
            <p>{taskData.topic}</p>
          </CardTheme>
          <CardButton onClick={handleButtonClick}>
            <div></div>
            <div></div>
            <div></div>
          </CardButton>
        </CardGroup>
        <CardContent>
          <CardTitle>{taskData.title}</CardTitle>
          <CardDate>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round"/>
              <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>{taskData.date}</p>
          </CardDate>
        </CardContent>
      </CardContainer>
    </CardItem>
  );
}