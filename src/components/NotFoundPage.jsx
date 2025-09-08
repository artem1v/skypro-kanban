import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', margin: '0', color: '#666' }}>404</h1>
      <h2 style={{ margin: '1rem 0', color: '#333' }}>Страница не найдена</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Запрашиваемая страница не существует. Проверьте URL или вернитесь на главную.
      </p>
      <Link to="/" style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px'
      }}>
        На главную
      </Link>
    </div>
  );
};

export default NotFoundPage;