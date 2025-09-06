import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  border: 1px solid #EAEEF6;
  border-radius: 6px;
  margin-bottom: 20px;
  font-size: 16px;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #565EEF;
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

  &:hover {
    background: #3d44b3;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export const ErrorMessage = styled.div`
  color: #ff4d4f;
  background: #fff2f0;
  border: 1px solid #ffccc7;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 14px;
  text-align: center;
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