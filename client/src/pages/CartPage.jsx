import { useEffect, useState } from "react";
import { getCartItems, deleteCartItem, checkout } from "../services/api";
import toast from "react-hot-toast";
import "./cart.css";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const items = await getCartItems();
        setCartItems(items);
      } catch (err) {
        console.error("Failed to fetch cart items", err);
      }
    };
    fetchCart();
  }, []);

  const handleRemove = async (itemId) => {
    try {
      await deleteCartItem(itemId);
      setCartItems((prev) => prev.filter((item) => item.id !== itemId));
      toast.success("Deleted from cart!");
    } catch (err) {
      toast.error("Failed to remove item!");
      console.error("Failed to remove item", err);
    }
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    setIsCheckingOut(true);
    try {
      await checkout(cartItems);
      toast.success("Order placed successfully!");
      setCartItems([]);
    } catch (err) {
      toast.error(err.message || "Checkout failed!");
      console.error("Checkout error", err);
    } finally {
      setIsCheckingOut(false);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <p className="item-title">{item.product.title}</p>
                  <p className="item-details">Quantity: {item.quantity}</p>
                  <p className="item-details">Price: ${item.price}</p>
                  <p className="item-details">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p className="cart-total">Total: ${calculateTotal().toFixed(2)}</p>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? "Processing..." : "Checkout"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
