import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/react/easy-money';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 🔍 Obtener todos los registros
export const getAllEasyMoney = () => api.get('');

// ➕ Crear nuevo registro
export const createEasyMoney = data => api.post('', data);

// 🔄 Obtener un registro por ID
export const getEasyMoneyById = id => api.get(`/${id}`);

// ✏️ Actualizar un registro existente
export const updateEasyMoney = (id, data) => api.put(`/${id}`, data);

// 🗑️ Eliminar un registro
export const deleteEasyMoney = id => api.delete(`/${id}`);

// 📊 Obtener diferencias entre fechas
export const getDifferences = (start, end) =>
  api.get('/differences', { params: { start, end } });

// 💰 Obtener total de diferencias entre fechas
export const getTotalDifference = (start, end) =>
  api.get('/total', { params: { start, end } });

export default {
  getAllEasyMoney,
  createEasyMoney,
  getEasyMoneyById,
  updateEasyMoney,
  deleteEasyMoney,
  getDifferences,
  getTotalDifference
};