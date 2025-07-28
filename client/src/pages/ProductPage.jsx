import React, { useState, useEffect } from "react";
import { fetchProductById } from "../services/api";
import { addToCart } from "../services/api";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import "./ProductDisplay.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [customQuantity, setCustomQuantity] = useState("");
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetchProductById(id);
        if (res.success) {
          setProduct(res.product);
        } else {
          toast.error("Product not found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        toast.error("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-container">
        <h2>Product not found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  const calculateDiscountedPrice = () => {
    const price = parseFloat(product.price);
    const discountValue = parseFloat(product.discount_value) || 0;

    if (product.discount_type === "percent" && discountValue > 0) {
      return Math.max(0, price * (1 - discountValue / 100)).toFixed(2);
    } else if (product.discount_type === "amount" && discountValue > 0) {
      return Math.max(0, price - discountValue).toFixed(2);
    }
    return price.toFixed(2);
  };

  const hasDiscount =
    product.discount_type !== "none" && parseFloat(product.discount_value) > 0;
  const isInStock = product.stock_quantity > 0;
  const stockCount = parseInt(product.stock_quantity);

  // Generate quantity options (up to 10 or stock quantity, whichever is smaller)
  const maxQuantity = Math.min(stockCount, 10);
  const quantityOptions = [];
  for (let i = 1; i <= maxQuantity; i++) {
    quantityOptions.push(i);
  }

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "custom") {
      setSelectedQuantity("custom");
      setCustomQuantity("");
    } else {
      setSelectedQuantity(parseInt(value));
      setCustomQuantity("");
    }
  };

  const handleCustomQuantityChange = (e) => {
    const value = parseInt(e.target.value) || "";
    setCustomQuantity(value);
    if (value) {
      setSelectedQuantity(value);
    }
  };

  const getFinalQuantity = () => {
    if (selectedQuantity === "custom") {
      return parseInt(customQuantity) || 1;
    }
    return selectedQuantity;
  };

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        toast.error("Please log in to add items to cart");
        return;
      }

      setAddingToCart(true);
      const finalQuantity = getFinalQuantity();
      console.log(finalQuantity);

      // Validate quantity
      if (finalQuantity < 1 || finalQuantity > stockCount) {
        toast.error(`Please select a quantity between 1 and ${stockCount}`);
        return;
      }

      const result = await addToCart(id, { quantity: finalQuantity });
      console.log(result);

      if (result.success) {
        toast.success(result.message || "Added to cart!");
        // Optional: Update local state or refetch cart
        window.location.href = `/cart`;
      } else {
        toast.error(result.error || "Failed to add to cart");
      }
    } catch (err) {
      console.error("Add to cart error:", err);
      if (err.message.includes("401")) {
        toast.error("Please log in to add items to cart");
      } else {
        toast.error("Failed to add to cart");
      }
    } finally {
      setAddingToCart(false);
    }
  };

  const handleBuyNow = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to continue");
      return;
    }

    const finalQuantity = getFinalQuantity();
    // You can pass quantity as a query parameter
    window.location.href = `/buy-now/${id}?quantity=${finalQuantity}`;
  };

  return (
    <div className="product-container">
      <div className="product-layout">
        {/* Product Images Section */}
        <div className="product-image-section">
          <div className="main-image">
            <img
              src={
                product.picture
                  ? `http://localhost:4000${product.picture}` // Fix image URL
                  : "/placeholder-image.png" // Better fallback
              }
              alt={product.title}
              onError={(e) => {
                e.target.src = "/placeholder-image.png"; // Fallback on error
              }}
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          {/* Title */}
          <h1 className="product-title">{product.title}</h1>

          {/* Summary */}
          {product.summary && (
            <p className="product-summary">{product.summary}</p>
          )}

          {/* Price Section */}
          <div className="price-section">
            {hasDiscount && (
              <div className="original-price">
                List Price: ${parseFloat(product.price).toFixed(2)}
              </div>
            )}

            <div className="current-price">
              <span className="price">${calculateDiscountedPrice()}</span>

              {hasDiscount && (
                <span className="discount-badge">
                  Save{" "}
                  {product.discount_type === "percent"
                    ? `${product.discount_value}%`
                    : `$${product.discount_value}`}
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
                ({product.stock_quantity} available)
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
                  <option value="custom">Custom (11-{stockCount})</option>
                )}
              </select>

              {selectedQuantity === "custom" && (
                <input
                  type="number"
                  className="custom-quantity-input"
                  min="11"
                  max={stockCount}
                  value={customQuantity}
                  placeholder="Enter quantity"
                  onChange={handleCustomQuantityChange}
                />
              )}
            </div>
          )}

          {/* Add to Cart Section */}
          <div className="action-section">
            <div className="action-buttons">
              <button
                className="btn btn-add-cart"
                disabled={!isInStock || addingToCart}
                onClick={handleAddToCart} // 🔥 this is the fix
              >
                {addingToCart ? "Adding..." : "Add to Cart"}
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
          {product.tags && product.tags.length > 0 && (
            <div className="tags-section">
              <h3 className="tags-title">Tags:</h3>
              <div className="tags-list">
                {product.tags.map((tag, index) => (
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
        <p className="description-text">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductPage;