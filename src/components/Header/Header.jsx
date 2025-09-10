import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PopUser from '../Popups/PopUser/PopUser';
import {
  HeaderContainer,
  Container,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser
} from './Header.styled';

export default function Header({ onNewCardOpen }) {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  const handleNewCardClick = () => {
    console.log('Кнопка "Создать задачу" нажата в Header');
    if (onNewCardOpen) {
      onNewCardOpen();
    }
  };

  return (
    <HeaderContainer>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <Link to="/">
              <img src="/images/logo.png" alt="Логотип" />
            </Link>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton onClick={handleNewCardClick}>
              Создать новую задачу
            </HeaderButton>
            <HeaderUser 
              onClick={() => setIsUserPopupOpen(!isUserPopupOpen)}
            >
              Ivan Ivanov
            </HeaderUser>
            <PopUser 
              isOpen={isUserPopupOpen} 
              onClose={() => setIsUserPopupOpen(false)}
              onLogout={handleLogout}
            />
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderContainer>
  );
}