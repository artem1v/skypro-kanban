import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

// Заглушки для компонентов страниц
const HomePage = () => <div style={{ padding: '2rem' }}>Главная страница (публичная)</div>;
const AboutPage = () => <div style={{ padding: '2rem' }}>О нас (публичная)</div>;
const DashboardPage = () => <div style={{ padding: '2rem' }}>Личный кабинет (приватная)</div>;
const ProfilePage = () => <div style={{ padding: '2rem' }}>Профиль (приватная)</div>;
const SettingsPage = () => <div style={{ padding: '2rem' }}>Настройки (приватная)</div>;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUser(username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        {/* Навигация */}
        <nav style={{
          padding: '1rem',
          backgroundColor: '#f0f0f0',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="/" style={{ textDecoration: 'none', color: '#333' }}>Главная</a>
            <a href="/about" style={{ textDecoration: 'none', color: '#333' }}>О нас</a>
            
            {isAuthenticated ? (
              <>
                <a href="/dashboard" style={{ textDecoration: 'none', color: '#333' }}>Кабинет</a>
                <a href="/profile" style={{ textDecoration: 'none', color: '#333' }}>Профиль</a>
                <a href="/settings" style={{ textDecoration: 'none', color: '#333' }}>Настройки</a>
                <span>Добро пожаловать, {user}!</span>
                <button onClick={handleLogout} style={{ marginLeft: 'auto' }}>
                  Выйти
                </button>
              </>
            ) : (
              <a href="/login" style={{ textDecoration: 'none', color: '#333', marginLeft: 'auto' }}>
                Войти
              </a>
            )}
          </div>
        </nav>

        <Routes>
          {/* Публичные маршруты */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={
            isAuthenticated ? 
            <Navigate to="/dashboard" replace /> : 
            <LoginPage onLogin={handleLogin} />
          } />

          {/* Приватные маршруты */}
          <Route path="/dashboard" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <DashboardPage />
            </PrivateRoute>
          } />
          
          <Route path="/profile" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <ProfilePage />
            </PrivateRoute>
          } />
          
          <Route path="/settings" element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <SettingsPage />
            </PrivateRoute>
          } />

          {/* Страница 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;