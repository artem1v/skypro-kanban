import React, { useState } from "react";

import "./Header.css";
import PopUser from "../Popups/PopUser/PopUser";
import { A, Auser, DivBlock, DivContainer, DivLogo, Nav, SButton, SHeader } from "./Header.styled";

export default function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  return (
    <SHeader>
      <DivContainer>
        <DivBlock>
          <DivLogo className="_show _light">
            <a href="/">
              <img src="/images/logo.png" alt="Логотип" />
            </a>
          </DivLogo>
          <Nav className="header__nav">
            <SButton className="_hover01">
              <A href="#popNewCard">Создать новую задачу</A>
            </SButton>
            <a
              className="header__user _hover02"
              onClick={() => setIsUserPopupOpen(!isUserPopupOpen)}
            >
              Ivan Ivanov
            </a>
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
