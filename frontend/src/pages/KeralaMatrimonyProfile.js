import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/KeralaMatrimonyProfile.css";
function KeralaMatrimonyProfile() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    location: "",
    religion: "",
    caste: "",
    education: "",
    profession: "",
    about: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching profile", error);
      }
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:5000/api/users/me", user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>{user.name}</h3>
        <ul>
          <li>📌 Dashboard</li>
          <li>📷 Gallery</li>
          <li>💖 My Interests</li>
          <li>📩 Messages</li>
          <li>👨‍👩‍👧‍👦 Family Details</li>
          <li>⚙️ Settings</li>
        </ul>
      </div>

      {/* Profile Details */}
      <div className="profile-content">
        <h2>My Profile</h2>
        <label>Name:</label>
        <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
        
        <label>Age:</label>
        <input type="text" value={user.age} onChange={(e) => setUser({ ...user, age: e.target.value })} />

        <label>Location:</label>
        <input type="text" value={user.location} onChange={(e) => setUser({ ...user, location: e.target.value })} />

        <label>Religion:</label>
        <input type="text" value={user.religion} onChange={(e) => setUser({ ...user, religion: e.target.value })} />

        <label>Caste:</label>
        <input type="text" value={user.caste} onChange={(e) => setUser({ ...user, caste: e.target.value })} />

        <label>Education:</label>
        <input type="text" value={user.education} onChange={(e) => setUser({ ...user, education: e.target.value })} />

        <label>Profession:</label>
        <input type="text" value={user.profession} onChange={(e) => setUser({ ...user, profession: e.target.value })} />

        <label>About Me:</label>
        <textarea value={user.about} onChange={(e) => setUser({ ...user, about: e.target.value })}></textarea>

        <button onClick={handleUpdate}>Update Profile</button>
      </div>
    </div>
  );
}

export default KeralaMatrimonyProfile;
