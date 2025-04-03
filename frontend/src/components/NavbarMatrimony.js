import React from "react";
import { FaHome, FaUser, FaEnvelope, FaSearch, FaBell, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assets/css/navbarMatrimony.css";

const NavbarMatrimony = () => {
  const navigate = useNavigate(); // Hook for navigation

  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");
  
    menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });
  

  return (
    <nav className="navbar">
      <div className="logo">Kerala Matrimony</div>
      <ul className="nav-links">
        <li><FaHome /> Home</li>
        <li><FaUser /> Matches</li>
        <li><FaEnvelope /> Mailbox</li>
        <li><FaSearch /> Search</li>
        <li><FaBell /> Notifications</li>
        <li><FaCog /> Services</li>
      </ul>
      <div className="profile-icon" onClick={() => navigate("/profile")} style={{ cursor: "pointer" }}>
        <FaUser />
      </div>
    </nav>
  );
};

export default NavbarMatrimony;
