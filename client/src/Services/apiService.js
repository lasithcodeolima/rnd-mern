import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
  });
  
    
  export const fetchProducts = () => apiClient.get('/products');
  export const fetchProductById = (id) => apiClient.get(`/products/${id}`);
  export const createProducts = (payload) => apiClient.post(`/products`, payload)