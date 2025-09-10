import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { 
  LoginContainer, 
  LoginForm, 
  LoginTitle, 
  LoginInput, 
  LoginButton, 
  ErrorMessage,
  LoginText,
  LoginLink
} from './LoginPage.styled';

export default function LoginPage() {
  const [email, setEmail] = useState('ivan.ivanov@gmail.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setError('');

    if (email && password) {
      const token = 'fake-jwt-token';
      const userData = { 
        name: 'Ivan Ivanov', 
        email: email 
      };
      
      login(token, userData);
      navigate('/');
    } else {
      setError('Пожалуйста, заполните все поля');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <LoginContainer>
      <LoginForm as="form" onSubmit={handleSubmit}>
        <LoginTitle>Вход в систему</LoginTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginInput 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <LoginInput 
          type="password" 
          placeholder="Пароль" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <LoginButton type="submit">Войти</LoginButton>
        
        <LoginText>
          Нет аккаунта? <LoginLink as={Link} to="/register">Зарегистрироваться</LoginLink>
        </LoginText>
      </LoginForm>
    </LoginContainer>
  );
}