// src/components/Popups/PopNewCard/PopNewCard.styled.js
import styled from 'styled-components';

export const PopNewCardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.70);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

export const PopNewCardBlock = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 20px;
  max-width: 448px;
  width: 630px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
`;

export const PopNewCardContent = styled.div`
  position: relative;
`;

export const PopNewCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  margin: 0 0 20px 0;
  line-height: 1;
`;

export const PopNewCardClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  color: #94A6BE;
  font-size: 16px;
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    color: #000000;
  }
`;

export const PopNewCardForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FormNewLabel = styled.label`
  font-size: 10px;
  font-weight: 500;
  color: #000000;
  line-height: 1;
  letter-spacing: -0.2px;
`;

export const FormNewInput = styled.input`
  width: 100%;
  padding: 9px 10px;
  border-radius: 8px;
  border: 0.7px solid #EAEEF6;
  background: #EAEEF6;
  font-size: 10px;
  color: #000000;
  transition: all 0.2s;
  font-family: inherit;
  font-weight: 400;
  letter-spacing: -0.2px;

  &:focus {
    border-color: #565EEF;
    background: #FFFFFF;
  }

  &::placeholder {
    color: #94A6BE;
    font-weight: 400;
  }

  /* Стили для select */
  &[as="select"] {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 6' width='8' height='6'><path fill='%2394A6BE' d='M4 6L0 0h8z'/></svg>");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 8px 6px;
    padding-right: 25px;
  }
`;

export const FormNewTextarea = styled.textarea`
  width: 100%;
  padding: 9px 10px;
  border-radius: 8px;
  border: 0.7px solid #EAEEF6;
  background: #EAEEF6;
  font-size: 10px;
  color: #000000;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
  transition: all 0.2s;
  font-weight: 400;
  letter-spacing: -0.2px;

  &:focus {
    border-color: #565EEF;
    background: #FFFFFF;
  }

  &::placeholder {
    color: #94A6BE;
    font-weight: 400;
  }
`;

export const PopNewCardCategories = styled.div`
  display: flex;
  gap: 8px;
`;

export const CategoriesTitle = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: #000000;
  margin: 0;
  line-height: 1;
  letter-spacing: -0.2px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
`;

export const CategoriesTheme = styled.div`
  padding: 6px 10px;
  border-radius: 24px;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s;
  line-height: 1;
  letter-spacing: -0.2px;

  &._orange {
    background: #FFE4C2;
    color: #FF6D00;
  }

  &._green {
    background: #B4FDD1;
    color: #06B16E;
  }

  &._purple {
    background: #E9D4FF;
    color: #9A48F1;
  }

  &._active-category {
    border-color: currentColor;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const FormNewCreate = styled.button`
  background: #565EEF;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 10px;
  margin-left: 276px;
  width: 100%;
  line-height: 1;
  letter-spacing: -0.2px;

  &:hover:not(:disabled) {
    background: #3d44b3;
  }

  &:disabled {
    background: #94A6BE;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  background: #FFF2F0;
  border: 1px solid #FFCCC7;
  color: #FF4D4F;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 10px;
  margin-bottom: 12px;
  line-height: 1.2;
`;

// Стили для календаря
export const PopNewCardCalendar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CalendarTitle = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: #000000;
  margin: 0;
  line-height: 1;
  letter-spacing: -0.2px;
`;

export const CalendarBlock = styled.div`
  background: #F8F9FA;
  border-radius: 8px;
  padding: 12px;
`;

export const CalendarNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const CalendarMonth = styled.div`
  font-weight: 500;
  color: #000000;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
`;

export const NavActions = styled.div`
  display: flex;
  gap: 6px;
`;

export const NavAction = styled.button`
  background: none;
  border: none;
  color: #94A6BE;
  cursor: pointer;
  padding: 2px;
  border-radius: 2px;
  font-size: 10px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  &:hover {
    background: #EAEEF6;
    color: #000000;
  }
`;

export const CalendarContent = styled.div``;

export const CalendarDaysNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 8px;
`;

export const CalendarDayName = styled.div`
  text-align: center;
  font-size: 8px;
  color: #94A6BE;
  font-weight: 500;
  text-transform: lowercase;
  line-height: 1;
  padding: 4px 0;

  &.-weekend- {
    color: #FF6D00;
  }
`;

export const CalendarCells = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

export const CalendarCell = styled.div`
  text-align: center;
  padding: 4px 2px;
  font-size: 8px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1;
  font-weight: 400;
  min-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &._day {
    color: #000000;
    
    &:hover {
      background: #EAEEF6;
    }
  }

  &._empty {
    color: transparent;
    cursor: default;
  }

  &._current {
    background: #565EEF;
    color: #FFFFFF;
  }

  &._active-day {
    border: 1px solid #565EEF;
    background: #F0F2FF;
  }
`;

export const CalendarPeriod = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #EAEEF6;
`;

export const CalendarText = styled.p`
  font-size: 8px;
  color: #94A6BE;
  margin: 0;
  line-height: 1;
  letter-spacing: -0.2px;
`;

export const DateControl = styled.span`
  color: #565EEF;
  font-weight: 500;
`;