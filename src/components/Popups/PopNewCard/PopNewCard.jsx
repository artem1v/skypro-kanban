import React, { useState } from 'react';
import { tasksAPI } from '../../../api/tasks';
import {
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardForm,
  FormNewBlock,
  FormNewLabel,
  FormNewInput,
  FormNewTextarea,
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
  DateControl,
  PopNewCardCategories,
  CategoriesTitle,
  CategoriesThemes,
  CategoriesTheme,
  FormNewCreate,
} from './PopNewCard.styled';

export default function PopNewCard({ isOpen, onClose, onTaskCreated }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    topic: 'Web Design',
    date: new Date().toLocaleDateString('ru-RU'),
    status: 'Без статуса'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const categories = [
    { name: 'Web Design', theme: 'orange' },
    { name: 'Research', theme: 'green' },
    { name: 'Copywriting', theme: 'purple' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await tasksAPI.createTask(formData);
      onClose();
      if (onTaskCreated) {
        onTaskCreated(); // Обновить список задач
      }
    } catch (err) {
      setError(err.message);
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
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <PopNewCardWrap>
            <PopNewCardForm id="formNewCard" onSubmit={handleSubmit}>
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
              
              <FormNewBlock>
                <FormNewLabel htmlFor="textArea">Описание задачи</FormNewLabel>
                <FormNewTextarea
                  name="description"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                />
              </FormNewBlock>
            </PopNewCardForm>
            
            <PopNewCardCalendar>
              <CalendarTitle>Даты</CalendarTitle>
              <CalendarBlock>
                <CalendarNav>
                  <CalendarMonth>Сентябрь 2023</CalendarMonth>
                  <NavActions>
                    <NavAction data-action="prev">
                      <svg width="6" height="11" viewBox="0 0 6 11">
                        <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z"/>
                      </svg>
                    </NavAction>
                    <NavAction data-action="next">
                      <svg width="6" height="11" viewBox="0 0 6 11">
                        <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z"/>
                      </svg>
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
                    {[...Array(35)].map((_, index) => (
                      <CalendarCell key={index} className={index % 7 >= 5 ? '-weekend-' : ''}>
                        {index + 1}
                      </CalendarCell>
                    ))}
                  </CalendarCells>
                </CalendarContent>
                
                <CalendarPeriod>
                  <CalendarText>
                    Выберите срок исполнения <DateControl>09.09.23</DateControl>
                  </CalendarText>
                </CalendarPeriod>
              </CalendarBlock>
            </PopNewCardCalendar>
          </PopNewCardWrap>
          
          <PopNewCardCategories>
            <CategoriesTitle>Категория</CategoriesTitle>
            <CategoriesThemes>
              {categories.map((category) => (
                <CategoriesTheme
                  key={category.name}
                  className={`_${category.theme} ${formData.topic === category.name ? '_active-category' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, topic: category.name }))}
                >
                  <p className={`_${category.theme}`}>{category.name}</p>
                </CategoriesTheme>
              ))}
            </CategoriesThemes>
          </PopNewCardCategories>
          
          <FormNewCreate 
            type="submit" 
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Создание...' : 'Создать задачу'}
          </FormNewCreate>
        </PopNewCardContent>
      </PopNewCardBlock>
    </PopNewCardContainer>
  );
}