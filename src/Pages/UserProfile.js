import React, { useState, useEffect, useRef } from "react";
import "./UserProfile.css";
import MyOrders from "./MyOrders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const UserProfile = ({ onClose, onLogout }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const profileRef = useRef(null);
  const [showOrders, setShowOrders] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) =>
      profileRef.current && !profileRef.current.contains(e.target) && onClose();
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(editedUser));
    setUser(editedUser);
    setIsEditing(false);
  };
  const handleLogout = () => onLogout();
  const handleChange = (e) =>
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });

  const getInitials = (email) => {
    if (!email) return "";
    return email.charAt(0).toUpperCase();
  };

  const handleMyOrders = () => {
    setShowOrders(true);
  };

  const closeOrders = () => setShowOrders(false);

  return user ? (
    <div className="user-profile-container">
      <div className="user-profile-content" ref={profileRef}>
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2>MyAccount</h2>
        <div className="avatar-circle">{getInitials(user.email)}</div>
        {isEditing ? (
          <form className="profile-form">
            {["firstName", "lastName", "email", "address", "phoneNumber"].map(
              (name) => (
                <input
                  key={name}
                  type={
                    name === "email"
                      ? "email"
                      : name === "phoneNumber"
                      ? "tel"
                      : "text"
                  }
                  name={name}
                  value={editedUser[name]}
                  onChange={handleChange}
                  placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                />
              )
            )}
            <button className="modern-button" onClick={handleSave}>
              Save
            </button>
          </form>
        ) : (
          <div className="profile-info">
            {["firstName", "lastName", "email", "address", "phoneNumber"].map(
              (name) => (
                <p key={name}>
                  <strong>
                    {name.charAt(0).toUpperCase() + name.slice(1)}:
                  </strong>{" "}
                  {user[name]}
                </p>
              )
            )}
            <button className="modern-button" onClick={handleEdit}>
              Edit Profile
            </button>
          </div>
        )}
        <button className="modern-button" onClick={handleMyOrders}>
          My Orders
        </button>
        <button className="modern-button logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {showOrders && <MyOrders closeOrders={closeOrders} />}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default UserProfile;
