import styled from 'styled-components';

export const PopBrowseContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopBrowseBlock = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  max-width: 700px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

export const PopBrowseContent = styled.div`
  position: relative;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const PopBrowseTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin: 0;
  flex: 1;
`;

export const ThemeTop = styled.div`
  padding: 6px 12px;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 600;
  
  &._orange {
    background: #FFE4C2;
    color: #FF6D00;
  }
  
  &._active-category {
    border: 2px solid currentColor;
  }
  
  p {
    margin: 0;
  }
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 20px;
`;

export const StatusTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #000;
`;

export const StatusThemes = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const StatusTheme = styled.div`
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  
  &._active {
    background: #EAEEF6;
    color: #000;
  }
  
  &._hide {
    display: none;
  }
  
  p {
    margin: 0;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PopBrowseForm = styled.form`
  flex: 1;
`;

export const FormBrowseBlock = styled.div`
  margin-bottom: 0;
`;

export const FormBrowseLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #000;
`;

export const FormBrowseTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #EAEEF6;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  min-height: 120px;
  
  &:focus {
    outline: none;
    border-color: #565EEF;
  }
  
  &[readonly] {
    background: #F8F9FA;
    cursor: not-allowed;
  }
`;

export const PopBrowseCalendar = styled.div`
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
  border-radius: 4px;
  
  &._current {
    background: #565EEF;
    color: white;
  }
  
  &._active-day {
    border: 2px solid #565EEF;
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

export const ThemeDown = styled.div`
  margin-bottom: 20px;
`;

export const ThemeDownCategories = styled.div``;

export const CategoriesTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #000;
`;

export const CategoriesTheme = styled.div`
  padding: 8px 12px;
  border-radius: 24px;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  
  &._orange {
    background: #FFE4C2;
    color: #FF6D00;
  }
  
  &._active-category {
    border: 2px solid currentColor;
  }
  
  p {
    margin: 0;
  }
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const BtnBrowseEdit = styled.button`
  padding: 10px 16px;
  border: 1px solid #565EEF;
  border-radius: 4px;
  color: #565EEF;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #565EEF;
    color: white;
  }
`;

export const BtnBrowseDelete = styled.button`
  padding: 10px 16px;
  border: 1px solid #FF4D4F;
  border-radius: 4px;
  color: #FF4D4F;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #FF4D4F;
    color: white;
  }
`;

export const BtnBrowseClose = styled.button`
  padding: 10px 20px;
  background: #565EEF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  
  &:hover {
    background: #3d44b3;
  }
`;

export const PopBrowseBtnEdit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const BtnEditSave = styled.button`
  padding: 10px 16px;
  background: #565EEF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  
  &:hover {
    background: #3d44b3;
  }
`;

export const BtnEditCancel = styled.button`
  padding: 10px 16px;
  border: 1px solid #565EEF;
  border-radius: 4px;
  color: #565EEF;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #565EEF;
    color: white;
  }
`;

export const BtnEditDelete = styled.button`
  padding: 10px 16px;
  border: 1px solid #FF4D4F;
  border-radius: 4px;
  color: #FF4D4F;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #FF4D4F;
    color: white;
  }
`;

//Новый код

// Добавь в конец файла PopBrowse.styled.js
export const FormNewInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #EAEEF6;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #565EEF;
  }
  
  &[readonly] {
    background: #F8F9FA;
    cursor: not-allowed;
  }
`;