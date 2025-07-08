// Filename - App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SellPage from "./pages/SellPage";
import BecomeSellerPage from "./pages/BecomeSellerPage";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
