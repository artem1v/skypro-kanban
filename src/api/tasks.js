import { apiClient } from './axiosConfig';

export const tasksAPI = {
  // Получить все задачи пользователя - GET /kanban/tasks
  async getTasks() {
    try {
      const response = await apiClient.get('/kanban/tasks');
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Не удалось загрузить задачи.'
      );
    }
  },

  // Создать задачу - POST /kanban/tasks
  async createTask(taskData) {
    try {
      const response = await apiClient.post('/kanban/tasks', {
        title: taskData.title,
        description: taskData.description,
        topic: taskData.topic || 'Web Design',
        status: taskData.status || 'Без статуса',
        date: taskData.date || new Date().toISOString().split('T')[0]
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Не удалось создать задачу.'
      );
    }
  },

  // Редактировать задачу - PUT /kanban/tasks/{id}
  async updateTask(id, taskData) {
    try {
      const response = await apiClient.put(`/kanban/tasks/${id}`, taskData);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Не удалось обновить задачу.'
      );
    }
  },

  // Удалить задачу - DELETE /kanban/tasks/{id}
  async deleteTask(id) {
    try {
      const response = await apiClient.delete(`/kanban/tasks/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Не удалось удалить задачу.'
      );
    }
  }
};