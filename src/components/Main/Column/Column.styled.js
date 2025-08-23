import styled from 'styled-components';

export const ColumnContainer = styled.div`
 
  border-radius: 12px;
  
  height: fit-content;
  overflow-y: auto;
  min-height: 300px;
`;


export const ColumnTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  color:#94A6BE;
;
  padding-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  p {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const EmptyColumn = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #94A6BE;
  font-size: 14px;
  background: #F8F9FA;
  border-radius: 8px;
  border: 2px dashed #DEE2E6;
  
  p {
    margin: 0;
    font-style: italic;
    font-weight: 500;
  }
`;