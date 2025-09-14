import styled from 'styled-components';

export const PopExitContainer = styled.div`
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

export const PopExitBlock = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
`;

export const PopExitContent = styled.div`
  text-align: center;
`;

export const PopExitTitle = styled.div`
  margin-bottom: 20px;
  
  h2 {
    font-size: 20px;
    color: #000;
    margin: 0;
  }
`;

export const PopExitForm = styled.form`
  margin-bottom: 0;
`;

export const PopExitFormGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const PopExitYes = styled.button`
  padding: 12px 24px;
  background: #565EEF;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #3d44b3;
  }
`;

export const PopExitNo = styled.button`
  padding: 12px 24px;
  background: transparent;
  color: #565EEF;
  border: 1px solid #565EEF;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #565EEF;
    color: white;
  }
`;