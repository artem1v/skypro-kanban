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

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен содержать минимум 6 символов';
    }
    
    if (!formData.confirmPassword.trim()) {
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
      setErrors({ submit: error.message });
    }
  };

  return (
    <LoginContainer>
      <LoginForm as="form" onSubmit={handleSubmit}>
        <LoginTitle>Регистрация</LoginTitle>
        
        {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
        
        <div>
          <LoginInput 
            type="text" 
            name="name"
            placeholder="Имя и фамилия" 
            value={formData.name}
            onChange={handleChange}
            $error={!!errors.name}
            required
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </div>
        
        <div>
          <LoginInput 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            $error={!!errors.email}
            required
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </div>
        
        <div>
          <LoginInput 
            type="password" 
            name="password"
            placeholder="Пароль" 
            value={formData.password}
            onChange={handleChange}
            $error={!!errors.password}
            required
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </div>
        
        <div>
          <LoginInput 
            type="password" 
            name="confirmPassword"
            placeholder="Подтвердите пароль" 
            value={formData.confirmPassword}
            onChange={handleChange}
            $error={!!errors.confirmPassword}
            required
          />
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
        </div>
        
        <LoginButton type="submit" disabled={loading}>
          {loading ? 'Загрузка...' : 'Зарегистрироваться'}
        </LoginButton>
        
        <LoginText>
          Уже есть аккаунт? <LoginLink as={Link} to="/login">Войти</LoginLink>
        </LoginText>
      </LoginForm>
    </LoginContainer>
  );
}