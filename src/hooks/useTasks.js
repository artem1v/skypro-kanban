// src/hooks/useTasks.js
import { useState, useEffect } from 'react';
import { fetchCards, postCard, editCard, getCard } from '../api/tasks';
import { useAuth } from './useAuth';

// Функция для нормализации данных - преобразует _id в id
const normalizeTasks = (tasks) => {
  if (!tasks || !Array.isArray(tasks)) return [];
  
  return tasks.map(task => ({
    ...task,
    id: task._id || task.id, // Используем _id как id если есть
    // Также нормализуем другие поля если нужно
    date: task.date || null,
    topic: task.topic || 'Web Design',
    status: task.status || 'Без статуса'
  }));
};

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth();

 // src/hooks/useTasks.js
// В функции loadTasks после получения данных:
const loadTasks = async () => {
  if (!token) return;
  
  setLoading(true);
  setError(null);
  try {
    const response = await fetchCards();
    console.log('Ответ от API (загрузка):', response);
    
    // Нормализуем данные
    const tasksData = response.tasks || response;
    const normalizedTasks = normalizeTasks(tasksData);
    
    // ОТЛАДКА: Покажем все уникальные статусы
    const uniqueStatuses = [...new Set(normalizedTasks.map(task => task.status))];
    console.log('Уникальные статусы в задачах:', uniqueStatuses);
    console.log('Все нормализованные задачи:', normalizedTasks);
    
    setTasks(normalizedTasks);
  } catch (err) {
    setError(err.message);
    console.error('Ошибка загрузки задач:', err);
  } finally {
    setLoading(false);
  }
};

  const addTask = async (taskData) => {
    try {
      console.log('Добавление задачи:', taskData);
      const response = await postCard(taskData);
      console.log('Ответ от API (создание):', response);
      
      // Нормализуем обновленный список задач
      const updatedTasks = response.tasks || response;
      const normalizedTasks = normalizeTasks(updatedTasks);
      
      console.log('Обновленные нормализованные задачи:', normalizedTasks);
      setTasks(normalizedTasks);
      
      return normalizedTasks;
    } catch (err) {
      setError(err.message);
      console.error('Ошибка создания задачи:', err);
      throw err;
    }
  };

  const updateTask = async (taskId, taskData) => {
    try {
      const response = await editCard(taskId, taskData);
      // После обновления перезагружаем все задачи
      await loadTasks();
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await getCard(taskId);
      // После удаления перезагружаем все задачи
      await loadTasks();
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