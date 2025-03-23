import React from "react";
import { FaHome, FaUser, FaEnvelope, FaSearch, FaBell, FaCog } from "react-icons/fa";
import "../assets/css/navbarMatrimony.css";

const NavbarMatrimony = () => {
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
      <div className="profile-icon">
        <FaUser />
      </div>
    </nav>
  );
};

export default NavbarMatrimony;
