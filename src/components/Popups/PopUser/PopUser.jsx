import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PopUserContainer,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserCheckbox,
  PopUserButton
} from './PopUser.styled';

export default function PopUser({ isOpen, onClose, onLogout }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogout = () => {
    onLogout();
    onClose();
    navigate('/login');
  };

  return (
    <PopUserContainer>
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      
      <PopUserTheme>
        <p>Темная тема</p>
        <PopUserCheckbox type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      
      <PopUserButton onClick={handleLogout}>
        Выйти
      </PopUserButton>
    </PopUserContainer>
  );
}