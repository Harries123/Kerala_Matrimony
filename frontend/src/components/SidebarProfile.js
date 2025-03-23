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
      <h3>Profile ID: {uniqueID}</h3>
      <ul>
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
  );
};

export default SidebarProfile;
