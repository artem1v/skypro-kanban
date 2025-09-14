import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

export default function Header({ onNewCardOpen, onOpenExit }) {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

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
              onOpenExit={onOpenExit}
            />
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderContainer>
  );
}