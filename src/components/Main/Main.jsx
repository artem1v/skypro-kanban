// src/components/Main/Main.jsx
import React from 'react';
import { useTasks } from '../../hooks/useTasks';
import Column from './Column/Column';
import { COLUMNS } from '../../utils/constants';
import {
  MainContainer,
  KanbanBoard,
  AddTaskButton,
  LoadingMessage,
  ErrorMessage
} from './Main.styled';

const Main = ({ onTaskClick }) => {
  const { 
    tasks, 
    loading, 
    error 
  } = useTasks();

  return (
    <MainContainer>
      {error && (
        <ErrorMessage>
          Ошибка: {error}
        </ErrorMessage>
      )}

      <KanbanBoard>
        {COLUMNS.map(column => (
          <Column
            key={column.id}
            column={column}
            tasks={tasks}
            loading={loading}
            onTaskClick={onTaskClick}
          />
        ))}
      </KanbanBoard>
    </MainContainer>
  );
};

export default Main;