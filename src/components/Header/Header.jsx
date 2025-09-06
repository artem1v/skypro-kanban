import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

export default function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <a href="/">
              <img src="/images/logo.png" alt="Логотип" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton>
              <a href="#popNewCard">Создать новую задачу</a>
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