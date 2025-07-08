import React from 'react';
import Card from '../Card/Card';


export default function Column({ title }) {
  // Пример данных (потом заменим на state/props)
  const cards = [
    { id: 1, title: "Название задачи", theme: "orange", date: "30.10.23" },
  ];

  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card 
            key={card.id}
            title={card.title} 
            theme={card.theme} 
            date={card.date} 
          />
        ))}
      </div>
    </div>
  );
}