import React from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";

function SellPage() {
  const token = localStorage.getItem("token");
  let decoded = null;

  try {
    if (token) {
      decoded = jwtDecode(token);

      // Check if token is expired
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.removeItem("token");
        decoded = null;
      }
    }
  } catch (error) {
    console.error("Invalid token:", error);
    localStorage.removeItem("token");
    decoded = null;
  }

  if (!decoded) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <p className="text-lg">Please login first 😅</p>
        <Link
          to="/login"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </Link>
      </div>
    );
  }

  if (decoded.role === "CUSTOMER") {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Hey 👋 You're a customer</h1>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            Want to start selling on our platform? You can apply to become a
            seller and start listing your products!
          </p>
          <Link
            to="/become-seller"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Apply to Become a Seller
          </Link>
        </div>
      </div>
    );
  }

  if (decoded.role === "SELLER") {
    return (window.location.href = "/seller-dashboard");
  }

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <p className="text-lg">Invalid role 🥲</p>
    </div>
  );
}

export default SellPage;
