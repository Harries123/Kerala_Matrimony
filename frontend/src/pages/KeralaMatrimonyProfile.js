import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/KeralaMatrimonyProfile.css";

const KeralaMatrimonyProfile = () => {
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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (error) {
        setError("Failed to load profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:5000/api/users/me", user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccessMessage("Profile updated successfully!");
    } catch (error) {
      setError("Update failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>{user.name || "User"}</h3>
        <ul>
          <li>📌 Dashboard</li>
          <li>📷 Gallery</li>
          <li>💖 My Interests</li>
          <li>📩 Messages</li>
          <li>👨‍👩‍👧‍👦 Family Details</li>
          <li>⚙️ Settings</li>
        </ul>
      </aside>

      {/* Profile Content */}
      <section className="profile-content">
        <h2>My Profile</h2>

        {loading && <p className="loading-message">Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input type="text" name="age" value={user.age} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="location" value={user.location} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Religion:</label>
          <input type="text" name="religion" value={user.religion} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Caste:</label>
          <input type="text" name="caste" value={user.caste} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Education:</label>
          <input type="text" name="education" value={user.education} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Profession:</label>
          <input type="text" name="profession" value={user.profession} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>About Me:</label>
          <textarea name="about" value={user.about} onChange={handleChange}></textarea>
        </div>

        <button className="update-button" onClick={handleUpdate} disabled={loading}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </section>
    </div>
  );
};

export default KeralaMatrimonyProfile;
