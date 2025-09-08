import React from 'react';
import Card from '../Card/Card';
import {
  ColumnContainer,
  ColumnTitle,
  CardsContainer,
  EmptyColumn
} from './Column.styled';

export default function Column({ title, cards, isEmpty, onBrowseOpen }) {
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
          cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              topic={card.topic}
              date={card.date}
              theme={card.theme}
              task={card} // Передаем всю карточку
              onBrowseOpen={onBrowseOpen}
            />
          ))
        )}
      </CardsContainer>
    </ColumnContainer>
  );
}


















































