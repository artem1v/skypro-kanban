// src/utils/constants.js
export const API_BASE_URL = 'https://wedev-api.sky.pro/api/kanban';
export const USER_API_URL = 'https://wedev-api.sky.pro/api/user';

// Статусы как они приходят от API
export const COLUMN_STATUS = {
  BACKLOG: 'Без статуса',
  TODO: 'Нужно сделать', 
  IN_PROGRESS: 'В работе',
  TESTING: 'Тестирование',
  DONE: 'Готово'
};

// Альтернативные варианты статусов (на случай если API использует другие названия)
export const COLUMN_STATUS_ALTERNATIVES = {
  'Без статуса': ['Без статуса', 'Backlog', 'backlog'],
  'Нужно сделать': ['Нужно сделать', 'To Do', 'TODO', 'todo'],
  'В работе': ['В работе', 'In Progress', 'in-progress', 'В работе'],
  'Тестирование': ['Тестирование', 'Testing', 'testing'],
  'Готово': ['Готово', 'Done', 'done', 'Готово']
};

export const COLUMNS = [
  { 
    id: 'backlog', 
    title: 'Без статуса', 
    status: COLUMN_STATUS.BACKLOG,
    alternativeStatuses: COLUMN_STATUS_ALTERNATIVES['Без статуса']
  },
  { 
    id: 'todo', 
    title: 'Нужно сделать', 
    status: COLUMN_STATUS.TODO,
    alternativeStatuses: COLUMN_STATUS_ALTERNATIVES['Нужно сделать']
  },
  { 
    id: 'in-progress', 
    title: 'В работе', 
    status: COLUMN_STATUS.IN_PROGRESS,
    alternativeStatuses: COLUMN_STATUS_ALTERNATIVES['В работе']
  },
  { 
    id: 'testing', 
    title: 'Тестирование', 
    status: COLUMN_STATUS.TESTING,
    alternativeStatuses: COLUMN_STATUS_ALTERNATIVES['Тестирование']
  },
  { 
    id: 'done', 
    title: 'Готово', 
    status: COLUMN_STATUS.DONE,
    alternativeStatuses: COLUMN_STATUS_ALTERNATIVES['Готово']
  }
];

export const CATEGORIES = [
  { name: 'Web Design', color: '_orange' },
  { name: 'Research', color: '_green' },
  { name: 'Copywriting', color: '_purple' }
];