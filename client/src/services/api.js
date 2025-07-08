// src/api.js
import axios from "axios";
const API_BASE_URL = "http://localhost:3001"; // Change this to your backend URL

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
export const becomeSellerAPI = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/become-seller`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// You can add more API functions here as needed
export const getUserProfile = async () => {
  ////////looooookkkkkkkkkk from here and under this line i don't know shit abt it so you do it read it and do whatever you want with it..........
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(`${API_BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch user profile");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const getSellerProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(`${API_BASE_URL}/users/seller-profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch seller profile");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};