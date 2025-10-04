import { apiClient } from './axiosConfig';

export const tasksAPI = {
  // Получить все задачи пользователя
  async getTasks() {
    try {
      const response = await apiClient.get('/tasks');
      return response.data.tasks || response.data; // В зависимости от структуры ответа
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Не удалось загрузить задачи.'
      );
    }
  },

  // Получить задачу по ID
  async getTaskById(id) {
    try {
      const response = await apiClient.get(`/tasks/${id}`);
      return response.data.task || response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Задача не найдена.'
      );
    }
  },

  // Создать задачу
  async createTask(taskData) {
    try {
      const response = await apiClient.post('/tasks', {
        title: taskData.title,
        description: taskData.description,
        status: taskData.status || 'Без статуса',
        priority: taskData.topic || 'Web Design', // Предполагаем, что topic = priority
        dueDate: taskData.date || new Date().toISOString()
      });
      return response.data.task || response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Не удалось создать задачу.'
      );
    }
  },

  // Обновить задачу
  async updateTask(id, taskData) {
    try {
      const response = await apiClient.put(`/tasks/${id}`, taskData);
      return response.data.task || response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Не удалось обновить задачу.'
      );
    }
  },

  // Удалить задачу
  async deleteTask(id) {
    try {
      const response = await apiClient.delete(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Не удалось удалить задачу.'
      );
    }
  },

  // Изменить статус задачи
  async changeTaskStatus(id, newStatus) {
    try {
      const response = await apiClient.patch(`/tasks/${id}/status`, {
        status: newStatus
      });
      return response.data.task || response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Не удалось изменить статус задачи.'
      );
    }
  }
};