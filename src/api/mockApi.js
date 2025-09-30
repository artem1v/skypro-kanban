// Имитация API с локальными данными в правильном формате
let tasks = [
  {
    id: 1,
    title: "Разработать лендинг для нового продукта",
    description: "Создать адаптивный лендинг с современным дизайном",
    topic: "Web Design",
    status: "Без статуса",
    date: "2023-10-30",
    theme: "orange"
  },
  {
    id: 2,
    title: "Исследование рынка конкурентов", 
    description: "Провести анализ основных конкурентов на рынке",
    topic: "Research",
    status: "Нужно сделать",
    date: "2023-10-31",
    theme: "green"
  },
  {
    id: 3,
    title: "Написание коммерческого предложения",
    description: "Подготовить коммерческое предложение для клиентов",
    topic: "Copywriting", 
    status: "В работе",
    date: "2023-11-01",
    theme: "purple"
  },
  {
    id: 4,
    title: "Редизайн главной страницы",
    description: "Обновить дизайн главной страницы сайта",
    topic: "Web Design",
    status: "Тестирование",
    date: "2023-11-02", 
    theme: "orange"
  },
  {
    id: 5,
    title: "Анализ пользовательского поведения",
    description: "Изучить поведение пользователей на сайте",
    topic: "Research",
    status: "Готово",
    date: "2023-11-03",
    theme: "green"
  }
];

let currentId = 6;

// Имитация задержки сети
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Получить все задачи
export const getTasks = async () => {
  await delay(800);
  return [...tasks];
};

// Создать новую задачу
export const createTask = async (taskData) => {
  await delay(500);
  const newTask = {
    id: currentId++,
    title: taskData.title || "Новая задача",
    description: taskData.description || "",
    topic: taskData.topic || "Web Design", 
    status: taskData.status || "Без статуса",
    date: new Date().toISOString().split('T')[0],
    theme: getThemeByTopic(taskData.topic || "Web Design")
  };
  tasks.push(newTask);
  return newTask;
};

// Функция для определения темы по теме задачи
const getThemeByTopic = (topic) => {
  const themeMap = {
    "Web Design": "orange",
    "Research": "green",
    "Copywriting": "purple"
  };
  return themeMap[topic] || "orange";
};

// Обновить задачу
export const updateTask = async (taskId, taskData) => {
  await delay(500);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex === -1) {
    throw new Error('Задача не найдена');
  }
  
  // Обновляем тему если изменилась тема
  if (taskData.topic) {
    taskData.theme = getThemeByTopic(taskData.topic);
  }
  
  tasks[taskIndex] = { ...tasks[taskIndex], ...taskData };
  return tasks[taskIndex];
};

// Удалить задачу
export const deleteTask = async (taskId) => {
  await delay(300);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex === -1) {
    throw new Error('Задача не найдена');
  }
  tasks.splice(taskIndex, 1);
  return { success: true };
};

// Получить задачу по ID
export const getTaskById = async (taskId) => {
  await delay(300);
  const task = tasks.find(task => task.id === taskId);
  if (!task) {
    throw new Error('Задача не найдена');
  }
  return task;
};