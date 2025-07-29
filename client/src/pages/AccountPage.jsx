import React, { useState, useEffect } from "react";
import { getUserProfile } from "../services/api";
import { useNavigate } from "react-router-dom"; // Add this import

function AccountPage() {
  const [user, setUser] = useState();
  const navigate = useNavigate(); // Add this

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await getUserProfile();
        console.log(res);
        setUser(res.user); // Set only the user object from the response
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    getUser();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="account-container">
      <div className="usersInfo">
        {user && (
          <>
            <h2>Profile Information</h2>
            <div className="user-details">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              {/* Add more user details as needed */}
            </div>
          </>
        )}
      </div>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default AccountPage;

// Add this CSS to your stylesheet
