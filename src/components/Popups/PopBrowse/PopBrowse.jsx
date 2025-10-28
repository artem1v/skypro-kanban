// src/components/Popups/PopBrowse/PopBrowse.jsx
import React, { useState, useEffect } from 'react';
import {
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTitle,
  ThemeTop,
  PopBrowseStatus,
  StatusTitle,
  StatusThemes,
  StatusTheme,
  PopBrowseWrap,
  PopBrowseForm,
  FormBrowseBlock,
  FormBrowseLabel,
  FormBrowseTextarea,
  PopBrowseCalendar,
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
  ThemeDown,
  ThemeDownCategories,
  CategoriesTitle,
  CategoriesTheme,
  PopBrowseBtnBrowse,
  BtnGroup,
  BtnBrowseEdit,
  BtnBrowseDelete,
  BtnBrowseClose,
  PopBrowseBtnEdit,
  BtnEditSave,
  BtnEditCancel,
  BtnEditDelete,
  FormNewInput
} from './PopBrowse.styled';

export default function PopBrowse({ isOpen, onClose, task, onSave, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    if (task) {
      setEditedTask(task);
      setSelectedDate(task.date || new Date().toLocaleDateString('ru-RU'));
    }
  }, [task]);

  if (!isOpen || !editedTask) return null;

  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  // Функции для календаря
  const getCurrentMonthYear = () => {
    return new Date().toLocaleDateString('ru-RU', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getDaysInMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
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

  const handleDateSelect = (day) => {
    if (day && isEditing) {
      const currentDate = new Date();
      const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const formattedDate = newDate.toLocaleDateString('ru-RU');
      setSelectedDate(formattedDate);
      setEditedTask(prev => ({ ...prev, date: formattedDate }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (categoryName) => {
    if (isEditing) {
      setEditedTask(prev => ({
        ...prev,
        topic: categoryName
      }));
    }
  };

  const handleSave = async () => {
    try {
      if (onSave) {
        await onSave(editedTask.id, editedTask);
      }
      setIsEditing(false);
    } catch (error) {
      console.error('Ошибка при сохранении:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      try {
        if (onDelete) {
          await onDelete(editedTask.id);
          onClose();
        }
      } catch (error) {
        console.error('Ошибка при удалении:', error);
      }
    }
  };

  const days = getDaysInMonth();
  const currentDay = new Date().getDate();
  const selectedDay = selectedDate ? parseInt(selectedDate.split('.')[0]) : null;

  return (
    <PopBrowseContainer id="popBrowse">
      <PopBrowseBlock>
        <PopBrowseContent>
          <PopBrowseTopBlock>
            {isEditing ? (
              <FormNewInput
                type="text"
                name="title"
                value={editedTask.title}
                onChange={handleInputChange}
                style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}
              />
            ) : (
              <PopBrowseTitle>{editedTask.title}</PopBrowseTitle>
            )}
            <ThemeTop className={`_orange _active-category`}>
              <p>{editedTask.topic}</p>
            </ThemeTop>
          </PopBrowseTopBlock>

          <PopBrowseStatus>
            <StatusTitle>Статус</StatusTitle>
            <StatusThemes>
              {statuses.map((status) => (
                <StatusTheme
                  key={status}
                  className={`${editedTask.status === status ? '_active' : ''} ${isEditing ? '' : '_hide'}`}
                  onClick={() => isEditing && setEditedTask(prev => ({ ...prev, status }))}
                >
                  <p>{status}</p>
                </StatusTheme>
              ))}
              {!isEditing && (
                <StatusTheme className="_active">
                  <p>{editedTask.status}</p>
                </StatusTheme>
              )}
            </StatusThemes>
          </PopBrowseStatus>

          <PopBrowseWrap>
            <PopBrowseForm id="formBrowseCard">
              <FormBrowseBlock>
                <FormBrowseLabel htmlFor="textArea01">Описание задачи</FormBrowseLabel>
                <FormBrowseTextarea
                  id="textArea01"
                  name="description"
                  readOnly={!isEditing}
                  value={editedTask.description}
                  onChange={handleInputChange}
                  placeholder="Введите описание задачи..."
                />
              </FormBrowseBlock>
            </PopBrowseForm>

            <PopBrowseCalendar>
              <CalendarTitle>Даты</CalendarTitle>
              <CalendarBlock>
                <CalendarNav>
                  <CalendarMonth>{getCurrentMonthYear()}</CalendarMonth>
                  <NavActions>
                    <NavAction>←</NavAction>
                    <NavAction>→</NavAction>
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
                        className={`${day === currentDay ? '_current' : ''} ${day === selectedDay ? '_active-day' : ''} ${!day ? '_empty' : ''} ${isEditing ? '_editable' : ''}`}
                        onClick={() => handleDateSelect(day)}
                      >
                        {day}
                      </CalendarCell>
                    ))}
                  </CalendarCells>
                </CalendarContent>
                
                <CalendarPeriod>
                  <CalendarText>
                    Срок исполнения: <DateControl>{selectedDate}</DateControl>
                  </CalendarText>
                </CalendarPeriod>
              </CalendarBlock>
            </PopBrowseCalendar>
          </PopBrowseWrap>

          <ThemeDown>
            <ThemeDownCategories>
              <CategoriesTitle>Категория</CategoriesTitle>
              <CategoriesTheme 
                className={`_orange _active-category ${isEditing ? '_editable' : ''}`}
                onClick={() => handleCategoryChange('Web Design')}
              >
                <p>Web Design</p>
              </CategoriesTheme>
              <CategoriesTheme 
                className={`_green ${editedTask.topic === 'Research' ? '_active-category' : ''} ${isEditing ? '_editable' : ''}`}
                onClick={() => handleCategoryChange('Research')}
              >
                <p>Research</p>
              </CategoriesTheme>
              <CategoriesTheme 
                className={`_purple ${editedTask.topic === 'Copywriting' ? '_active-category' : ''} ${isEditing ? '_editable' : ''}`}
                onClick={() => handleCategoryChange('Copywriting')}
              >
                <p>Copywriting</p>
              </CategoriesTheme>
            </ThemeDownCategories>
          </ThemeDown>

          {!isEditing ? (
            <PopBrowseBtnBrowse>
              <BtnGroup>
                <BtnBrowseEdit onClick={() => setIsEditing(true)}>
                  Редактировать задачу
                </BtnBrowseEdit>
                <BtnBrowseDelete onClick={handleDelete}>
                  Удалить задачу
                </BtnBrowseDelete>
              </BtnGroup>
              <BtnBrowseClose onClick={onClose}>
                Закрыть
              </BtnBrowseClose>
            </PopBrowseBtnBrowse>
          ) : (
            <PopBrowseBtnEdit>
              <BtnGroup>
                <BtnEditSave onClick={handleSave}>
                  Сохранить
                </BtnEditSave>
                <BtnEditCancel onClick={() => setIsEditing(false)}>
                  Отменить
                </BtnEditCancel>
                <BtnEditDelete onClick={handleDelete}>
                  Удалить задачу
                </BtnEditDelete>
              </BtnGroup>
              <BtnBrowseClose onClick={onClose}>
                Закрыть
              </BtnBrowseClose>
            </PopBrowseBtnEdit>
          )}
        </PopBrowseContent>
      </PopBrowseBlock>
    </PopBrowseContainer>
  );
}