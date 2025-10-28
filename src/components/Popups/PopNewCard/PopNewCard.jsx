// src/components/Popups/PopNewCard/PopNewCard.jsx
import React, { useState, useEffect } from 'react';
import {
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardForm,
  FormNewBlock,
  FormNewLabel,
  FormNewInput,
  FormNewTextarea,
  PopNewCardCategories,
  CategoriesTitle,
  CategoriesThemes,
  CategoriesTheme,
  FormNewCreate,
  ErrorMessage,
  PopNewCardCalendar,
  CalendarTitle,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  NavActions,
  NavAction,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
  CalendarPeriod,
  CalendarText,
  DateControl
} from './PopNewCard.styled';
import { COLUMN_STATUS, CATEGORIES } from '../../../utils/constants';
import { 
  formatDateForAPI, 
  formatDateForDisplay, 
  getCurrentMonthData, 
  getDaysInMonth 
} from '../../../utils/dateUtils';

export default function PopNewCard({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    topic: 'Web Design',
    status: COLUMN_STATUS.BACKLOG,
    date: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonthData());

  useEffect(() => {
    if (isOpen) {
      setCurrentMonth(getCurrentMonthData());
      // Сбрасываем форму при открытии
      setFormData({
        title: '',
        description: '',
        topic: 'Web Design',
        status: COLUMN_STATUS.BACKLOG,
        date: ''
      });
      setError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const days = getDaysInMonth(currentMonth.year, currentMonth.month);
  const today = new Date();
  const isToday = (day) => 
    day === today.getDate() && 
    currentMonth.month === today.getMonth() && 
    currentMonth.year === today.getFullYear();

  const isSelected = (day) => {
    if (!formData.date || !day) return false;
    const selectedDate = new Date(formData.date);
    return day === selectedDate.getDate() && 
           currentMonth.month === selectedDate.getMonth() && 
           currentMonth.year === selectedDate.getFullYear();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (day) => {
    if (day) {
      const apiDate = formatDateForAPI(day, currentMonth.month, currentMonth.year);
      setFormData(prev => ({
        ...prev,
        date: apiDate
      }));
    }
  };

  const handleMonthChange = (direction) => {
    setCurrentMonth(prev => {
      let newMonth = prev.month + direction;
      let newYear = prev.year;
      
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      
      const newDate = new Date(newYear, newMonth);
      return {
        year: newYear,
        month: newMonth,
        monthName: newDate.toLocaleDateString('ru-RU', { 
          month: 'long', 
          year: 'numeric' 
        })
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.title.trim()) {
      setError('Введите название задачи');
      return;
    }

    setLoading(true);

    try {
      const taskData = {
        title: formData.title.trim(),
        description: formData.description.trim() || '',
        topic: formData.topic,
        status: formData.status,
        date: formData.date || null
      };

      console.log('Отправляемые данные на API:', taskData);
      
      if (onSubmit) {
        await onSubmit(taskData);
      }
      onClose();
    } catch (err) {
      const errorMessage = err.message || 'Ошибка при создании задачи';
      setError(errorMessage);
      console.error('Ошибка создания задачи:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PopNewCardContainer $isOpen={isOpen}>
      <PopNewCardBlock>
        <PopNewCardContent>
          <PopNewCardTitle>Создание задачи</PopNewCardTitle>
          <PopNewCardClose onClick={onClose}>✕</PopNewCardClose>
          
          {error && (
            <ErrorMessage>
              {error}
            </ErrorMessage>
          )}
          
          <PopNewCardForm onSubmit={handleSubmit}>
            {/* Название задачи */}
            <FormNewBlock>
              <FormNewLabel htmlFor="formTitle">Название задачи</FormNewLabel>
              <FormNewInput
                type="text"
                name="title"
                id="formTitle"
                placeholder="Введите название задачи..."
                value={formData.title}
                onChange={handleInputChange}
                autoFocus
                required
              />
            </FormNewBlock>
            
            {/* Описание задачи */}
            <FormNewBlock>
              <FormNewLabel htmlFor="textArea">Описание задачи</FormNewLabel>
              <FormNewTextarea
                name="description"
                id="textArea"
                placeholder="Введите описание задачи..."
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
              />
            </FormNewBlock>

            {/* Календарь */}
            <PopNewCardCalendar>
              <CalendarTitle>Даты</CalendarTitle>
              <CalendarBlock>
                <CalendarNav>
                  <CalendarMonth>
                    {currentMonth.monthName}
                  </CalendarMonth>
                  <NavActions>
                    <NavAction onClick={() => handleMonthChange(-1)}>
                      ←
                    </NavAction>
                    <NavAction onClick={() => handleMonthChange(1)}>
                      →
                    </NavAction>
                  </NavActions>
                </CalendarNav>
                
                <CalendarContent>
                  <CalendarDaysNames>
                    <CalendarDayName>пн</CalendarDayName>
                    <CalendarDayName>вт</CalendarDayName>
                    <CalendarDayName>ср</CalendarDayName>
                    <CalendarDayName>чт</CalendarDayName>
                    <CalendarDayName>пт</CalendarDayName>
                    <CalendarDayName className="-weekend-">сб</CalendarDayName>
                    <CalendarDayName className="-weekend-">вс</CalendarDayName>
                  </CalendarDaysNames>
                  
                  <CalendarCells>
                    {days.map((day, index) => (
                      <CalendarCell
                        key={index}
                        className={`
                          ${day ? '_day' : '_empty'}
                          ${isToday(day) ? '_current' : ''}
                          ${isSelected(day) ? '_active-day' : ''}
                        `}
                        onClick={() => handleDateSelect(day)}
                      >
                        {day}
                      </CalendarCell>
                    ))}
                  </CalendarCells>
                </CalendarContent>
                
                <CalendarPeriod>
                  <CalendarText>
                    Срок исполнения: {' '}
                    <DateControl>
                      {formData.date ? formatDateForDisplay(formData.date) : 'Не установлен'}
                    </DateControl>
                  </CalendarText>
                </CalendarPeriod>
              </CalendarBlock>
            </PopNewCardCalendar>

            {/* Статус */}
            <FormNewBlock>
              <FormNewLabel>Статус</FormNewLabel>
              <FormNewInput
                as="select"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                {Object.values(COLUMN_STATUS).map(status => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </FormNewInput>
            </FormNewBlock>

            {/* Категории */}
            <PopNewCardCategories>
              <CategoriesTitle>Категория</CategoriesTitle>
              <CategoriesThemes>
                {CATEGORIES.map((category) => (
                  <CategoriesTheme
                    key={category.name}
                    className={`${category.color} ${formData.topic === category.name ? '_active-category' : ''}`}
                    onClick={() => setFormData(prev => ({ 
                      ...prev, 
                      topic: category.name 
                    }))}
                  >
                    {category.name}
                  </CategoriesTheme>
                ))}
              </CategoriesThemes>
            </PopNewCardCategories>
            
            {/* Кнопка создания */}
            <FormNewCreate type="submit" disabled={loading}>
              {loading ? 'Создание...' : 'Создать задачу'}
            </FormNewCreate>
          </PopNewCardForm>
        </PopNewCardContent>
      </PopNewCardBlock>
    </PopNewCardContainer>
  );
}