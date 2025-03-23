import React, { useState } from "react";
import "../assets/MatrimonyDetails.css";

const MatrimonyDetails = () => {
  const [progress, setProgress] = useState(60);
  const [maritalStatus, setMaritalStatus] = useState("");
  const [familyStatus, setFamilyStatus] = useState("");
  const [familyType, setFamilyType] = useState("");
  const [familyValues, setFamilyValues] = useState("");
  const [disability, setDisability] = useState("None");

  // Function to handle single selection buttons
  const handleSelection = (setter, value) => {
    setter(value);
  };

  return (
    <div className="container">
      {/* Main Card */}
      <div className="form-card">
        
        {/* Left Section - Info Box */}
        <div className="left-section">
          <div className="icon">💚</div>
          <p className="info-text">
            Not only a good career, or handsome. <br />
            Most importantly - deserving of you!
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="right-section">
          {/* Progress Completion Text */}
          <span className="progress-text">
            Great! You have completed <strong>{progress}%</strong>
          </span>

          <h2 className="form-title">Tell us about your personal details</h2>

          {/* Marital Status */}
          <div className="form-group">
            <label>Marital Status</label>
            <div className="options">
              {["Never Married", "Widowed", "Divorced", "Awaiting Divorce"].map((status) => (
                <button
                  key={status}
                  className={maritalStatus === status ? "selected" : ""}
                  onClick={() => handleSelection(setMaritalStatus, status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Height Selection */}
          <div className="form-group">
            <label>Height</label>
            <select>
              <option>Feet / Inches</option>
              <option>Below 5 feet</option>
              <option>5'0" - 5'5"</option>
              <option>5'6" - 6'0"</option>
              <option>Above 6'0"</option>
            </select>
          </div>

          {/* Family Status */}
          <div className="form-group">
            <label>Family Status</label>
            <div className="options">
              {["Middle Class", "Upper Middle Class", "High Class", "Rich / Affluent"].map((status) => (
                <button
                  key={status}
                  className={familyStatus === status ? "selected" : ""}
                  onClick={() => handleSelection(setFamilyStatus, status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Family Type */}
          <div className="form-group">
            <label>Family Type</label>
            <div className="options">
              {["Joint", "Nuclear"].map((type) => (
                <button
                  key={type}
                  className={familyType === type ? "selected" : ""}
                  onClick={() => handleSelection(setFamilyType, type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Family Values */}
          <div className="form-group">
            <label>Family Values</label>
            <div className="options">
              {["Orthodox", "Traditional", "Moderate", "Liberal"].map((value) => (
                <button
                  key={value}
                  className={familyValues === value ? "selected" : ""}
                  onClick={() => handleSelection(setFamilyValues, value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Any Disability */}
          <div className="form-group">
            <label>Any Disability</label>
            <div className="options">
              {["None", "Physically Challenged"].map((option) => (
                <button
                  key={option}
                  className={disability === option ? "selected" : ""}
                  onClick={() => handleSelection(setDisability, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default MatrimonyDetails;
