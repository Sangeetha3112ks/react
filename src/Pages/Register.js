import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Register = () => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName":
        if (value && !/^[A-Za-z]+$/.test(value)) {
          error = "First name should only contain letters.";
        }
        break;
      case "lastName":
        if (value && !/^[A-Za-z]+$/.test(value)) {
          error = "Last name should only contain letters.";
        }
        break;
      case "email":
        if (value && !/\S+@\S+\.\S+/.test(value))
          error = "Invalid email format.";
        break;
      case "address":
        if (!value) error = "Address is required.";
        break;
      case "phoneNumber":
        if (value && !/^\d{10}$/.test(value))
          error = "Invalid phone number format. Must be 10 digits.";
        break;
      case "password":
        if (value) {
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (!passwordRegex.test(value)) {
            error =
              "Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.";
          }
        }
        break;
      case "confirmPassword":
        if (value && value !== fields.password)
          error = "Passwords do not match.";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(fields).forEach((name) => {
      newErrors[name] = validateField(name, fields[name]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      localStorage.setItem("user", JSON.stringify({ ...fields }));
      navigate("/login");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={fields.firstName}
              onChange={handleChange}
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && (
              <p className="error-message">{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={fields.lastName}
              onChange={handleChange}
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && (
              <p className="error-message">{errors.lastName}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              autoComplete="off"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={fields.address}
              onChange={handleChange}
              className={errors.address ? "error" : ""}
            />
            {errors.address && (
              <p className="error-message">{errors.address}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={fields.phoneNumber}
              onChange={handleChange}
              className={errors.phoneNumber ? "error" : ""}
            />
            {errors.phoneNumber && (
              <p className="error-message">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="password-input">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={fields.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </span>
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>
          <div className="password-input">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={fields.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "error" : ""}
            />
            <span
              className="password-toggle"
              onClick={toggleConfirmPasswordVisibility}
            >
              {confirmPasswordVisible ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </span>
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="button-container">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
