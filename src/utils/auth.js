// Простая имитация API аутентификации
export const authAPI = {
  login: (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve({
            token: 'fake-jwt-token',
            user: {
              name: 'Ivan Ivanov',
              email: email
            }
          });
        } else {
          reject(new Error('Неверные учетные данные'));
        }
      }, 1000);
    });
  },

  register: (name, email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password) {
          resolve({
            token: 'fake-jwt-token',
            user: {
              name: name,
              email: email
            }
          });
        } else {
          reject(new Error('Ошибка регистрации'));
        }
      }, 1000);
    });
  }
};