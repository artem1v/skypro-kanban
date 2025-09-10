import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundContainer, NotFoundTitle, NotFoundText, NotFoundLink } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundText>Страница не найдена</NotFoundText>
      <NotFoundLink as={Link} to="/">
        Вернуться на главную
      </NotFoundLink>
    </NotFoundContainer>
  );
}