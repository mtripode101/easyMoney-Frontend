import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/react/easy-money', // Ajustá el puerto si es distinto
});

export default api;