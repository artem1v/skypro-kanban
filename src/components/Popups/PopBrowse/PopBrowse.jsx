import React, { useState } from 'react';
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
  BtnEditDelete
} from './PopBrowse.styled';

export default function PopBrowse({ isOpen, onClose, task }) {
  const [isEditing, setIsEditing] = useState(false);

  if (!isOpen) return null;

  // Используем переданную задачу или заглушку
  const currentTask = task || {
    id: 1,
    title: 'Название задачи',
    description: 'Описание задачи...',
    topic: 'Web Design',
    theme: 'orange',
    date: '09.09.23',
    status: 'В работе'
  };

  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  return (
    <PopBrowseContainer id="popBrowse">
      <PopBrowseBlock>
        <PopBrowseContent>
          <PopBrowseTopBlock>
            <PopBrowseTitle>{currentTask.title}</PopBrowseTitle>
            <ThemeTop className={`_${currentTask.theme} _active-category`}>
              <p className={`_${currentTask.theme}`}>{currentTask.topic}</p>
            </ThemeTop>
          </PopBrowseTopBlock>

          <PopBrowseStatus>
            <StatusTitle>Статус</StatusTitle>
            <StatusThemes>
              {statuses.map((status) => (
                <StatusTheme
                  key={status}
                  className={currentTask.status === status ? '_active' : '_hide'}
                >
                  <p>{status}</p>
                </StatusTheme>
              ))}
            </StatusThemes>
          </PopBrowseStatus>

          <PopBrowseWrap>
            <PopBrowseForm id="formBrowseCard">
              <FormBrowseBlock>
                <FormBrowseLabel htmlFor="textArea01">Описание задачи</FormBrowseLabel>
                <FormBrowseTextarea
                  id="textArea01"
                  readOnly={!isEditing}
                  value={currentTask.description}
                  placeholder="Введите описание задачи..."
                />
              </FormBrowseBlock>
            </PopBrowseForm>

            <PopBrowseCalendar>
              <CalendarTitle>Даты</CalendarTitle>
              <CalendarBlock>
                <CalendarNav>
                  <CalendarMonth>Сентябрь 2023</CalendarMonth>
                  <NavActions>
                    <NavAction data-action="prev">←</NavAction>
                    <NavAction data-action="next">→</NavAction>
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
                      <CalendarCell
                        key={index}
                        className={index === 8 ? '_current _active-day' : ''}
                      >
                        {index + 1}
                      </CalendarCell>
                    ))}
                  </CalendarCells>
                </CalendarContent>
                
                <CalendarPeriod>
                  <CalendarText>
                    Срок исполнения: <DateControl>{currentTask.date}</DateControl>
                  </CalendarText>
                </CalendarPeriod>
              </CalendarBlock>
            </PopBrowseCalendar>
          </PopBrowseWrap>

          <ThemeDown>
            <ThemeDownCategories>
              <CategoriesTitle>Категория</CategoriesTitle>
              <CategoriesTheme className={`_${currentTask.theme} _active-category`}>
                <p className={`_${currentTask.theme}`}>{currentTask.topic}</p>
              </CategoriesTheme>
            </ThemeDownCategories>
          </ThemeDown>

          {!isEditing ? (
            <PopBrowseBtnBrowse>
              <BtnGroup>
                <BtnBrowseEdit onClick={() => setIsEditing(true)}>
                  Редактировать задачу
                </BtnBrowseEdit>
                <BtnBrowseDelete>
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
                <BtnEditSave>
                  Сохранить
                </BtnEditSave>
                <BtnEditCancel onClick={() => setIsEditing(false)}>
                  Отменить
                </BtnEditCancel>
                <BtnEditDelete>
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