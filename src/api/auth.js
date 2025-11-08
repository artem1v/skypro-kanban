// src/api/auth.js
import axios from "axios";

const USER_API_URL = "https://wedev-api.sky.pro/api/user";

export async function login(userData) {
  try {
    const response = await axios.post(
      `${USER_API_URL}/login`, 
      userData, 
      {
        headers: {
          "Content-Type": "", // ПУСТАЯ СТРОКА как у однокурсника
        },
      }
    );

    const user = response.data.user;
    const token = user.token; // token в user объекте
    
    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(user));

    return { user, token };
  } catch (error) {
    console.error('Login error:', error.response?.data);
    throw new Error(error.response?.data?.error || "Ошибка входа");
  }
}

export async function register(userData) {
  try {
    const response = await axios.post(
      USER_API_URL, 
      userData, 
      {
        headers: {
          "Content-Type": "", // ПУСТАЯ СТРОКА
        },
      }
    );

    const user = response.data.user;
    const token = user.token; // token в user объекте
    
    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(user));

    return { user, token };
  } catch (error) {
    console.error('Register error:', error.response?.data);
    throw new Error(error.response?.data?.error || "Ошибка регистрации");
  }
}

export function getToken() {
  return localStorage.getItem("authToken");
}