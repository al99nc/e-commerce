import React, { useState, useEffect } from "react";
//here in this file we will resive the info from the db and transforming them to use them
import { fetchProducts } from "../../services/api";
import ProductList from "./ProductList";
function ProductDetails() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default ProductDetails;
