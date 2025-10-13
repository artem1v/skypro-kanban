import React from 'react';
import {
  PopUserContainer,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserCheckbox,
  PopUserButton
} from './PopUser.styled';

export default function PopUser({ isOpen, onClose, onOpenExit, user }) {
  if (!isOpen) return null;

  const handleExitClick = () => {
    if (onOpenExit && typeof onOpenExit === 'function') {
      onOpenExit();
    }
    onClose();
  };

  return (
    <PopUserContainer>
      <PopUserName>{user?.name || 'Пользователь'}</PopUserName>
      <PopUserMail>{user?.email || 'email@example.com'}</PopUserMail>
      
      <PopUserTheme>
        <p>Темная тема</p>
        <PopUserCheckbox type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      
      <PopUserButton onClick={handleExitClick}>
        Выйти
      </PopUserButton>
    </PopUserContainer>
  );
}