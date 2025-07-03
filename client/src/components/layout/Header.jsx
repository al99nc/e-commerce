import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      {/* User Actions */}
      <div className="user-actions">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        {/* Add cart icon here later */}
      </div>
    </header>
  );
};

export default Header;
