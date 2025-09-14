import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { cardsData } from '../data';
import {
  CardPageContainer,
  CardPageContent,
  CardPageBack,
  CardPageTopBlock,
  CardPageTitle,
  CardPageTheme,
  CardPageStatus,
  StatusTitle,
  StatusThemes,
  StatusTheme,
  CardPageWrap,
  CardPageForm,
  FormBrowseBlock,
  FormBrowseLabel,
  FormBrowseTextarea,
  CardPageCalendar,
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
  CardPageCategories,
  CategoriesTitle,
  CategoriesTheme,
  CardPageActions,
  BtnGroup,
  BtnEdit,
  BtnDelete,
  BtnClose
} from './CardPage.styled';

export default function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const foundTask = cardsData.find(card => card.id === parseInt(id));
    if (foundTask) {
      setTask(foundTask);
    } else {
      navigate('/404');
    }
  }, [id, navigate]);

  if (!task) {
    return <div>Загрузка...</div>;
  }

  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  const handleDelete = () => {
    console.log('Удаляем задачу:', task.id);
    navigate('/');
  };

  return (
    <CardPageContainer>
      <CardPageContent>
        <CardPageBack as={Link} to="/">
          ← Назад к задачам
        </CardPageBack>
        
        <CardPageTopBlock>
          <CardPageTitle>{task.title}</CardPageTitle>
          <CardPageTheme className={`_${task.theme} _active-category`}>
            <p className={`_${task.theme}`}>{task.topic}</p>
          </CardPageTheme>
        </CardPageTopBlock>

        <CardPageStatus>
          <StatusTitle>Статус</StatusTitle>
          <StatusThemes>
            {statuses.map((status) => (
              <StatusTheme
                key={status}
                className={task.status === status ? '_active' : '_hide'}
              >
                <p>{status}</p>
              </StatusTheme>
            ))}
          </StatusThemes>
        </CardPageStatus>

        <CardPageWrap>
          <CardPageForm>
            <FormBrowseBlock>
              <FormBrowseLabel htmlFor="textArea01">Описание задачи</FormBrowseLabel>
              <FormBrowseTextarea
                id="textArea01"
                readOnly={!isEditing}
                value={task.description || "Описание отсутствует"}
                placeholder="Введите описание задачи..."
              />
            </FormBrowseBlock>
          </CardPageForm>

          <CardPageCalendar>
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
                  Срок исполнения: <DateControl>{task.date}</DateControl>
                </CalendarText>
              </CalendarPeriod>
            </CalendarBlock>
          </CardPageCalendar>
        </CardPageWrap>

        <CardPageCategories>
          <CategoriesTitle>Категория</CategoriesTitle>
          <CategoriesTheme className={`_${task.theme} _active-category`}>
            <p className={`_${task.theme}`}>{task.topic}</p>
          </CategoriesTheme>
        </CardPageCategories>

        <CardPageActions>
          <BtnGroup>
            <BtnEdit onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Сохранить' : 'Редактировать'}
            </BtnEdit>
            <BtnDelete onClick={handleDelete}>
              Удалить задачу
            </BtnDelete>
          </BtnGroup>
          <BtnClose as={Link} to="/">
            Закрыть
          </BtnClose>
        </CardPageActions>
      </CardPageContent>
    </CardPageContainer>
  );
}