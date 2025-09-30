import { apiClient } from './axiosConfig';

export const authAPI = {
  // Регистрация
  async register(userData) {
    try {
      const response = await apiClient.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Ошибка регистрации. Проверьте введенные данные.'
      );
    }
  },

  // Авторизация
  async login(credentials) {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Ошибка авторизации. Проверьте email и пароль.'
      );
    }
  },

  // Проверка токена
  async checkAuth() {
    try {
      const response = await apiClient.get('/auth/me');
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Сессия истекла. Пожалуйста, войдите снова.'
      );
    }
  },

  // Выход
  async logout() {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
};