import React from 'react';
import Card from '../Card/Card';
import {
  ColumnContainer,
  ColumnTitle,
  CardsContainer,
  EmptyColumn
} from './Column.styled';

export default function Column({ title, tasks, isEmpty }) {
  console.log(`Колонка "${title}":`, tasks);

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
              key={task._id || task.id}
              title={task.title}
              topic={task.topic}
              date={task.date}
              theme={getThemeByTopic(task.topic)}
              task={task} // Передаем всю задачу с ID
            />
          ))
        )}
      </CardsContainer>
    </ColumnContainer>
  );
}

// Вспомогательная функция для определения темы по topic
function getThemeByTopic(topic) {
  const themeMap = {
    'Web Design': 'orange',
    'Research': 'green',
    'Copywriting': 'purple'
  };
  
  return themeMap[topic] || 'orange';
}


















































