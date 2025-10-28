// src/pages/HomePage.jsx
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import PopNewCard from '../components/Popups/PopNewCard/PopNewCard';
import PopBrowse from '../components/Popups/PopBrowse/PopBrowse';
import { useTasks } from '../hooks/useTasks';

export default function HomePage({ onOpenExit }) {
  const [isNewCardOpen, setIsNewCardOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  
  const { addTask, updateTask, deleteTask, loadTasks } = useTasks();

  const handleNewCardOpen = () => {
    setIsNewCardOpen(true);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsBrowseOpen(true);
  };

  const handleCreateTask = async (taskData) => {
    try {
      await addTask(taskData);
      setIsNewCardOpen(false);
      await loadTasks();
    } catch (error) {
      console.error('Ошибка создания задачи:', error);
    }
  };

  const handleUpdateTask = async (taskId, taskData) => {
    try {
      await updateTask(taskId, taskData);
      setIsBrowseOpen(false);
    } catch (error) {
      console.error('Ошибка обновления задачи:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setIsBrowseOpen(false);
    } catch (error) {
      console.error('Ошибка удаления задачи:', error);
    }
  };

  return (
    <div>
      <Header 
        onNewCardOpen={handleNewCardOpen}
        onOpenExit={onOpenExit}
      />
      <Main onTaskClick={handleTaskClick} /> {/* Main теперь без заголовка */}
      
      <PopNewCard 
        isOpen={isNewCardOpen}
        onClose={() => setIsNewCardOpen(false)}
        onSubmit={handleCreateTask}
      />
      
      <PopBrowse 
        isOpen={isBrowseOpen}
        onClose={() => setIsBrowseOpen(false)}
        task={selectedTask}
        onSave={handleUpdateTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}