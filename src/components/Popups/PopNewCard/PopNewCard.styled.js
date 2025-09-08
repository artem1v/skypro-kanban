import styled from 'styled-components';

export const PopNewCardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.$isOpen ? 1 : 0};
  transition: opacity 0.3s ease;
`;

export const PopNewCardBlock = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  transform: ${props => props.$isOpen ? 'scale(1)' : 'scale(0.9)'};
  transition: transform 0.3s ease;
`;

export const PopNewCardContent = styled.div`
  position: relative;
`;

export const PopNewCardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #000;
`;

export const PopNewCardClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #94A6BE;
  
  &:hover {
    color: #000;
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PopNewCardForm = styled.form`
  flex: 1;
`;

export const FormNewBlock = styled.div`
  margin-bottom: 20px;
`;

export const FormNewLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #000;
`;

export const FormNewInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #EAEEF6;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #565EEF;
  }
`;

export const FormNewTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #EAEEF6;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: #565EEF;
  }
`;

export const PopNewCardCalendar = styled.div`
  flex: 1;
`;

export const CalendarTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #000;
`;

export const CalendarBlock = styled.div`
  background: #F8F9FA;
  border-radius: 8px;
  padding: 16px;
`;

export const CalendarNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const CalendarMonth = styled.div`
  font-weight: 600;
  color: #000;
`;

export const NavActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const NavAction = styled.div`
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    background: #EAEEF6;
    border-radius: 4px;
  }
`;

export const CalendarContent = styled.div``;

export const CalendarDaysNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 8px;
`;

export const CalendarDayName = styled.div`
  text-align: center;
  font-size: 12px;
  color: #94A6BE;
  font-weight: 500;
`;

export const CalendarCells = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

export const CalendarCell = styled.div`
  text-align: center;
  padding: 8px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background: #565EEF;
    color: white;
  }
  
  &.-weekend- {
    color: #94A6BE;
  }
`;

export const CalendarPeriod = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #EAEEF6;
`;

export const CalendarText = styled.p`
  font-size: 12px;
  color: #94A6BE;
  margin: 0;
`;

export const DateControl = styled.span`
  color: #565EEF;
  font-weight: 600;
`;

export const PopNewCardCategories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #000;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const CategoriesTheme = styled.div`
  padding: 8px 12px;
  border-radius: 24px;
  cursor: pointer;
  border: 2px solid transparent;
  
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
  
  p {
    margin: 0;
    font-size: 12px;
    font-weight: 600;
  }
`;

export const FormNewCreate = styled.button`
  width: 100%;
  padding: 12px;
  background: #565EEF;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #3d44b3;
  }
`;