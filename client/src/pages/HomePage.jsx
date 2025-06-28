import React from "react";
import ProductDetails from "../components/products/ProductDetails";

function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Our Products</h1>
      <ProductDetails />
    </div>
  );
}

export default HomePage;
