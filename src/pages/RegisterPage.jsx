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
  LoginLink,
  LoginText 
} from './LoginPage.styled';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = () => {
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    if (password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов');
      return;
    }

    // Имитация успешной регистрации
    const token = 'fake-jwt-token';
    const userData = { 
      name: name, 
      email: email 
    };
    
    login(token, userData);
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  return (
    <LoginContainer>
      <LoginForm as="form" onSubmit={handleSubmit}>
        <LoginTitle>Регистрация</LoginTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <LoginInput 
          type="text" 
          placeholder="Имя и фамилия" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
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
        
        <LoginInput 
          type="password" 
          placeholder="Подтвердите пароль" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <LoginButton type="submit">Зарегистрироваться</LoginButton>
        
        <LoginText>
          Уже есть аккаунт? <LoginLink to="/login">Войти</LoginLink>
        </LoginText>
      </LoginForm>
    </LoginContainer>
  );
}