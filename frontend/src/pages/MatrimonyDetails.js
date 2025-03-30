import React, { useState } from "react";
import "../assets/MatrimonyDetails.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MatrimonyDetails = () => {
  const navigate = useNavigate();

  const [progress] = useState(60);
  const [formData, setFormData] = useState({
    maritalStatus: "",
    familyStatus: "",
    familyType: "",
    familyValues: "",
    disability: "None",
    height: "",
  });

  const handleSelection = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, height: e.target.value });
  };

  const handleRegister = async () => {
    const { maritalStatus, familyStatus, familyType, familyValues, height } = formData;

    if (!maritalStatus || !familyStatus || !familyType || !familyValues || !height) {
      alert("Please fill all fields before continuing.");
      return;
    }

    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User ID not found. Please register first.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/users/matrimony-details",
        { userId, ...formData }
      );

      if (response.status === 200) {
        console.log("User Matrimony Data Saved ✅", response.data);
        navigate("/professional-details");
      }
    } catch (error) {
      console.error(
        "Matrimony Details Error:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <div className="left-section">
          <div className="icon">💚</div>
          <p className="info-text">
            Not only a good career, or handsome. <br />
            Most importantly - deserving of you!
          </p>
        </div>

        <div className="right-section">
          <span className="progress-text2">
            Great! You have completed <strong>{progress}%</strong>
          </span>

          <h2 className="form-title">Tell us about your personal details</h2>

          {/* Marital Status */}
          <div className="form-group">
            <label>Marital Status</label>
            <div className="options">
              {["Never Married", "Widowed", "Divorced", "Awaiting Divorce"].map(
                (status) => (
                  <button
                    key={status}
                    className={formData.maritalStatus === status ? "selected" : ""}
                    onClick={() => handleSelection("maritalStatus", status)}
                  >
                    {status}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Height */}
          <div className="form-group">
            <label>Height</label>
            <select value={formData.height} onChange={handleChange}>
              <option value="">Feet / Inches</option>
              <option value="Below 5 feet">Below 5 feet</option>
              <option value="5'0 - 5'5">5'0" - 5'5"</option>
              <option value="5'6 - 6'0">5'6" - 6'0"</option>
              <option value="Above 6'0">Above 6'0"</option>
            </select>
          </div>

          {/* Family Status */}
          <div className="form-group">
            <label>Family Status</label>
            <div className="options">
              {["Middle Class", "Upper Middle Class", "High Class", "Rich / Affluent"].map(
                (status) => (
                  <button
                    key={status}
                    className={formData.familyStatus === status ? "selected" : ""}
                    onClick={() => handleSelection("familyStatus", status)}
                  >
                    {status}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Family Type */}
          <div className="form-group">
            <label>Family Type</label>
            <div className="options">
              {["Joint", "Nuclear"].map((type) => (
                <button
                  key={type}
                  className={formData.familyType === type ? "selected" : ""}
                  onClick={() => handleSelection("familyType", type)}
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
                  className={formData.familyValues === value ? "selected" : ""}
                  onClick={() => handleSelection("familyValues", value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Disability */}
          <div className="form-group">
            <label>Any Disability</label>
            <div className="options">
              {["None", "Physically Challenged"].map((option) => (
                <button
                  key={option}
                  className={formData.disability === option ? "selected" : ""}
                  onClick={() => handleSelection("disability", option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleRegister} className="continue-btn">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatrimonyDetails;
