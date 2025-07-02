import React from "react";
import ProductDetails from "../components/products/ProductDetails";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Our Products</h1>
      <ProductDetails />
      <button
        onClick={() => {
          navigate("/login"); //you know wwhat to do i really love you 😘😘
        }}
      >
        login
      </button>
    </div>
  );
}

export default HomePage;
