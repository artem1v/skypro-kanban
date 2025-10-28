import styled from 'styled-components';

export const MainContainer = styled.main`
  margin-top: 65px;
  padding: 40px 0;
  min-height: calc(100vh - 100px);
  background: #F5F7FA;
`;

export const MainColumnsContainer = styled.div`
  display: flex;
  gap: 28px;
  overflow-x: auto;
  padding-bottom: 40px;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #EAEEF6;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #C1C9D6;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #94A6BE;
  }
`;

export const MainColumnWrapper = styled.div`
  flex-shrink: 0;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 18px;
  color: #666;
  font-weight: 500;
`;

export const ColumnTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 24px;
  color: #333;
  padding-bottom: 16px;
  border-bottom: 2px solid #F0F2F8;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  p {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const ErrorMessage = styled.div`
  background: #fff2f0;
  border: 1px solid #ffccc7;
  color: #ff4d4f;
  padding: 16px;
  border-radius: 6px;
  text-align: center;
  margin: 20px 0;
  
  button {
    background: #565EEF;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background: #3d44b3;
    }
  }
`;

export const RetryButton = styled.button`
  background: #ff4d4f;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 12px;
  font-weight: 500;

  &:hover {
    background: #d9363e;
  }
`;

export const WarningMessage = styled.div`
  background: ${props => props.$isError ? '#fff2f0' : '#fffbe6'};
  border: 1px solid ${props => props.$isError ? '#ffccc7' : '#ffe58f'};
  color: ${props => props.$isError ? '#ff4d4f' : '#d48806'};
  padding: 16px;
  border-radius: 6px;
  text-align: center;
  margin: 20px 0;
`;

export const KanbanBoard = styled.div`
     display: flex;
    gap: 20px;
    margin-left: 135px;
`;

export const AddTaskButton = styled.button`
  background: #565eef;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #4a52d4;
  }

  &:active {
    background: #3f46b8;
  }
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
`;
