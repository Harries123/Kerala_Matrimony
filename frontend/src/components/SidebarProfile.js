import React, { useState, useEffect } from "react";
import "../assets/css/sidebarProfile.css";

const SidebarProfile = () => {
  const [uniqueID, setUniqueID] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("uniqueID") || Math.floor(1000000000 + Math.random() * 9000000000);
    setUniqueID(id);
    localStorage.setItem("uniqueID", id);
  }, []);

  return (
    <div className="sidebar">
      {/* Top Section */}
      <div className="top">
        <h3>Profile ID: {uniqueID}</h3>
      </div>
      <hr />

      {/* Navigation Menu */}
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>📌 Dashboard</li>
          <li>📷 Edit Profile</li>
          <li>⚙️ Edit Preferences</li>
          <li>💖 My Interests</li>
          <li>📩 Messages</li>
          <li>👨‍👩‍👧‍👦 Family Details</li>
          <li>⚙️ Settings</li>
          <li>❓ Help</li>
        </ul>
      </div>

      {/* Theme Options */}
      <div className="bottom">
        <div className="colorOption light"></div>
        <div className="colorOption dark"></div>
      </div>
    </div>
  );
};

export default SidebarProfile;
