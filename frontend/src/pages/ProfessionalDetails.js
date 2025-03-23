import React, { useState } from "react";
import "../assets/ProfessionalDetails.css"; // Importing the CSS file

const ProfessionalDetails = () => {
  const [education, setEducation] = useState("Higher Secondary School / High School");
  const [employment, setEmployment] = useState("India");
  const [occupation, setOccupation] = useState("Not Working");
  const [citizenship, setCitizenship] = useState("India");
  const [customCitizenship, setCustomCitizenship] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [residentStatus, setResidentStatus] = useState("");
  const [progress, setProgress] = useState(80);

  const employmentOptions = ["Government/PSU", "Private", "Business", "Defence", "Self Employed", "Not working"];
  const residentOptions = ["Permanent Resident", "Work Permit", "Student Visa", "Temporary Visa"];

  const handleEmploymentClick = (option) => {
    setEmployment(option);
    setOccupation(option === "Not working" ? "Not Working" : "");
    updateProgress();
  };

  const preferredCountries = [
    "India",
    "USA",
    "Canada",
    "United Kingdom",
    "Australia",
    "United Arab Emirates",
    "Singapore",
    "New Zealand",
    "Germany",
    "Qatar",
    "Other",
  ];

  const handleCitizenshipChange = (e) => {
    const selectedValue = e.target.value;
    setCitizenship(selectedValue);
    setIsOtherSelected(selectedValue === "Other");
    if (selectedValue !== "Other") {
      setCustomCitizenship(""); // Reset custom citizenship if "Other" is deselected
    }
  };


  const handleResidentClick = (option) => {
    setResidentStatus(option);
    updateProgress();
  };

  const updateProgress = () => {
    let completed = 80;
    if (employment) completed += 5;
    if (residentStatus) completed += 5;
    setProgress(completed);
  };

  return (
    <div className="container1">
      <div className="progress-text">
        Great! You have completed <span className="progress-percentage">{progress}%</span>
      </div>

      <div className="card">
        {/* Left Banner Section */}
        <div className="banner">
          {/* Couple Icons */}
     
          
          {/* Text */}
          <p className="banner-text">A partner who is generous in every way</p>
        </div>

        {/* Right Form Section */}
        <div className="form-section">
          <h2 className="title">Professional details help us to find the best companion</h2>

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
            <input type="text" value={occupation}  onChange={(e) => setOccupation(e.target.value)} />
           
          </div>

          {/* Bride's Location */}
          <div className="form-group">
            <label>Bride's Current Location</label>
            <select>
    <option>Select</option>
    {[
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia",
      "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
      "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
      "Botswana", "Brazil", "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chile", "China",
      "Colombia", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
      "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia",
      "Fiji", "Finland", "France", "Germany", "Ghana", "Greece", "Guatemala", "Honduras",
      "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
      "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait",
      "Laos", "Latvia", "Lebanon", "Libya", "Lithuania", "Luxembourg", "Malaysia",
      "Maldives", "Malta", "Mexico", "Monaco", "Mongolia", "Morocco", "Nepal", "Netherlands",
      "New Zealand", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Panama",
      "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
      "Russia", "Saudi Arabia", "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa",
      "South Korea", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria",
      "Taiwan", "Tanzania", "Thailand", "Tunisia", "Turkey", "Uganda", "Ukraine",
      "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
      "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ].map((country) => (
      <option key={country} value={country}>{country}</option>
    ))}
  </select>
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

      {/* Show input field if "Other" is selected */}
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

          {/* Continue Button */}
          <button className="continue-button">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;
