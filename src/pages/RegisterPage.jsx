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
  LoginLink,
  LoadingSpinner
} from './LoginPage.styled';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  // Двустороннее связывание
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно';
    }

    if (!formData.email) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Некорректный формат email';
    }

    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен содержать минимум 6 символов';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Подтверждение пароля обязательно';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await register(formData.name, formData.email, formData.password);
      navigate('/');
    } catch (error) {
      // Ошибка уже обработана в хуке useAuth
      console.error('Register error:', error);
    }
  };

  return (
    <LoginContainer>
      <LoginForm as="form" onSubmit={handleSubmit}>
        <LoginTitle>Регистрация</LoginTitle>
        
        <div>
          <LoginInput 
            type="text" 
            name="name"
            placeholder="Имя и фамилия" 
            value={formData.name}
            onChange={handleInputChange}
            required
            $hasError={!!errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </div>

        <div>
          <LoginInput 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleInputChange}
            required
            $hasError={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </div>

        <div>
          <LoginInput 
            type="password" 
            name="password"
            placeholder="Пароль" 
            value={formData.password}
            onChange={handleInputChange}
            required
            $hasError={!!errors.password}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </div>

        <div>
          <LoginInput 
            type="password" 
            name="confirmPassword"
            placeholder="Подтвердите пароль" 
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            $hasError={!!errors.confirmPassword}
          />
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        </div>

        <LoginButton type="submit" disabled={loading}>
          {loading ? <LoadingSpinner /> : 'Зарегистрироваться'}
        </LoginButton>
        
        <LoginText>
          Уже есть аккаунт? <LoginLink as={Link} to="/login">Войти</LoginLink>
        </LoginText>
      </LoginForm>
    </LoginContainer>
  );
}