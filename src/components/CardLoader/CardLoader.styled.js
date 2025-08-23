import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const CardLoaderItem = styled.div`
  margin-bottom: 16px;
`;

export const CardLoaderContainer = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const CardLoaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const CardLoaderTheme = styled.div`
  width: 80px;
  height: 20px;
  background: #e0e0e0;
  border-radius: 4px;
`;

export const CardLoaderButton = styled.div`
  width: 12px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  div {
    width: 4px;
    height: 4px;
    background: #e0e0e0;
    border-radius: 50%;
  }
`;

export const CardLoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardLoaderTitle = styled.div`
  width: 150px;
  height: 16px;
  background: #e0e0e0;
  border-radius: 3px;
`;

export const CardLoaderDate = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  
  div {
    width: 60px;
    height: 12px;
    background: #e0e0e0;
    border-radius: 3px;
  }
  
  svg {
    width: 13px;
    height: 13px;
    
    path {
      stroke: #e0e0e0;
    }
  }
`;
