import styled from 'styled-components';

export const MainContainer = styled.main`
  margin-top: 100px;
  padding: 32px 0;
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