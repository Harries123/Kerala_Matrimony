import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "../assets/registrationSuccess.css"; 
import logo from "../assets/images/logo.jpeg";


const RegistrationSuccess = () => {
  const [dob, setDob] = useState(null);
  const [religion, setReligion] = useState("");
  const [motherTongue, setMotherTongue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const religions = ["Hindu", "Muslim", "Christian", "Sikh", "Buddhist", "Jain", "Parsi", "Jewish", "Other"];
  const motherTongues = ["English", "Hindi", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu", "Gujarati", "Malayalam"];

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    setPasswordError(passwordRegex.test(value) ? "" : "Password must be at least 6 characters, including numbers and letters");
  };

  return (
    <Box className="registration-container">
      <Typography variant="h6" className="progress-indicator">
        Great! You have completed 20%
      </Typography>

      <Box className="registration-header">
        
      <img src={logo} alt="Kerala Matrimony" className="brand-logo" />

      </Box>

      <Grid container spacing={2} className="registration-content">
        <Grid item xs={12} md={5} className="banner-section">
          <Box className="banner-content">
            <img src="/assets/wedding-icon.png" alt="Wedding" className="banner-icon" />
            <Typography variant="h6" className="banner-text">
              Your search for a caring <br />
              companion begins here
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={7} className="form-container">
          <Typography variant="h5" className="form-heading">
            Tell us about your basic details
          </Typography>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth"
              value={dob}
              onChange={(newValue) => setDob(newValue)}
              renderInput={(params) => <TextField fullWidth {...params} className="form-field" />}
            />
          </LocalizationProvider>

          <Select fullWidth value={religion} onChange={(e) => setReligion(e.target.value)} displayEmpty className="form-field">
            <MenuItem value="" disabled>Select Religion</MenuItem>
            {religions.map((rel, index) => (
              <MenuItem key={index} value={rel}>{rel}</MenuItem>
            ))}
          </Select>

          <Select fullWidth value={motherTongue} onChange={(e) => setMotherTongue(e.target.value)} displayEmpty className="form-field">
            <MenuItem value="" disabled>Select Mother Tongue</MenuItem>
            {motherTongues.map((lang, index) => (
              <MenuItem key={index} value={lang}>{lang}</MenuItem>
            ))}
          </Select>

          <TextField fullWidth label="Email ID" value={email} onChange={(e) => setEmail(e.target.value)} className="form-field" />
          <TextField fullWidth label="Password" type="password" value={password} onChange={handlePasswordChange} className="form-field" error={!!passwordError} helperText={passwordError} />

          <Button variant="contained" className="submit-button">
            Continue
          </Button>

          <Typography variant="caption" className="help-text">
            Your date of birth helps us find the perfect match
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="body2" className="footer-note">
        Copyright © 2025. All rights reserved.
      </Typography>
    </Box>
  );
};

export default RegistrationSuccess;
