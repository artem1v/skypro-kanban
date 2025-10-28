// src/api/tasks.js
import axios from 'axios';
import { getToken } from './auth';

const KANBAN_API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function postCard(card) {
  try {
    const token = getToken();

    // Подготавливаем данные
    const cardData = {
      title: card.title?.trim() || '',
      description: card.description?.trim() || '',
      topic: card.topic || 'Web Design',
      status: card.status || 'Без статуса',
      date: card.date || null
    };

    console.log('Отправка данных на API:', cardData);

    // Создаем FormData
    const formData = new FormData();
    for (const key in cardData) {
      // Проверяем, что значение не null, чтобы не отправлять null
      if (cardData[key] !== null && cardData[key] !== undefined) {
        formData.append(key, cardData[key]);
      }
    }
     
    const { data } = await axios.post(
      `${KANBAN_API_URL}/tasks`,
      formData, // Отправляем FormData
      {
        headers: {
          Authorization: `Bearer ${token}`,
          // Content-Type будет установлен автоматически для FormData
          // Если Axios все равно пытается его добавить, можно явно указать
          // 'Content-Type': 'multipart/form-data'
        },
      }
    );

    return data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);

    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    } else if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error.message || 'Ошибка при создании задачи');
    }
  }
}

// Обновить карточку
export async function editCard(id, card) {
  try {
    const token = getToken();
    
    const cardData = {
      title: card.title?.trim() || '',
      description: card.description?.trim() || '',
      topic: card.topic || 'Web Design',
      status: card.status || 'Без статуса',
      date: card.date || null
    };

    const { data } = await axios.put(`${KANBAN_API_URL}/${id}`, cardData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.error('API Error (edit):', error.response?.data || error.message);
    throw new Error(error.response?.data?.error || error.message);
  }
}

// Остальные функции без изменений
export async function fetchCards() {
  try {
    const token = getToken();
    const { data } = await axios.get(KANBAN_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
}

export async function deleteCard(id) {
  try {
    const token = getToken();
    const { data } = await axios.delete(`${KANBAN_API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
}

export async function getCard(id) {
  try {
    const token = getToken();
    const { data } = await axios.get(`${KANBAN_API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
}