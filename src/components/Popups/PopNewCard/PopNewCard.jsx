import React, { useState } from 'react';
import { tasksAPI } from '../../../api/tasks';
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
  ErrorMessage // Теперь этот импорт работает
} from './PopNewCard.styled';

export default function PopNewCard({ isOpen, onClose }) { // Убираем onTaskCreated если он не используется
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    topic: 'Web Design',
    status: 'Без статуса',
    date: new Date().toISOString().split('T')[0]
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
      // Если нужно обновить список задач, можно добавить window.location.reload()
      // или вызвать callback функцию для обновления состояния
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
          
          <PopNewCardForm onSubmit={handleSubmit}>
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
            
            <FormNewCreate type="submit" disabled={loading}>
              {loading ? 'Создание...' : 'Создать задачу'}
            </FormNewCreate>
          </PopNewCardForm>
        </PopNewCardContent>
      </PopNewCardBlock>
    </PopNewCardContainer>
  );
}