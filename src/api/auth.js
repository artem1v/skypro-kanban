import { apiClient } from './axiosConfig';

export const authAPI = {
  // Регистрация
  async register(userData) {
    try {
      const response = await apiClient.post('/auth/register', {
        username: userData.name,
        email: userData.email,
        password: userData.password
      });
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
      const response = await apiClient.post('/auth/login', {
        email: credentials.email,
        password: credentials.password
      });
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Ошибка авторизации. Проверьте email и пароль.'
      );
    }
  },

  // Проверка токена (получение данных пользователя)
  async getCurrentUser() {
    try {
      const response = await apiClient.get('/auth/me');
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 
        'Не удалось получить данные пользователя.'
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