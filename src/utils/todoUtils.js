// todoUtils.js
import { api } from '../utils/api';

export const getTodos = async () => {
  try {
    const response = await api.get('/todos');
    return response.json;
  } catch (error) {
    console.error('API 호출 에러: ', error);
  }
};

export const createTodo = async (newTodo) => {
  try {
    const requestBody = { todo: newTodo };
    const response = await api.post('/todos', requestBody);
    return response.data;
  } catch (error) {
    console.error('API 호출 에러: ', error);
  }
};

export const deleteTodo = async (id) => {
  try {
    await api.delete(`/todos/${id}`);
  } catch (error) {
    console.error('API 호출 에러: ', error);
  }
};

export const updateTodo = async (id, editValue) => {
  try {
    const requestBody = { todo: editValue, isCompleted: false };
    await api.put(`/todos/${id}`, requestBody);
  } catch (error) {
    console.error('API 호출 에러:', error);
  }
};
