import React from 'react';
import Card from '../Card/Card';
import './Column.css';

export default function Column({ title, cards, isEmpty }) {
  return (
    <div className="column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {isEmpty ? (
          <div className="column__empty">
            <p>Нет задач</p>
          </div>
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
      </div>
    </div>
  );
}


















































