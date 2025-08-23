import React from 'react';
import Card from '../Card/Card';
import {
  ColumnContainer,
  ColumnTitle,
  CardsContainer,
  EmptyColumn
} from './Column.styled';

export default function Column({ title, cards, isEmpty }) {
  // Правильное отображение заголовка колонки
  const getColumnTitle = (title) => {
    const titles = {
      "Без статуса": "БЕЗ СТАТУСА",
      "Нужно сделать": "НУЖНО СДЕЛАТЬ", 
      "В работе": "В РАБОТЕ",
      "Тестирование": "ТЕСТИРОВАНИЕ",
      "Готово": "ГОТОВО"
    };
    return titles[title] || title;
  };

  return (
    <ColumnContainer>
      <ColumnTitle>
        <p>{getColumnTitle(title)}</p>
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
            />
          ))
        )}
      </CardsContainer>
    </ColumnContainer>
  );
}


















































