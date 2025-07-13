import React, { useState } from "react";
import PopUser from "../Popups/PopUser/PopUser";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="/" target="_self">
              <img src="/images/logo.png" alt="Логотип" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
              href="#user-set-target"
              className="header__user _hover02"
            >
              Ivan Ivanov
            </button>

            {isOpen && <PopUser />}
          </nav>
        </div>
      </div>
    </header>
  );
}
