import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/user';

export async function login({ email, password }) {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка авторизации');
  }
}

export async function register({ name, email, password }) {
  try {
    const response = await axios.post(API_URL, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка регистрации');
  }
}

export async function getCurrentUser(token) {
  try {
    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка получения данных пользователя');
  }
}