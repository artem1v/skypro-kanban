import styled from 'styled-components';

export const CardPageContainer = styled.div`
  min-height: 100vh;
  background: #F5F7FA;
  padding: 40px 20px;
`;

export const CardPageContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const CardPageBack = styled.a`
  display: inline-block;
  color: #565EEF;
  text-decoration: none;
  margin-bottom: 20px;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const CardPageTopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const CardPageTitle = styled.h1`
  font-size: 24px;
  color: #000;
  margin: 0;
  flex: 1;
`;

export const CardPageTheme = styled.div`
  padding: 6px 12px;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 600;
  
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
    border: 2px solid currentColor;
  }
  
  p {
    margin: 0;
  }
`;

export const CardPageStatus = styled.div`
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

export const CardPageWrap = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardPageForm = styled.form`
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
  border: 1px solid ${props => props.readOnly ? '#EAEEF6' : '#565EEF'};
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  min-height: 120px;
  background: ${props => props.readOnly ? '#F8F9FA' : 'white'};
  
  &:focus {
    outline: none;
    border-color: #565EEF;
  }
  
  &[readonly] {
    cursor: not-allowed;
  }
`;

export const CardPageCalendar = styled.div`
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

export const CardPageCategories = styled.div`
  margin-bottom: 20px;
`;

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
  
  &._green {
    background: #B4FDD1;
    color: #06B16E;
  }
  
  &._purple {
    background: #E9D4FF;
    color: #9A48F1;
  }
  
  &._active-category {
    border: 2px solid currentColor;
  }
  
  p {
    margin: 0;
  }
`;

export const CardPageActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const BtnEdit = styled.button`
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

export const BtnDelete = styled.button`
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

export const BtnClose = styled.a`
  padding: 10px 20px;
  background: #565EEF;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  
  &:hover {
    background: #3d44b3;
  }
`;



//Новые стили
export const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #94A6BE;
  font-size: 16px;
`;

export const ErrorMessage = styled.div`
  background: #fff2f0;
  border: 1px solid #ffccc7;
  color: #ff4d4f;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 20px;
  text-align: center;
`;

export const EditInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #565EEF;
  border-radius: 6px;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  
  &:focus {
    outline: none;
    border-color: #3d44b3;
  }
`;

export const EditSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #565EEF;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #3d44b3;
  }
`;

export const EditTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #565EEF;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  min-height: 120px;
  
  &:focus {
    outline: none;
    border-color: #3d44b3;
  }
`;