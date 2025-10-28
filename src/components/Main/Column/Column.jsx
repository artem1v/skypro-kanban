// src/components/Main/Column/Column.jsx
import React from 'react';
import Card from '../Card/Card';
import CardLoader from '../../CardLoader/CardLoader';
import { 
  ColumnContainer, 
  ColumnTitle, 
  CardsContainer, // Используем существующий CardsContainer вместо TasksList
  EmptyColumn 
} from './Column.styled';

const Column = ({ 
  column, 
  tasks, 
  loading = false,
  onTaskClick 
}) => {
  const columnTasks = tasks.filter(task => task.status === column.status);

  return (
    <ColumnContainer>
      <ColumnTitle>
        {column.title} 
        <span style={{ color: '#666', marginLeft: '8px' }}>
          ({columnTasks.length})
        </span>
      </ColumnTitle>
      
      <CardsContainer> {/* Используем CardsContainer вместо TasksList */}
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <CardLoader key={index} />
          ))
        ) : (
          columnTasks.map(task => (
            <Card
              key={task.id}
              task={task}
              onClick={() => onTaskClick(task)}
            />
          ))
        )}
        
        {!loading && columnTasks.length === 0 && (
          <EmptyColumn> {/* Используем EmptyColumn для пустого состояния */}
            <p>Нет задач</p>
          </EmptyColumn>
        )}
      </CardsContainer>
    </ColumnContainer>
  );
};

export default Column;


















































