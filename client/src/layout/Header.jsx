import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Avatar } from "@chakra-ui/react";

const Header = () => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    const handleStorage = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      // If user was logged in and now is logged out, reload the page
      setUser(storedUser);
    };
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.location.reload();
    };
  }, [user]); // depend on user

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
      {user ? (
        <div>
          <Link to="/account">
            <Avatar name={user?.name} src={user?.avatar} />
          </Link>
        </div>
      ) : (
        <div className="user-actions">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
