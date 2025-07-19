// Filename - App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SellPage from "./pages/SellPage";
import BecomeSellerPage from "./pages/BecomeSellerPage";
import SellerDashboardPage from "./pages/SellerDashboardPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/become-seller" element={<BecomeSellerPage />} />
          <Route path="/seller-dashboard" element={<SellerDashboardPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/delete-product/:id" element={<SellerDashboardPage />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
