import axios from "axios";

const USER_API_URL = "https://wedev-api.sky.pro/api/user";

export async function login(userData) {
  try {
    const response = await axios.post(`${USER_API_URL}/login`, userData, {
      headers: {
        "Content-Type": "",
      },
    });

    const user = response.data.user;
    const token = user.token;

    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(user));

    return { user, token };
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка входа");
  }
}

export async function register(userData) {
  try {
    const response = await axios.post(USER_API_URL, userData, {
      headers: {
        "Content-Type": "",
      },
    });

    const user = response.data.user;
    const token = user.token;

    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(user));

    return { user, token };
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.error || "Ошибка регистрации");
  }
}

export function getToken() {
  return localStorage.getItem("authToken");
}

export async function getCurrentUser() {
  try {
    const token = getToken();
    if (!token) {
      throw new Error("Токен не найден");
    }

    const response = await axios.get(`${USER_API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Ошибка получения данных пользователя"
    );
  }
}
