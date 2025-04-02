import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../assets/images/logo.jpeg";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Navigation Buttons */}
      <div className="nav-links1">
        <p><b>Already a member?</b></p>
        <Link to="/login" className="btn btn-primary">Login</Link>

        {/* Help Dropdown */}
        <div className="dropdown-container">
          <button 
            className="btn btn-outline-light" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Help ▼
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <p><b>24x7 HELP :</b></p>
              <p>INDIA: <b>+91 8144998877</b></p>
              <p>UAE: <b>+971 525060879</b></p>
              <hr />
              <Link to="/live-help">Live Help</Link>
              <Link to="/contact-us">Contact Us</Link>
              <Link to="/feedback">Feedback</Link>
              <Link to="/business-queries">Business Queries</Link>
              <Link to="/retail-stores">Retail Stores</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
