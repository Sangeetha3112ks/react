import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="contact-container">
    <h1>Contact Us</h1>
    <p className="contact-intro">
      Get in touch using the form or contact details below.
    </p>
    <div className="contact-form">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
    <div className="contact-info">
      <h2>Our Information</h2>
      <p>
        <strong>Address:</strong> 123 Main Street, town, 12345
      </p>
      <p>
        <strong>Phone:</strong> (123) 456-7890
      </p>
      <p>
        <strong>Email:</strong> daxone@gmail.com
      </p>
    </div>
  </div>
);

export default Contact;