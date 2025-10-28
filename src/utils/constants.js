// src/utils/constants.js
export const API_BASE_URL = 'https://wedev-api.sky.pro/api/kanban';
export const USER_API_URL = 'https://wedev-api.sky.pro/api/user';

// Статусы как в макете
export const COLUMN_STATUS = {
  BACKLOG: 'Без статуса',
  TODO: 'Нужно сделать',
  IN_PROGRESS: 'В работе', 
  TESTING: 'Тестирование',
  DONE: 'Готово'
};

export const COLUMNS = [
  { id: 'backlog', title: 'Без статуса', status: COLUMN_STATUS.BACKLOG },
  { id: 'todo', title: 'Нужно сделать', status: COLUMN_STATUS.TODO },
  { id: 'in-progress', title: 'В работе', status: COLUMN_STATUS.IN_PROGRESS },
  { id: 'testing', title: 'Тестирование', status: COLUMN_STATUS.TESTING },
  { id: 'done', title: 'Готово', status: COLUMN_STATUS.DONE }
];

export const CATEGORIES = [
  { name: 'Web Design', color: '_orange' },
  { name: 'Research', color: '_green' },
  { name: 'Copywriting', color: '_purple' }
];