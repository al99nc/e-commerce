import React from "react";
import ProductDetails from "../components/products/ProductDetails";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Header />
      <div>
        <h1>Welcome, {user?.name}</h1>
        <img src={user?.avatar} className="rounded-full w-10 h-10" alt="" />
      </div>

      <ProductDetails />

      <Footer />
    </div>
  );
}

export default HomePage;
