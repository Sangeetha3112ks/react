import React from "react";
import "./LoginPopup.css";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
    onClose();
  };

  return (
    <div className="login-popup-overlay">
      <div className="login-popup">
        <h2>Login</h2>
        <p>To manage your wishlist page, please log in.</p>
        <div className="button-container">
          <button className="action-button" onClick={handleLoginClick}>
            Login
          </button>
          <button className="action-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
