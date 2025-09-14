import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import theme from './styles/theme';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import CardPage from './pages/CardPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import PopNewCard from './components/Popups/PopNewCard/PopNewCard';
import PopExit from './components/Popups/PopExit/PopExit';

function App() {
  const [isNewCardOpen, setIsNewCardOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);

  const handleNewCardOpen = () => {
    console.log('Opening new card modal');
    setIsNewCardOpen(true);
  };

  const handleNewCardClose = () => {
    console.log('Closing new card modal');
    setIsNewCardOpen(false);
  };

  const handleExitOpen = () => {
    console.log('Opening exit modal');
    setIsExitOpen(true);
  };

  const handleExitClose = () => {
    console.log('Closing exit modal');
    setIsExitOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="wrapper">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            <Route path="/" element={
              <ProtectedRoute>
                <HomePage 
                  onNewCardOpen={handleNewCardOpen}
                  onOpenExit={handleExitOpen}
                />
              </ProtectedRoute>
            } />
            
            <Route path="/card/:id" element={
              <ProtectedRoute>
                <CardPage />
              </ProtectedRoute>
            } />
            
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>

          {/* Модальные окна */}
          <PopNewCard 
            isOpen={isNewCardOpen} 
            onClose={handleNewCardClose} 
          />
          
          <PopExit 
            isOpen={isExitOpen} 
            onClose={handleExitClose} 
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;