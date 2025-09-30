import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F5F7FA;
  padding: 20px;
`;

export const LoginForm = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
  font-weight: 600;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${props => props.$hasError ? '#FF4D4F' : '#EAEEF6'};
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? '#FF4D4F' : '#565EEF'};
  }
  
  &::placeholder {
    color: #94A6BE;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #565EEF;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 20px;
  position: relative;
  min-height: 44px;

  &:hover:not(:disabled) {
    background: #3d44b3;
  }
  
  &:disabled {
    background: #94A6BE;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: #FF4D4F;
  font-size: 12px;
  margin-bottom: 15px;
  padding: 4px 0;
`;

export const LoginText = styled.p`
  text-align: center;
  color: #94A6BE;
  font-size: 14px;
  margin: 0;
`;

export const LoginLink = styled(Link)`
  color: #565EEF;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;