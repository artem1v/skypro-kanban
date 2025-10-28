// src/utils/dateUtils.js
export const formatDateForAPI = (day, month, year) => {
  if (!day) return null;
  
  // Создаем дату и корректируем timezone
  const date = new Date(year, month, day);
  
  // Получаем локальные компоненты даты (избегаем UTC смещения)
  const localYear = date.getFullYear();
  const localMonth = String(date.getMonth() + 1).padStart(2, '0');
  const localDay = String(date.getDate()).padStart(2, '0');
  
  const formatted = `${localYear}-${localMonth}-${localDay}`;
  console.log(`Форматирование даты: ${day}.${month + 1}.${year} -> ${formatted}`);
  
  return formatted;
};

export const formatDateForDisplay = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  
  return date.toLocaleDateString('ru-RU');
};

export const getCurrentMonthData = () => {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth(),
    monthName: now.toLocaleDateString('ru-RU', { 
      month: 'long', 
      year: 'numeric' 
    })
  };
};

export const getDaysInMonth = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  
  const days = [];
  const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
  
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  
  for (let i = 1; i <= lastDay.getDate(); i++) {
    days.push(i);
  }
  
  return days;
};