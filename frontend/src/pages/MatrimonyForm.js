import React from "react";
import "../assets/MatrimonyForm.css";

const MatrimonyForm = () => {
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
          <span className="progress-text">Great! You have completed <strong>40%</strong></span>


          <h2 className="form-title">
            Religion details can help us find the right match
          </h2>

          {/* Form Fields */}
          <div className="form-group">
            <label>Caste</label>
            <select>
              <option>Select</option>
              <option>Brahmin</option>
              <option>Nair</option>
              <option>Ezhava</option>
              <option>Muslim</option>
              <option>Christian</option>
            </select>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="intercaste" />
            <label htmlFor="intercaste">Willing to marry from other communities also</label>
          </div>

          <div className="form-group">
            <label>Subcaste (Optional)</label>
            <select>
              <option>Select</option>
              <option>Subcaste 1</option>
              <option>Subcaste 2</option>
            </select>
          </div>

          {/* Continue Button */}
          <button className="continue-btn">Continue</button>
        </div>
      </div>
      
      {/* Footer */}
      <footer>Copyright © 2025. All rights reserved.</footer>
    </div>
  );
};

export default MatrimonyForm;
