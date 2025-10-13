import { apiClient } from './axiosConfig';

export const tasksAPI = {
  // Получить все колонки - GET /kanban/columns
  async getColumns() {
    try {
      const response = await apiClient.get('/kanban/columns');
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Не удалось загрузить колонки.'
      );
    }
  },

  // Получить все задачи пользователя
  async getTasks() {
    try {
      // Сначала получаем все колонки
      const columnsResponse = await this.getColumns();
      const columns = columnsResponse.columns || columnsResponse;
      
      // Затем получаем задачи из каждой колонки
      let allTasks = [];
      
      for (const column of columns) {
        try {
          const tasksResponse = await apiClient.get(`/kanban/columns/${column.id}/tasks`);
          const tasks = tasksResponse.data.tasks || tasksResponse.data;
          
          // Добавляем статус из названия колонки
          const tasksWithStatus = Array.isArray(tasks) 
            ? tasks.map(task => ({
                ...task,
                status: column.title || 'Без статуса'
              }))
            : [];
            
          allTasks = [...allTasks, ...tasksWithStatus];
        } catch (columnError) {
          console.error(`Error loading tasks for column ${column.id}:`, columnError);
        }
      }
      
      return allTasks;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Не удалось загрузить задачи.'
      );
    }
  },

  // Получить задачи конкретной колонки - GET /kanban/columns/{columnId}/tasks
  async getTasksByColumn(columnId) {
    try {
      const response = await apiClient.get(`/kanban/columns/${columnId}/tasks`);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Не удалось загрузить задачи колонки.'
      );
    }
  },

  // Создать задачу - POST /kanban/columns/{columnId}/tasks
  async createTask(taskData) {
    try {
      // Сначала получаем все колонки чтобы найти нужную по статусу
      const columnsResponse = await this.getColumns();
      const columns = columnsResponse.columns || columnsResponse;
      
      // Находим колонку с нужным статусом
      const targetColumn = columns.find(column => 
        column.title === taskData.status
      );
      
      if (!targetColumn) {
        throw new Error(`Колонка со статусом "${taskData.status}" не найдена`);
      }

      const response = await apiClient.post(`/kanban/columns/${targetColumn.id}/tasks`, {
        title: taskData.title,
        content: taskData.description || '',
        priority: taskData.topic || 'medium'
      });
      
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Не удалось создать задачу.'
      );
    }
  },

  // Получить задачу по ID - GET /kanban/tasks/{taskId}
  async getTaskById(id) {
    try {
      const response = await apiClient.get(`/kanban/tasks/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Задача не найдена.'
      );
    }
  },

  // Обновить задачу - PUT /kanban/tasks/{taskId}
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

  // Удалить задачу - DELETE /kanban/tasks/{taskId}
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