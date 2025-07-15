import React, { useState } from 'react';

import './Header.css';
import PopUser from '../Popups/PopUser/PopUser';

export default function Header() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="/"><img src="/images/logo.png" alt="Логотип" /></a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a 
              href="#user-set-target" 
              className="header__user _hover02"
              onClick={() => setIsUserPopupOpen(!isUserPopupOpen)}
            >
              Ivan Ivanov
            </a>
            <PopUser 
              isOpen={isUserPopupOpen} 
              onClose={() => setIsUserPopupOpen(false)} 
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
