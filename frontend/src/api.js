import axios from 'axios';

const baseURL = 'http://localhost:3000'; // Replace with your backend URL

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for handling JWT token (if needed)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API functions
const api = {
  login: async (username, password) => {
    try {
      const response = await axiosInstance.post('/login', { username, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  signup: async (username, password) => {
    try {
      const response = await axiosInstance.post('/signup', { username, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getUsers: async () => {
    try {
      const response = await axiosInstance.get('/users');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  createUser: async (username, password) => {
    try {
      const response = await axiosInstance.post('/users', { username, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  updateUser: async (id, username, password) => {
    try {
      const response = await axiosInstance.put(`/users/${id}`, { username, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  deleteUser: async (id) => {
    try {
      const response = await axiosInstance.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default api;
