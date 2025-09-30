import { apiClient } from './axiosConfig';

export const tasksAPI = {
  // Получить все задачи
  async getTasks() {
    try {
      const response = await apiClient.get('/tasks');
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Не удалось загрузить задачи. Попробуйте позже.'
      );
    }
  },

  // Получить задачу по ID
  async getTaskById(id) {
    try {
      const response = await apiClient.get(`/tasks/${id}`);
      return response.data;
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
      const response = await apiClient.post('/tasks', taskData);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Не удалось создать задачу. Проверьте введенные данные.'
      );
    }
  },

  // Обновить задачу
  async updateTask(id, taskData) {
    try {
      const response = await apiClient.put(`/tasks/${id}`, taskData);
      return response.data;
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
  }
};