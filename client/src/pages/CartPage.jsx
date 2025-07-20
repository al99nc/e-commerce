import React, { useState, useEffect } from "react";
import { ShoppingCart, Plus, Minus, Trash2, Package } from "lucide-react";

// Mock user ID - replace with your auth system

// Product Card Component
const ProductCard = ({ product, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    await onAddToCart(product.id, 1);
    setIsAdding(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <img
        src={product.picture}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x200?text=Product";
        }}
      />
      <h3 className="text-lg font-semibold mb-2 text-gray-800">
        {product.title}
      </h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description}
      </p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl font-bold text-blue-600">
          ${product.price}
        </span>
        <span
          className={`text-sm px-2 py-1 rounded ${
            product.stock_quantity > 0
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {product.stock_quantity > 0
            ? `${product.stock_quantity} in stock`
            : "Out of stock"}
        </span>
      </div>
      <button
        onClick={handleAddToCart}
        disabled={isAdding || product.stock_quantity === 0}
        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
          product.stock_quantity === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
        }`}
      >
        {isAdding ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <ShoppingCart size={18} />
            Add to Cart
          </>
        )}
      </button>
    </div>
  );
};

// Cart Item Component
const CartItemComponent = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity) => {
    if (newQuantity === item.quantity) return;
    setIsUpdating(true);
    await onUpdateQuantity(item.id, newQuantity);
    setIsUpdating(false);
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border">
      <img
        src={item.product.picture}
        alt={item.product.title}
        className="w-16 h-16 object-cover rounded-lg"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/64x64?text=Product";
        }}
      />
      <div className="flex-1">
        <h4 className="font-medium text-gray-800">{item.product.title}</h4>
        <p className="text-blue-600 font-semibold">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQuantityChange(Math.max(1, item.quantity - 1))}
          disabled={isUpdating || item.quantity <= 1}
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          disabled={isUpdating || item.quantity >= item.product.stock_quantity}
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        >
          <Plus size={16} />
        </button>
      </div>
      <div className="text-right">
        <p className="font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => onRemoveItem(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

// Main Cart System Component
const CartSystem = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Mock products data
  useEffect(() => {
    setProducts([
      {
        id: "1",
        title: "Premium Wireless Headphones",
        picture:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
        price: 199.99,
        stock_quantity: 15,
        status: "ACTIVE",
        description: "High-quality wireless headphones with noise cancellation",
      },
      {
        id: "2",
        title: "Smart Fitness Watch",
        picture:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
        price: 299.99,
        stock_quantity: 8,
        status: "ACTIVE",
        description: "Advanced fitness tracking with heart rate monitor",
      },
      {
        id: "3",
        title: "Portable Speaker",
        picture:
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop",
        price: 89.99,
        stock_quantity: 0,
        status: "OUT_OF_STOCK",
        description: "Compact wireless speaker with amazing sound quality",
      },
    ]);
  }, []);

  // Load cart on component mount
  useEffect(() => {
    loadCart();
  }, []);

  const showMessage = (msg, type = "success") => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  };

  const loadCart = async () => {
    try {
      const response = await fetch(`/api/cart/${MOCK_USER_ID}`);
      const data = await response.json();

      if (response.ok) {
        setCart(data.cart);
        setCartTotal(data.total);
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    setLoading(true);
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: MOCK_USER_ID,
          productId,
          quantity,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        showMessage("Item added to cart!");
        await loadCart();
      } else {
        showMessage(data.error || "Failed to add item to cart", "error");
      }
    } catch (error) {
      showMessage("Network error occurred", "error");
    }
    setLoading(false);
  };

  const updateCartItemQuantity = async (cartItemId, quantity) => {
    try {
      const response = await fetch("/api/cart/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: MOCK_USER_ID,
          cartItemId,
          quantity,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        showMessage("Cart updated!");
        await loadCart();
      } else {
        showMessage(data.error || "Failed to update cart", "error");
      }
    } catch (error) {
      showMessage("Network error occurred", "error");
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      const response = await fetch("/api/cart/remove", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: MOCK_USER_ID,
          cartItemId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        showMessage("Item removed from cart!");
        await loadCart();
      } else {
        showMessage(data.error || "Failed to remove item", "error");
      }
    } catch (error) {
      showMessage("Network error occurred", "error");
    }
  };

  const cartItemCount = cart?.items?.length || 0;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Store</h1>
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Message */}
      {message && (
        <div className="max-w-6xl mx-auto mb-4">
          <div
            className={`p-4 rounded-lg ${
              message.includes("error") || message.includes("Failed")
                ? "bg-red-100 text-red-800 border border-red-200"
                : "bg-green-100 text-green-800 border border-green-200"
            }`}
          >
            {message}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {showCart ? (
          /* Cart View */
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Shopping Cart
              </h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-blue-600 hover:text-blue-800"
              >
                Continue Shopping
              </button>
            </div>

            {cart && cart.items && cart.items.length > 0 ? (
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <CartItemComponent
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateCartItemQuantity}
                    onRemoveItem={removeFromCart}
                  />
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total: ${cartTotal.toFixed(2)}</span>
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Package size={64} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-600 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500">
                  Add some products to get started!
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Products View */
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSystem;
