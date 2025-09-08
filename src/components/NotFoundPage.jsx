import React from 'react';

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
      <p style={{ color: '#666' }}>
        Запрашиваемая страница не существует. Проверьте URL или вернитесь на главную.
      </p>
    </div>
  );
};

export default NotFoundPage;