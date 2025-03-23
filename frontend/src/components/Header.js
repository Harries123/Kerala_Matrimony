import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../assets/images/logo.jpeg"; 


const Header = () => {
  return (
    <header className="header">
    
    <img src={logo} alt="Logo" className="logo" />


      {/* Navigation Buttons */}
      <div className="nav-links1">
        <p><b> Already a member?</b></p>
       <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/" className="btn btn-outline-light">Help</Link>
       
       
      </div>
    </header>
  );
};

export default Header;
