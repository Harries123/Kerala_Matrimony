import { useState } from "react";
import "../assets/MatrimonyForm.css";
import { useNavigate } from "react-router-dom";

const MatrimonyForm = () => {
  const navigate = useNavigate();
  const [caste, setCaste] = useState("Select");

  const handleContinue = () => {
    if (caste === "Select") {
      alert("Please select your caste before continuing.");
      return;
    }
    navigate("/matrimony-details");
  };

  return (
    <div className="container">
      {/* Main Card */}
      <div className="form-card">
        
        {/* Left Section - Info Box */}
        <div className="left-section">
          <img src="https://www.bharatmatrimony.com/" alt="Kerala Matrimony" className="logo" />
          <div className="icon">🤝</div>
          <p className="info-text">
            Last year 10,000+ women <br /> found love on Kerala Matrimony
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="right-section">
          {/* Progress Completion */}
          <span className="progress-text1">Great! You have completed <strong>40%</strong></span>

          <h2 className="form-title">
            Religion details can help us find the right match
          </h2>

          {/* Form Fields */}
          <div className="form-group">
            <label>Caste</label>
            <select value={caste} onChange={(e) => setCaste(e.target.value)}>
              <option value="Select">Select</option>
              <option value="Brahmin">Brahmin</option>
              <option value="Nair">Nair</option>
              <option value="Ezhava">Ezhava</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
            </select>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="intercaste" />
            <label htmlFor="intercaste">Willing to marry from other communities also</label>
          </div>

          <div className="form-group">
            <label>Subcaste (Optional)</label>
            <select>
              <option value="Select">Select</option>
              <option value="Subcaste 1">Subcaste 1</option>
              <option value="Subcaste 2">Subcaste 2</option>
            </select>
          </div>

          {/* Continue Button */}
          <button onClick={handleContinue} className="continue-btn">Continue</button>
        </div>
      </div>
      
      {/* Footer */}
      <footer>Copyright © 2025. All rights reserved.</footer>
    </div>
  );
};

export default MatrimonyForm;
