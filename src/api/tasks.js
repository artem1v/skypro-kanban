// src/api/tasks.js
import axios from 'axios';
import { getToken } from './auth';

const KANBAN_API_URL = "https://wedev-api.sky.pro/api/kanban";

// Получить все карточки
export async function fetchCards() {
  try {
    const token = getToken();
    const { data } = await axios.get(KANBAN_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Загруженные задачи:', data);
    return data; // Возвращаем весь ответ
  } catch (error) {
    console.error('API Error (fetch):', error.response?.data);
    throw new Error(error.response?.data?.error || error.message);
  }
}

// Получить конкретную карточку по ID
export async function getCard(id) {
  try {
    const token = getToken();
    const { data } = await axios.get(`${KANBAN_API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Полученная задача по ID:', data);
    // Возвращаем task из ответа или весь data
    return data.task || data;
  } catch (error) {
    console.error('API Error (get):', error.response?.data);
    throw new Error(error.response?.data?.error || error.message);
  }
}

// Добавить карточку
export async function postCard(card) {
  try {
    const token = getToken();

    const cardData = {
      title: card.title?.trim() || '',
      description: card.description?.trim() || '',
      topic: card.topic || 'Web Design',
      status: card.status || 'Без статуса',
      date: card.date || null
    };

    console.log('Отправка данных на API:', cardData);

    const { data } = await axios.post(
      KANBAN_API_URL,
      cardData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': '', // ПУСТАЯ СТРОКА
        },
      }
    );

    console.log('Ответ от API:', data);
    return data;
  } catch (error) {
    console.error('API Error:', error.response?.data);
    throw new Error(error.response?.data?.error || error.message);
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

    console.log('Обновление задачи ID:', id);
    console.log('Данные для обновления:', cardData);

    const { data } = await axios.put(
      `${KANBAN_API_URL}/${id}`, 
      cardData, 
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': '', // ПУСТАЯ СТРОКА
        },
      }
    );
    
    console.log('Ответ от API (обновление):', data);
    return data;
  } catch (error) {
    console.error('API Error (edit):', error.response?.data);
    throw new Error(error.response?.data?.error || error.message);
  }
}

// Удалить карточку
export async function deleteCard(id) {
  try {
    const token = getToken();
    console.log('Удаление задачи ID:', id);
    
    const { data } = await axios.delete(`${KANBAN_API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    console.log('Ответ от API (удаление):', data);
    return data;
  } catch (error) {
    console.error('API Error (delete):', error.response?.data);
    throw new Error(error.response?.data?.error || error.message);
  }
}

// Экспортируем все функции которые могут понадобиться
export default {
  fetchCards,
  getCard,
  postCard,
  editCard,
  deleteCard
};