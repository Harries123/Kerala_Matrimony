import React, { useState, useEffect } from "react";
import "../assets/ProfessionalDetails.css"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfessionalDetails = () => {
  const navigate = useNavigate(); 
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Form State
  const [education, setEducation] = useState("Higher Secondary School / High School");
  const [employment, setEmployment] = useState("Not Working");
  const [occupation, setOccupation] = useState("");
  const [citizenship, setCitizenship] = useState("India");
  const [customCitizenship, setCustomCitizenship] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [residentStatus, setResidentStatus] = useState("");
  const [progress, setProgress] = useState(80);

  // Employment and Resident Status Options
  const employmentOptions = ["Government/PSU", "Private", "Business", "Defence", "Self Employed", "Not working"];
  const residentOptions = ["Permanent Resident", "Work Permit", "Student Visa", "Temporary Visa"];

  // Preferred Citizenship Countries
  const preferredCountries = [
    "India", "USA", "Canada", "United Kingdom", "Australia",
    "United Arab Emirates", "Singapore", "New Zealand", "Germany", "Qatar", "Other"
  ];

  // Handle Employment Click
  const handleEmploymentClick = (option) => {
    setEmployment(option);
    setOccupation(option === "Not working" ? "Not Working" : "");
    updateProgress();
  };

  // Handle Citizenship Selection
  const handleCitizenshipChange = (e) => {
    const selectedValue = e.target.value;
    setCitizenship(selectedValue);
    setIsOtherSelected(selectedValue === "Other");
    if (selectedValue !== "Other") setCustomCitizenship("");
  };

  // Handle Resident Status Click
  const handleResidentClick = (option) => {
    setResidentStatus(option);
    updateProgress();
  };

  // Update Progress Bar
  const updateProgress = () => {
    let completed = 80;
    if (employment) completed += 5;
    if (residentStatus) completed += 5;
    setProgress(completed);
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      navigate("/login");  // Redirect to login if not authenticated
    
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/professional-details",
        {
          userId,
          education,
          employment,
          occupation,
          citizenship: isOtherSelected ? customCitizenship : citizenship,
          residentStatus,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        setSuccessMessage("Professional details updated successfully!");
        setTimeout(() => navigate(`/verify/${userId}`), 1500); // Redirects to Mobile Verification

      } else {
        setError(response.data.message || "Failed to update details.");
      }
    } catch (error) {
      console.error("Error updating professional details:", error);
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container3">
      <div className="progress-text5">
        Great! You have completed <span className="progress-percentage">{progress}%</span>
      </div>

      <div className="card">
        {/* Left Banner Section */}
        <div className="banner">
          <p className="banner-text">A partner who is generous in every way</p>
        </div>

        {/* Right Form Section */}
        <div className="form-section">
          <h2 className="title">Professional details help us find the best companion</h2>

          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          {/* Highest Education */}
          <div className="form-group">
            <label>Highest Education</label>
            <select value={education} onChange={(e) => setEducation(e.target.value)}>
              <option>Higher Secondary School / High School</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>PhD</option>
            </select>
          </div>

          {/* Employment Options */}
          <div className="form-group">
            <label>Employed in</label>
            <div className="options">
              {employmentOptions.map((option) => (
                <button
                  key={option}
                  className={`option-button ${employment === option ? "active" : ""}`}
                  onClick={() => handleEmploymentClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Occupation */}
          <div className="form-group">
            <label>Occupation</label>
            <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
          </div>

          {/* Citizenship */}
          <div className="form-group">
            <label>Citizenship</label>
            <select value={citizenship} onChange={handleCitizenshipChange}>
              {preferredCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            {isOtherSelected && (
              <input
                type="text"
                placeholder="Enter your citizenship"
                value={customCitizenship}
                onChange={(e) => setCustomCitizenship(e.target.value)}
                className="form-control mt-2"
              />
            )}
          </div>

          {/* Resident Status */}
          <div className="form-group">
            <label>Resident Status</label>
            <div className="options">
              {residentOptions.map((option) => (
                <button
                  key={option}
                  className={`option-button ${residentStatus === option ? "active" : ""}`}
                  onClick={() => handleResidentClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button className="continue-button" onClick={handleSubmit}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;
