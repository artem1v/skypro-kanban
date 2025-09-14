import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PopExitContainer,
  PopExitBlock,
  PopExitContent,
  PopExitTitle,
  PopExitForm,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo
} from './PopExit.styled';

export default function PopExit({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleExit = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  const handleStay = () => {
    onClose();
    navigate('/');
  };

  return (
    <PopExitContainer>
      <PopExitBlock>
        <PopExitContent>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm>
            <PopExitFormGroup>
              <PopExitYes onClick={handleExit}>
                Да, выйти
              </PopExitYes>
              <PopExitNo onClick={handleStay}>
                Нет, остаться
              </PopExitNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitContent>
      </PopExitBlock>
    </PopExitContainer>
  );
}