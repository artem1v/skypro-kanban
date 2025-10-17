import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
  BtnClose,
  LoadingMessage,
  ErrorMessage,
  EditInput,
  EditSelect
} from './CardPage.styled';
import { getCard, editCard, deleteCard } from '../api/tasks';

export default function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    topic: '',
    status: ''
  });

  useEffect(() => {
    loadTask();
  }, [id]);

  const loadTask = async () => {
    try {
      setLoading(true);
      setError('');
      const taskData = await getCard(id);
      console.log('Полученная задача:', taskData);
      setTask(taskData);
      setFormData({
        title: taskData.title || '',
        description: taskData.description || '',
        topic: taskData.topic || 'Web Design',
        status: taskData.status || 'Без статуса'
      });
    } catch (err) {
      console.error('Ошибка загрузки задачи:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      setError('');
      await editCard(id, formData);
      setTask(prev => ({ ...prev, ...formData }));
      setIsEditing(false);
      // Можно показать сообщение об успешном сохранении
      alert('Задача успешно обновлена!');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      try {
        await deleteCard(id);
        navigate('/');
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      title: task.title || '',
      description: task.description || '',
      topic: task.topic || 'Web Design',
      status: task.status || 'Без статуса'
    });
    setIsEditing(false);
  };

  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];
  const topics = ['Web Design', 'Research', 'Copywriting'];

  if (loading) {
    return (
      <CardPageContainer>
        <CardPageContent>
          <LoadingMessage>Загрузка задачи...</LoadingMessage>
        </CardPageContent>
      </CardPageContainer>
    );
  }

  if (error && !task) {
    return (
      <CardPageContainer>
        <CardPageContent>
          <ErrorMessage>Ошибка: {error}</ErrorMessage>
          <CardPageBack as={Link} to="/">
            ← Назад к задачам
          </CardPageBack>
        </CardPageContent>
      </CardPageContainer>
    );
  }

  if (!task) {
    return (
      <CardPageContainer>
        <CardPageContent>
          <ErrorMessage>Задача не найдена</ErrorMessage>
          <CardPageBack as={Link} to="/">
            ← Назад к задачам
          </CardPageBack>
        </CardPageContent>
      </CardPageContainer>
    );
  }

  return (
    <CardPageContainer>
      <CardPageContent>
        <CardPageBack as={Link} to="/">
          ← Назад к задачам
        </CardPageBack>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <CardPageTopBlock>
          {isEditing ? (
            <EditInput
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Название задачи"
            />
          ) : (
            <CardPageTitle>{task.title || 'Без названия'}</CardPageTitle>
          )}
          
          {isEditing ? (
            <EditSelect
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
            >
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </EditSelect>
          ) : (
            task.topic && (
              <CardPageTheme className={`_${getThemeByTopic(task.topic)} _active-category`}>
                <p className={`_${getThemeByTopic(task.topic)}`}>{task.topic}</p>
              </CardPageTheme>
            )
          )}
        </CardPageTopBlock>

        <CardPageStatus>
          <StatusTitle>Статус</StatusTitle>
          {isEditing ? (
            <EditSelect
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </EditSelect>
          ) : (
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
          )}
        </CardPageStatus>

        <CardPageWrap>
          <CardPageForm>
            <FormBrowseBlock>
              <FormBrowseLabel htmlFor="textArea01">Описание задачи</FormBrowseLabel>
              <FormBrowseTextarea
                id="textArea01"
                readOnly={!isEditing}
                value={isEditing ? formData.description : (task.description || "Описание отсутствует")}
                onChange={handleInputChange}
                name="description"
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
                  Срок исполнения: <DateControl>{task.date || 'Не указан'}</DateControl>
                </CalendarText>
              </CalendarPeriod>
            </CalendarBlock>
          </CardPageCalendar>
        </CardPageWrap>

        {(!isEditing && task.topic) && (
          <CardPageCategories>
            <CategoriesTitle>Категория</CategoriesTitle>
            <CategoriesTheme className={`_${getThemeByTopic(task.topic)} _active-category`}>
              <p className={`_${getThemeByTopic(task.topic)}`}>{task.topic}</p>
            </CategoriesTheme>
          </CardPageCategories>
        )}

        <CardPageActions>
          <BtnGroup>
            {isEditing ? (
              <>
                <BtnEdit onClick={handleSave}>
                  Сохранить
                </BtnEdit>
                <BtnEdit onClick={handleCancel}>
                  Отменить
                </BtnEdit>
              </>
            ) : (
              <BtnEdit onClick={() => setIsEditing(true)}>
                Редактировать
              </BtnEdit>
            )}
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

// Вспомогательная функция для определения темы по topic
function getThemeByTopic(topic) {
  const themeMap = {
    'Web Design': 'orange',
    'Research': 'green',
    'Copywriting': 'purple'
  };
  
  return themeMap[topic] || 'orange';
}