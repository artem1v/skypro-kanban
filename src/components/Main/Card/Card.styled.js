import styled from 'styled-components';

export const CardItem = styled.div`

`;

export const CardContainer = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
  border: 1px solid #EAEEF6;
  transition: all 0.2s ease;
  width: 220px;
  height: 130px;
  opacity: 1;
  border-radius: 10px;


  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }
`;

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const CardTheme = styled.div`
  padding: 6px 12px;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  text-align: center;
  
  ${props => props.$theme === 'orange' && `
    background-color: #FFE4C2;
    color: #FF6D00;
    border: 1px solid #FFD8A9;
  `}
  
  ${props => props.$theme === 'green' && `
    background-color: #B4FDD1;
    color: #06B16E;
    border: 1px solid #9AEFBC;
  `}
  
  ${props => props.$theme === 'purple' && `
    background-color: #E9D4FF;
    color: #9A48F1;
    border: 1px solid #D9BBFF;
  `}

  p {
    margin: 0;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.2;
  }
`;

export const CardButton = styled.div`
  display: flex;
  justify-content: space-between;
  height: 18px;
  cursor: pointer;
  padding: 4px;
  gap: 4px;
  
  div {
    width: 4px;
    height: 4px;
    background: #94A6BE;
    border-radius: 50%;
    transition: background-color 0.2s;
  }

  &:hover div {
    background: #565EEF;
  }
`;

export const CardContent = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  color: #000000;
  margin-bottom: 12px;
  word-break: break-word;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #94A6BE;
  font-weight: 500;

  svg {
    flex-shrink: 0;
  }

  p {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
  }
`;