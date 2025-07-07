// src/api.js
import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios.get("http://localhost:4000/products");
  console.log(response);
  return response.data;
};
//this is for making the products clickable
export const fetchProductById = async (id) => {
  const response = await axios.get(`http://localhost:4000/products/${id}`);
  return response.data;
};

// Simple signup function like your product functions
export const signup = async (userData) => {
  const response = await axios.post("http://localhost:4000/signup", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post("http://localhost:4000/login", userData);
  return response.data;
};