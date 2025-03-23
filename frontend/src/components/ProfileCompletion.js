import React from "react";
import "../assets/css/profileCompletion.css";

const ProfileCompletion = () => {
  return (
    <div className="profile-completion">
      <h3>Complete Your Profile</h3>
      <p>Profile Completion Score: 40%</p>
      <progress value="40" max="100"></progress>
    </div>
  );
};

export default ProfileCompletion;
