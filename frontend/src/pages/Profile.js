import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState({ name: "", email: "", location: "", age: "", education: "" });

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
      alert("Profile updated!");
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    <div>
      <h2>My Profile</h2>
      <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input type="text" value={user.location} onChange={(e) => setUser({ ...user, location: e.target.value })} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Profile;
