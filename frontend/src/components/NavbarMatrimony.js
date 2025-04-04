import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaCrown, 
  FaEdit, 
  FaHeadset, 
  FaBookOpen, 
  FaStar, 
  FaHandHoldingHeart,
  FaGift,
  FaRupeeSign
} from "react-icons/fa";
import "../assets/css/navbarMatrimony.css";

const NavbarMatrimony = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);


  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  

  return (
    <nav className="navbar-matrimony">
      {/* Logo */}
      <div className="logo-container" onClick={() => navigate("/")}>
        <img 
          decoding="async" 
          src="https://imgs.keralamatrimony.com/bmimgs/new-logo/kerala-matrimony-logo.png" 
          alt="Kerala Matrimony Logo"
          className="logo-image"
        />
      </div>
      
      {/* Navigation Links */}
      <ul className="nav-links">
        {/* Home */}
        <li className="nav-item" onClick={() => navigate("/useraccount")}>
          <div className="nav-icon">
            <img 
              decoding="async" 
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-home.svg" 
              alt="Home"
              className="nav-image"
            />
          </div>
          <span className="nav-label">Home</span>
        </li>

        {/* Matches */}
        <li className="nav-item" onClick={() => navigate("/matches")}>
          <div className="nav-icon">
            <img 
              decoding="async" 
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-green-matches.svg" 
              alt="Matches"
              className="nav-image"
            />
          </div>
          <span className="nav-label matches-label">Matches</span>
        </li>

        {/* Mailbox */}
        <li className="nav-item" onClick={() => navigate("/mailbox")}>
          <div className="nav-icon">
            <img 
              decoding="async" 
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-mailbox.svg" 
              alt="Mailbox"
              className="nav-image"
            />
          </div>
          <span className="nav-label">Mailbox</span>
        </li>

        {/* Search */}
        <li className="nav-item" onClick={() => navigate("/search")}>
          <div className="nav-icon">
            <img 
              decoding="async" 
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/icon-generic-search.svg" 
              alt="Search"
              className="nav-image"
            />
          </div>
          <span className="nav-label">Search</span>
        </li>

        {/* Notifications */}
        <li className="nav-item" onClick={() => navigate("/notifications")}>
          <div className="nav-icon">
            <img 
              decoding="async" 
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-notification.svg" 
              alt="Notifications"
              className="nav-image"
            />
          </div>
          <span className="nav-label">Notifications</span>
        </li>

        {/* Services */}
        <li className="nav-item" onClick={() => navigate("/services")}>
          <div className="nav-icon">
            <img 
              decoding="async" 
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bm-services/icon-generic-services.svg" 
              alt="Services"
              className="nav-image"
            />
          </div>
          <span className="nav-label">Services</span>
        </li>
      </ul>

      {/* Profile Dropdown */}
      <div className="profile-dropdown-container" ref={dropdownRef}>
        <div 
          className="profile-container" 
          onClick={() => setIsOpen((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          <img 
            decoding="async" 
            src="https://i.pinimg.com/736x/31/9c/66/319c6690094328792031d3d278c2f32a.jpg" 
            alt="Profile"
            className="profile-image1"
          />
        </div>

        {isOpen && (
          <div className="dropdown-menu">
            {/* Profile Info */}
            <div className="profile-info">
              <div className="profile-name">Hereesh</div>
              <div className="profile-id">E10245921</div>
              <div className="membership-status">
                <span className="status-badge">Free member</span>
                <button 
                  className="upgrade-btn"
                  onClick={() => navigate("/membership")}
                >
                  <FaCrown /> Upgrade membership to call/chat with matches
                </button>
              </div>
            </div>

            <div className="dropdown-divider"></div>

            {/* Main Options */}
            <div className="dropdown-section">
              <div className="dropdown-item" onClick={() => navigate("/profile/edit")}>
                <FaEdit /> Edit profile
              </div>
              <div className="dropdown-item" onClick={() => navigate("/preferences")}>
                <FaEdit /> Edit preferences
              </div>
              <div className="dropdown-item" onClick={() => navigate("/support")}>
                <FaHeadset /> Support & feedback
              </div>
              <div className="dropdown-item" onClick={() => navigate("/settings")}>
                <FaHeadset /> Settings
              </div>
            </div>

            <div className="dropdown-divider"></div>

            {/* Other Services */}
            <div className="dropdown-section">
              <div className="dropdown-header">Matrimony.com - Other Services</div>
              <div className="dropdown-item" onClick={() => window.open("https://www.astrofreechat.com")}>
                <FaStar /> AstroFreeChat.com
              </div>
              <div className="dropdown-item" onClick={() => window.open("https://www.weddingbazaar.com")}>
                <FaBookOpen /> WeddingBazaar.com
              </div>
              <div className="dropdown-item" onClick={() => window.open("https://www.makemywedding.com")}>
                <FaHandHoldingHeart /> MakeMyWedding.com
              </div>
              <div className="dropdown-item" onClick={() => window.open("https://www.mandap.com")}>
                <FaHandHoldingHeart /> Mandap.com
              </div>
              <div className="dropdown-item" onClick={() => window.open("https://www.weddingloan.com")}>
                <FaRupeeSign /> WeddingLoan.com
              </div>
              <div className="dropdown-item" onClick={() => window.open("https://www.weddinggiftbox.com")}>
                <FaGift /> WeddingGiftBox.com
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarMatrimony;