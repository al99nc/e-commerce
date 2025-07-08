import React from "react";
import ProductDetails from "../components/products/ProductDetails";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Avatar } from "@chakra-ui/react";

function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Header />
      <div>
        <h1>Welcome, {user?.name}</h1>
        <Avatar name={user?.name} src={user?.avatar} />
      </div>

      <ProductDetails />

      <Footer />
    </div>
  );
}

export default HomePage;

