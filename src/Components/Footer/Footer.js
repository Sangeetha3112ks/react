import React from "react";
import "./Footer.css";
import Location from "../images/location_icon.png";
import Email from "../images/email_icon.png";
import Phone from "../images/phone_icon.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <h3>CUSTOM SERVICE</h3>
          <ul>
            <li>
              <a href="#cart">CART</a>
            </li>
            <li>
              <a href="#my-account">MY ACCOUNT</a>
            </li>
            <li>
              <a href="#login">LOGIN</a>
            </li>
            <li>
              <a href="#register">REGISTER</a>
            </li>
            <li>
              <a href="#support">SUPPORT</a>
            </li>
            <li>
              <a href="#track">TRACK</a>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>CATEGORIES</h3>
          <ul>
            <li>
              <a href="#dress">DRESS</a>
            </li>
            <li>
              <a href="#shoes">SHOES</a>
            </li>
            <li>
              <a href="#shirt">SHIRT</a>
            </li>
            <li>
              <a href="#baby-product">BABY PRODUCT</a>
            </li>
            <li>
              <a href="#mens-product">MENS PRODUCT</a>
            </li>
            <li>
              <a href="#leather">LEATHER</a>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>CONTACT</h3>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum is dummy.
          </p>
          <div className="location">
            <img src={Location} alt="Location" className="icon" />
            <span className="items-text1">77 Seventh avenue USA 12555.</span>
          </div>
          <div className="phone">
            <img src={Phone} alt="Phone" className="icon" />
            <span className="items-text2">
              +88 (015) 609735 or +88 (012) 112266
            </span>
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="Enter your E-mail"
              name="email"
            />
            <img src={Email} alt="Email" className="icon1" />
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>Copyright &copy; Daxone . All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
