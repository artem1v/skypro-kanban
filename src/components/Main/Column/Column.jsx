import React from 'react';
import Card from '../Card/Card';
import {
  ColumnContainer,
  ColumnTitle,
  CardsContainer,
  EmptyColumn
} from './Column.styled';

export default function Column({ title, tasks, isEmpty }) {
  return (
    <ColumnContainer>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {isEmpty ? (
          <EmptyColumn>
            <p>Нет задач</p>
          </EmptyColumn>
        ) : (
          tasks.map((task) => (
            <Card
              key={task.id}
              task={task}
            />
          ))
        )}
      </CardsContainer>
    </ColumnContainer>
  );
}


















































