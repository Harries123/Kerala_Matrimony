import React from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { FaEye, FaHeart, FaUserCheck, FaPhone, FaChartBar, FaThumbsUp } from "react-icons/fa";
import "../assets/css/profileCompletion.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProfileCompletion = () => {
  const navigate = useNavigate();

  // Bar Graph Data
  const graphData = {
    labels: ["Music", "Travel", "Reading", "Sports", "Others"],
    datasets: [
      {
        label: "Interest Percentage",
        data: [30, 25, 20, 15, 10], // Interest data
        backgroundColor: ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6"],
        borderRadius: 5,
      },
    ],
  };

  // Bar Graph Options
  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="user-profile-container">
      <h2 className="user-profile-title">User Profile</h2>

      {/* Profile Picture Section */}
      <div className="user-profile-picture">
        <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
        <button className="profile-btn remove-profile-btn">Remove</button>
        <button className="profile-btn change-profile-btn">Change</button>
      </div>

      {/* Profile Insights */}
      <div className="profile-insights">
        <div className="insight-card">
          <FaEye className="insight-icon" />
          <h3>Profile Views</h3>
          <p>1,234 People</p>
        </div>

        <div className="insight-card">
          <FaUserCheck className="insight-icon" />
          <h3>Matches</h3>
          <p>78% Compatible</p>
        </div>

        <div className="insight-card">
          <FaChartBar className="insight-icon" />
          <h3>Interest Rate</h3>
          <div className="chart-container">
            <Bar data={graphData} options={graphOptions} />
          </div>
        </div>
      </div>

      {/* Search Appearance */}
      <div className="profile-stats">
        <div className="stat-card">
          <h3>Search Appearance</h3>
          <p>2,356 Times</p>
        </div>

        <div className="stat-card">
          <h3>Impressions</h3>
          <p>4,789</p>
        </div>
      </div>

      {/* About & Activity */}
      <div className="profile-details">
        <h3>About This Profile</h3>
        <p><strong>About Me:</strong> Lorem ipsum dolor sit amet...</p>
        <p><strong>Interests:</strong> Music, Travel, Reading</p>
        <p><strong>Horoscope:</strong> Taurus</p>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <h3>Activity</h3>
          <p>Last Active: 2 hours ago</p>
        </div>

        <div className="stat-card">
          <h3>Contact Info</h3>
          <FaPhone className="contact-icon" />
          <p>Visible to Matches</p>
        </div>
      </div>

      {/* Liked Profiles & Favorites */}
      <div className="profile-interactions">
        <div className="interaction-card">
          <FaThumbsUp className="interaction-icon" />
          <h3>Liked Profiles</h3>
          <p>56 Profiles</p>
        </div>

        <div className="interaction-card">
          <FaHeart className="interaction-icon" />
          <h3>Favorites</h3>
          <p>32 Profiles</p>
        </div>
      </div>

      {/* Edit Profile Button */}
      <button className="edit-user-profile-btn" onClick={() => navigate("/editprofile")}>
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileCompletion;
