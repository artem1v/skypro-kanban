import { useState, useEffect } from 'react';
import { login as apiLogin, register as apiRegister } from '../api/auth';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      setError('');
      setLoading(true);
      const data = await apiLogin({ email, password });
      
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));
      
      setIsAuthenticated(true);
      setUser(data.user);
      return data;
    } catch (err) {
      const errorMessage = err.message || 'Ошибка авторизации';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    try {
      setError('');
      setLoading(true);
      const data = await apiRegister({ name, email, password });
      
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));
      
      setIsAuthenticated(true);
      setUser(data.user);
      return data;
    } catch (err) {
      const errorMessage = err.message || 'Ошибка регистрации';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUser(null);
    setError('');
  };

  return {
    isAuthenticated,
    user,
    loading,
    error,
    login,
    register,
    logout,
  };
}