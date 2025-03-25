import React, { useState } from "react";
import { Paper, TextField, Button, Typography, MenuItem, Grid, Select, Box, Container, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import "../assets/register.css"; // Custom CSS file
import { countries } from "../assets/countries"; // Country list
import { useNavigate } from "react-router-dom";




function Register() {
 
const navigate = useNavigate();
const handleRegister = () => {
  navigate("/success")
}



  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    relation: "",
    email: "",
    password: "",
    country: "IN", // Default to India
  });

  const relations = ["Myself", "Daughter", "Son", "Sister", "Brother", "Relative", "Friend"];

  const selectedCountry = countries.find((c) => c.code === formData.country);
  const dialCode = selectedCountry ? selectedCountry.dial_code : "+91"; // Default to India

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="xs">
      {/* Registration Form */}
      <Paper elevation={3} className="profile-form">
        {/* Green Header */}
        <Box className="inside-header">
          <Typography variant="h6" className="header-title">
            Create a Matrimony Profile
          </Typography>
        </Box>

        {/* Subtitle */}
        <Typography variant="h6" className="form-title">
          Find your perfect match
        </Typography> 

        <Grid container spacing={2}>
          {/* Profile For Dropdown */}
          <Grid item xs={12}>
            <Select fullWidth displayEmpty name="relation" value={formData.relation} onChange={handleChange} className="input-field">
              <MenuItem value="" disabled>
                Matrimony profile for
              </MenuItem>
              {relations.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup
        row
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </FormControl>
  </Grid>


          {/* Name Field */}
          <Grid item xs={12}>
            <TextField fullWidth label="Enter Name" name="name" value={formData.name} onChange={handleChange} className="input-field" />
          </Grid>

          {/* Phone Number with Country Code */}
          <Grid item xs={12} className="phone-container">
            <Select name="country" value={formData.country} onChange={handleChange} className="country-select">
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.dial_code}
                </MenuItem>
              ))}
            </Select>
            <TextField fullWidth label="Enter Number" name="phone" value={formData.phone} onChange={handleChange} className="input-field phone-input" />
          </Grid>
        </Grid>

        {/* Register Button */}
        <Button  className="register-button">
          REGISTER FREE <ArrowForward className="arrow-icon" />
        </Button>

        {/* Terms & Conditions */}
        <Typography variant="caption" className="terms-text">
          *By clicking register free, I agree to the <a href="#">T&C</a> and <a href="#">Privacy Policy</a>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Register;
