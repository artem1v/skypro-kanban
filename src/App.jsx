import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import theme from './styles/theme';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import PopNewCard from './components/Popups/PopNewCard/PopNewCard';
import PopBrowse from './components/Popups/PopBrowse/PopBrowse';
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const [isNewCardOpen, setIsNewCardOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleBrowseOpen = (task) => {
    console.log('Opening task:', task);
    setSelectedTask(task);
    setIsBrowseOpen(true);
  };

  const handleBrowseClose = () => {
    setIsBrowseOpen(false);
    setSelectedTask(null);
  };

  const handleNewCardOpen = () => {
    console.log('Opening new card modal');
    setIsNewCardOpen(true);
  };

  const handleNewCardClose = () => {
    console.log('Closing new card modal');
    setIsNewCardOpen(false);
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
                  onBrowseOpen={handleBrowseOpen}
                />
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {/* Модальные окна */}
          <PopNewCard 
            isOpen={isNewCardOpen} 
            onClose={handleNewCardClose} 
          />
          
          <PopBrowse 
            isOpen={isBrowseOpen} 
            onClose={handleBrowseClose}
            task={selectedTask}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;