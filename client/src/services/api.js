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

export const signup = async (userData) => {
  const response = await axios.post("http://localhost:4000/signup", userData);
  console.log("------------ sign up response ----------------");
  
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
      body: JSON.stringify(jsonBody), // Using the correct parameter name
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

export const refreshToken = async () => {
  console.log("🔄 refreshToken() called");

  try {
    console.log("📤 Sending refresh token request...");
    const response = await axios.post(
      "/refresh-token",
      {},
      {
        withCredentials: true,
      }
    );

    console.log("📥 Refresh token response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Refresh token failed:");
    console.error("Status:", error.response?.status);
    console.error("Data:", error.response?.data);
    console.error("Full error:", error);
    throw error;
  }
};

export const logoutUser = async () => {
  console.log("🚪 logoutUser() called");

  try {
    console.log("🗑️ Removing accessToken from localStorage");
    localStorage.removeItem("accessToken");

    console.log("📤 Sending logout request to server...");
    await axios.post(
      "/logout",
      {},
      {
        withCredentials: true,
      }
    );

    console.log("↩️ Redirecting to login...");
    window.location.href = "/login";
  } catch (error) {
    console.error("❌ Logout failed:", error);
    console.log("🗑️ Cleaning up anyway...");
    localStorage.removeItem("accessToken");
    console.log("↩️ Redirecting to login...");
    window.location.href = "/login";
  }
};
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
    console.log("----cart response ----", response);
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

export const checkout = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:4000/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Checkout failed"); // Note: changed to 'error' to match backend
  }
  return await response.json();
};

export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetch("http://localhost:4000/account", {
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
