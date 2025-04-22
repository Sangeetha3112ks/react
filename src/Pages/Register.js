import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Register = () => {
  const [f, sF] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [e, sE] = useState({});
  const n = useNavigate();
  const [pV, sPV] = useState(false);
  const [cPV, sCPV] = useState(false);

  const vF = (name, val) => {
    let err = "";
    switch (name) {
      case "firstName":
        if (!val) err = "First name is required.";
        else if (!/^[A-Za-z]+$/.test(val))
          err = "First name should only contain letters.";
        break;
      case "lastName":
        if (!val) err = "Last name is required.";
        else if (!/^[A-Za-z]+$/.test(val))
          err = "Last name should only contain letters.";
        break;
      case "email":
        if (!val) err = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(val)) err = "Invalid email format.";
        break;
      case "address":
        if (!val) err = "Address is required.";
        break;
      case "phoneNumber":
        if (!val) err = "Phone number is required.";
        else if (val && !/^\d{10}$/.test(val))
          err = "Invalid phone number format. Must be 10 digits.";
        break;
      case "password":
        if (!val) err = "Password is required.";
        else {
          const pR =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
          if (!pR.test(val))
            err =
              "Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.";
        }
        break;
      case "confirmPassword":
        if (!val) err = "Confirm password is required.";
        else if (val !== f.password) err = "Passwords do not match.";
        break;
      default:
        break;
    }
    return err;
  };

  const hC = (ev) => {
    const { name, value } = ev.target;
    sF({ ...f, [name]: value });
    sE({ ...e, [name]: vF(name, value) });
  };

  const hS = (ev) => {
    ev.preventDefault();
    let nE = {};
    Object.keys(f).forEach((name) => {
      nE[name] = vF(name, f[name]);
    });
    sE(nE);

    if (Object.values(nE).every((err) => !err)) {
      localStorage.setItem("user", JSON.stringify({ ...f }));
      n("/login");
    }
  };

  const tPV = () => {
    sPV(!pV);
  };
  const tCPV = () => {
    sCPV(!cPV);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Registration</h2>
        <form onSubmit={hS}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={f.firstName}
              onChange={hC}
              className={e.firstName ? "error" : ""}
            />
            {e.firstName && <p className="error-message">{e.firstName}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={f.lastName}
              onChange={hC}
              className={e.lastName ? "error" : ""}
            />
            {e.lastName && <p className="error-message">{e.lastName}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={f.email}
              onChange={hC}
              autoComplete="off"
              className={e.email ? "error" : ""}
            />
            {e.email && <p className="error-message">{e.email}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={f.address}
              onChange={hC}
              className={e.address ? "error" : ""}
            />
            {e.address && <p className="error-message">{e.address}</p>}
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={f.phoneNumber}
              onChange={hC}
              className={e.phoneNumber ? "error" : ""}
            />
            {e.phoneNumber && <p className="error-message">{e.phoneNumber}</p>}
          </div>
          <div className="password-input">
            <input
              type={pV ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={f.password}
              onChange={hC}
              className={e.password ? "error" : ""}
            />
            <span className="password-toggle" onClick={tPV}>
              {pV ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </span>
            {e.password && <p className="error-message">{e.password}</p>}
          </div>
          <div className="password-input">
            <input
              type={cPV ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={f.confirmPassword}
              onChange={hC}
              className={e.confirmPassword ? "error" : ""}
            />
            <span className="password-toggle" onClick={tCPV}>
              {cPV ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </span>
            {e.confirmPassword && (
              <p className="error-message">{e.confirmPassword}</p>
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