// src/api.js
import axios from "axios";
const API_BASE_URL = "http://localhost:4000"; // Change this to your backend URL

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
export const becomeSeller = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/become-seller`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", //telles the server were sending json
        Authorization: `Bearer ${token}`, //this is the Authorization using the jwt
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

export const getSellerDashboard = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/seller-dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const addProduct = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:4000/add-product`, {
      //just
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:4000/delete-product/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const editProduct = async (id, formData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:4000/edit-product/${id}`, {
      //just
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const addToCart = async (id, jsonBody) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(`http://localhost:4000/add-to-cart/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: jsonBody,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const deleteCartItem = async (itemId) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch(`${API_BASE_URL}/cart-item/${itemId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to delete cart item");
    }

    return data;
  } catch (error) {
    console.error("API Error (deleteCartItem):", error);
    throw error;
  }
};

// In your services/api.js file

// In your services/api.js file

export const getCartItems = async () => {
  try {
    const token = localStorage.getItem("token"); // or however you store your token

    const response = await fetch("http://localhost:4000/cart", {
      // Make sure to include full URL
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const responseText = await response.text();
      throw new Error("Server returned non-JSON response");
    }

    const data = await response.json();

    // Your backend returns { items: cartItems }
    return data.items || [];
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error;
  }
};

export const checkout = async (cartItems) => {
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:4000/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Fixed: Moved inside headers
    },
    body: JSON.stringify({
      cartItems: cartItems.map((item) => ({
        id: item.product.id, // Make sure we're sending product ID
        price: item.price,
        quantity: item.quantity,
      })),
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Checkout failed");
  }
  return await response.json();
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