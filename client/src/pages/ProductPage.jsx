import React, { useState, useEffect } from "react";
import { fetchProductById } from "../services/api";
import { addToCart } from "../services/api"; // Already imported
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import "./ProductDisplay.css"; // Add this line to connect the CSS

function ProductPage(props) {
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    summary: "",
    description: "",
    price: "",
    discount_type: "none",
    discount_value: "0",
    tags: "",
    stock_quantity: "0",
  });
  const [picture, setPicture] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetchProductById(id);
        if (res.success) {
          const product = res.product;
          setForm({
            title: product.title || "",
            summary: product.summary || "",
            description: product.description || "",
            price: product.price.toString() || "",
            discount_type: product.discount_type || "none",
            discount_value: product.discount_value?.toString() || "0",
            tags: product.tags?.join(", ") || "",
            stock_quantity: product.stock_quantity?.toString() || "0",
          });
        }
      } catch (err) {
        toast.error("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Then in your return:
  if (loading) {
    return <div>Loading...</div>;
  }

  const calculateDiscountedPrice = () => {
    if (form.discount_type === "percent" && form.discount_value > 0) {
      return (form.price * (1 - form.discount_value / 100)).toFixed(2);
    } else if (form.discount_type === "amount" && form.discount_value > 0) {
      return (form.price - form.discount_value).toFixed(2);
    }
    return parseFloat(form.price).toFixed(2);
  };

  const hasDiscount = form.discount_type !== "none" && form.discount_value > 0;
  const isInStock = form.stock_quantity > 0;
  const stockCount = parseInt(form.stock_quantity);

  // Generate quantity options (up to 10 or stock quantity, whichever is smaller)
  const maxQuantity = Math.min(stockCount, 10);
  const quantityOptions = [];
  for (let i = 1; i <= maxQuantity; i++) {
    quantityOptions.push(i);
  }

  const handleQuantityChange = (e) => {
    setSelectedQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token being sent:", token);
      console.log("Token exists:", !!token);

      const formData = JSON.stringify({
        quantity: selectedQuantity,
      });

      const result = await addToCart(id, formData);
      if (result.success) {
        toast.success(result.message || "Added to cart!");
        // Redirect to cart page with cart ID
        window.location.href = `/cart`;
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (err) {
      console.error("Add to cart error:", err);
      toast.error("Failed to add to cart");
    }
  };
  const handleBuyNow = () => {
    // Pass the selected quantity to your buy now function
    window.location.href = `/buy-now/${id}`;
  };

  return (
    <div className="product-container">
      <div className="product-layout">
        {/* Product Images Section */}
        <div className="product-image-section">
          <div className="main-image">
            <img
              src={
                form.picture ||
                "C:/Users/gt store/Desktop/e commerce/server/src/uploads/1753281055503.png"
              }
              alt={form.title}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          {/* Title */}
          <h1 className="product-title">{form.title}</h1>

          {/* Summary */}
          {form.summary && <p className="product-summary">{form.summary}</p>}

          {/* Price Section */}
          <div className="price-section">
            {hasDiscount && (
              <div className="original-price">
                List Price: ${parseFloat(form.price).toFixed(2)}
              </div>
            )}

            <div className="current-price">
              <span className="price">${calculateDiscountedPrice()}</span>

              {hasDiscount && (
                <span className="discount-badge">
                  Save{" "}
                  {form.discount_type === "percent"
                    ? `${form.discount_value}%`
                    : `$${form.discount_value}`}
                </span>
              )}
            </div>
          </div>

          {/* Stock Status */}
          <div
            className={`stock-status ${isInStock ? "in-stock" : "out-stock"}`}
          >
            <div className="stock-dot"></div>
            <span className="stock-text">
              {isInStock ? "In Stock" : "Out of Stock"}
            </span>
            {isInStock && (
              <span className="stock-count">
                ({form.stock_quantity} available)
              </span>
            )}
          </div>

          {/* Quantity Selector */}
          {isInStock && (
            <div className="quantity-section">
              <label htmlFor="quantity-select" className="quantity-label">
                Qty:
              </label>
              <select
                id="quantity-select"
                className="quantity-select"
                value={selectedQuantity}
                onChange={handleQuantityChange}
              >
                {quantityOptions.map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
                {stockCount > 10 && (
                  <option value="10+">10+ (Select custom amount)</option>
                )}
              </select>

              {stockCount > 10 && selectedQuantity === "10+" && (
                <input
                  type="number"
                  className="custom-quantity-input"
                  min="11"
                  max={stockCount}
                  placeholder="Enter quantity"
                  onChange={(e) =>
                    setSelectedQuantity(parseInt(e.target.value) || 11)
                  }
                />
              )}
            </div>
          )}

          {/* Add to Cart Section */}
          <div className="action-section">
            <div className="action-buttons">
              <button
                className="btn btn-add-cart"
                disabled={!isInStock}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              <button
                className="btn btn-buy-now"
                disabled={!isInStock}
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>

            <div className="delivery-info">
              <p>✓ FREE delivery tomorrow</p>
              <p>✓ Free returns</p>
            </div>
          </div>

          {/* Tags */}
          {form.tags && (
            <div className="tags-section">
              <h3 className="tags-title">Tags:</h3>
              <div className="tags-list">
                {form.tags.split(",").map((tag, index) => (
                  <span key={index} className="tag">
                    {tag.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Description */}
      <div className="description-section">
        <h2 className="description-title">Product Description</h2>
        <p className="description-text">{form.description}</p>
      </div>
    </div>
  );
}

export default ProductPage;