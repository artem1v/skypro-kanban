import React, { useState } from "react";
import PopUser from "../Popups/PopUser/PopUser";
import {
  A,
  AUser,
  DivBlock,
  DivContainer,
  DivLogo,
  Nav,
  SButton,
  SHeader,
} from "./Header.styled";

export default function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  return (
    <SHeader>
      <DivContainer>
        <DivBlock>
          <DivLogo>
            <a href="/">
              <img src="/images/logo.png" alt="Логотип" />
            </a>
          </DivLogo>
          <Nav>
            <SButton >
              <A href="#popNewCard">Создать новую задачу</A>
            </SButton>
            <AUser
              
              onClick={() => setIsUserPopupOpen(!isUserPopupOpen)}
            >
              Ivan Ivanov
            </AUser>
            <PopUser
              isOpen={isUserPopupOpen}
              onClose={() => setIsUserPopupOpen(false)}
            />
          </Nav>
        </DivBlock>
      </DivContainer>
    </SHeader>
  );
}
