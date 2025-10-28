// src/components/Main/Card/Card.jsx
import React from 'react';
import { 
  CardContainer, 
  CardTitle, 
  CardDescription, 
  CardFooter,
  CardStatus,
  CardDate
} from './Card.styled';

const Card = ({ task, onClick }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU');
  };

  return (
    <CardContainer onClick={onClick}>
      <CardTitle>{task.title}</CardTitle>
      
      {task.description && (
        <CardDescription>{task.description}</CardDescription>
      )}
      
      <CardFooter>
        <CardStatus>{task.status}</CardStatus>
        {task.date && (
          <CardDate>{formatDate(task.date)}</CardDate>
        )}
      </CardFooter>
    </CardContainer>
  );
};

export default Card;