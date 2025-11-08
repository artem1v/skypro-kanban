// src/components/Main/Column/Column.jsx
import React from 'react';
import Card from '../Card/Card';
import CardLoader from '../../CardLoader/CardLoader';
import { 
  ColumnContainer, 
  ColumnTitle, 
  CardsContainer,
  EmptyColumn 
} from './Column.styled';

const Column = ({ 
  column, 
  tasks, 
  loading = false,
  onTaskClick 
}) => {
  // Простая фильтрация для отладки
  const columnTasks = Array.isArray(tasks) ? tasks.filter(task => {
    const taskStatus = task.status || 'Без статуса';
    return taskStatus === column.status;
  }) : [];

  console.log(`📋 Колонка "${column.title}": ${columnTasks.length} задач`);

  return (
    <ColumnContainer>
      <ColumnTitle>
        {column.title} 
        <span style={{ color: '#666', marginLeft: '8px' }}>
          ({columnTasks.length})
        </span>
      </ColumnTitle>
      
      <CardsContainer>
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <CardLoader key={index} />
          ))
        ) : (
          columnTasks.map(task => (
            <Card
              key={task._id || task.id}
              task={task}
              onClick={() => onTaskClick(task)}
            />
          ))
        )}
        
        {!loading && columnTasks.length === 0 && (
          <EmptyColumn>
            <p>Нет задач</p>
            <small>Статус: {column.status}</small>
          </EmptyColumn>
        )}
      </CardsContainer>
    </ColumnContainer>
  );
};

export default Column;


















































