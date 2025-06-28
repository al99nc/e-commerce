// src/api.js
import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("http://localhost:4000/products");
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`http://localhost:4000/products/${id}`);
  return response.data;
};
