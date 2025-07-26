import React from "react";

  import { Link } from "react-router-dom";
  import "./Header.css";
  const Header = () => {
    return (
      <header className="header">
        {/* Logo */}
        <div className="logo">
          <Link to="/">ECOMMERCE</Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/sell">Sell</Link>
            </li>
          </ul>
        </nav>

        <div className="user-actions">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </header>
    );
  };

export default Header;
