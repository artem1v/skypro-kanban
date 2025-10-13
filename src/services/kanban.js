import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/kanban';

export async function getTasks(token) {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка получения задач');
  }
}

export async function createTask(token, taskData) {
  try {
    const response = await axios.post(API_URL, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка создания задачи');
  }
}

export async function updateTask(token, id, taskData) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка обновления задачи');
  }
}

export async function deleteTask(token, id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка удаления задачи');
  }
}