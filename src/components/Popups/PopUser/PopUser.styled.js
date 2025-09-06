import styled from 'styled-components';

export const PopUserContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  padding: 16px;
  min-width: 200px;
  z-index: 1001;
`;

export const PopUserName = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #333333;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  font-size: 14px;
  color: #94A6BE;
  margin-bottom: 16px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 8px 0;
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;

  p {
    font-size: 14px;
    color: #333333;
  }
`;

export const PopUserCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const PopUserButton = styled.button`
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: #565EEF;
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #565EEF;

    color: white;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;