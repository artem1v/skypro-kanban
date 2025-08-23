import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F5F5F5;
    color: #333333;
    line-height: 1.6;
    font-size: 14px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
    border: none;
    outline: none;
  }

  /* Стили для wrapper */
  .wrapper {
    min-height: 100vh;
    background: #F5F5F5;
  }

  /* Стили для header */
  .header {
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .header__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__logo img {
    height: 40px;
  }

  .header__nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .header__btn-main-new {
    background: #565EEF;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;

    &:hover {
      background: #3d44b3;
    }

    a {
      color: white;
      text-decoration: none;
    }
  }

  .header__user {
    color: #565EEF;
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
    position: relative;
    padding-right: 15px;

    &::after {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 1px;
      border-left: 1.9px solid #565eef;
      border-bottom: 1.9px solid #565eef;
      transform: rotate(-45deg);
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -3px;
    }

    &:hover {
      color: #3d44b3;
    }
  }

  /* Стили для main */
  .main {
    margin-top: 80px;
    padding: 30px 0;
  }

  .main__block {
    display: flex;
    gap: 28px;
    overflow-x: auto;
    padding-bottom: 30px;
  }

  .main__column {
    min-width: 320px;
    background: #FFFFFF;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    height: fit-content;
    max-height: 75vh;
    overflow-y: auto;
  }

  .column__title {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    color: #333;
    padding-bottom: 16px;
    border-bottom: 2px solid #F0F2F8;
    text-transform: uppercase;

    p {
      margin: 0;
    }
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* Стили для карточек */
  .cards__item {
    margin-bottom: 20px;
  }

  .cards__card {
    background: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
    border: 1px solid #EAEEF6;
  }

  .card__group {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
  }

  .card__theme {
    padding: 6px 12px;
    border-radius: 24px;
    font-size: 12px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    text-align: center;
  }

  .card__theme._orange {
    background-color: #FFE4C2;
    color: #FF6D00;
    border: 1px solid #FFD8A9;
  }

  .card__theme._green {
    background-color: #B4FDD1;
    color: #06B16E;
    border: 1px solid #9AEFBC;
  }

  .card__theme._purple {
    background-color: #E9D4FF;
    color: #9A48F1;
    border: 1px solid #D9BBFF;
  }

  .card__btn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18px;
    cursor: pointer;
    padding: 4px;

    div {
      width: 4px;
      height: 4px;
      background: #94A6BE;
      border-radius: 50%;
    }
  }

  .card__content {
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  .card__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.4;
    color: #000000;
    margin-bottom: 12px;
  }

  .card__date {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #94A6BE;
    font-weight: 500;

    svg {
      flex-shrink: 0;
    }
  }

  /* Стили для скроллбара */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  /* Утилитарные классы */
  ._show {
    display: block;
  }

  ._hide {
    display: none;
  }

  ._hover01:hover {
    opacity: 0.8;
  }

  ._hover02:hover {
    color: #565EEF;
  }

  ._hover03:hover {
    background: #f0f0f0;
  }

  /* Адаптивность */
  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }
    
    .main__column {
      min-width: 280px;
      padding: 20px;
    }
    
    .header__nav {
      gap: 15px;
    }
    
    .header__btn-main-new {
      padding: 8px 16px;
      font-size: 13px;
    }
  }
  
`;
