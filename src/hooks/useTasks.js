// src/hooks/useTasks.js
import { useState, useEffect } from 'react';
import { fetchCards, postCard, editCard, deleteCard } from '../api/tasks';
import { useAuth } from './useAuth';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  const loadTasks = async () => {
    if (!token) return;
    
    setLoading(true);
    setError(null);
    try {
      const tasksData = await fetchCards();
      console.log('Загруженные задачи:', tasksData); // Для отладки
      setTasks(tasksData);
    } catch (err) {
      setError(err.message);
      console.error('Ошибка загрузки задач:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (taskData) => {
    try {
      console.log('Добавление задачи:', taskData); // Для отладки
      const newTask = await postCard(taskData);
      console.log('Созданная задача:', newTask); // Для отладки
      
      // Обновляем локальное состояние
      setTasks(prev => [...prev, newTask]);
      return newTask;
    } catch (err) {
      setError(err.message);
      console.error('Ошибка создания задачи:', err);
      throw err;
    }
  };

  const updateTask = async (taskId, taskData) => {
    try {
      const updatedTask = await editCard(taskId, taskData);
      setTasks(prev => prev.map(task => 
        task.id === taskId ? updatedTask : task
      ));
      return updatedTask;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await deleteCard(taskId);
      setTasks(prev => prev.filter(task => task.id !== taskId));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    loadTasks();
  }, [token]);

  return {
    tasks,
    loading,
    error,
    loadTasks,
    addTask,
    updateTask,
    deleteTask
  };
};