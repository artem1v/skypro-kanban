import { apiClient } from './axiosConfig';

export const authAPI = {
  // Регистрация - POST /user
  async register(userData) {
    try {
      const response = await apiClient.post('/user', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Ошибка регистрации. Пользователь с таким email уже существует.'
      );
    }
  },

  // Авторизация - POST /user/login
  async login(credentials) {
    try {
      const response = await apiClient.post('/user/login', {
        email: credentials.email,
        password: credentials.password,
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Неверный email или пароль.'
      );
    }
  },

  // Получение данных пользователя - GET /user
  async getCurrentUser() {
    try {
      const response = await apiClient.get('/user');
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.error || 
        'Не удалось получить данные пользователя.'
      );
    }
  }
};