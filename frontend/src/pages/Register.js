import React, { useState } from "react";
import {
  Paper, TextField, Button, Typography, MenuItem, Grid, Select, Box,
  Container, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../assets/register.css";
import { countries } from "../assets/countries";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
   
    relation: "",
    password: "",
    gender: "",
    country: "IN",
  });

  const relations = ["Myself", "Daughter", "Son", "Sister", "Brother", "Relative", "Friend"];
  const selectedCountry = countries.find((c) => c.code === formData.country);
  const dialCode = selectedCountry ? selectedCountry.dial_code : "+91";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    // Basic Validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.password ||
      !formData.gender ||
      !formData.relation
    ) {
      alert("Please fill all fields");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        formData // sending full form data
      );
  
      if (response.status === 201) {
        console.log("User Registered Successfully", response.data);
        localStorage.setItem("userId", response.data.userId);
        navigate("/success");
      }
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Registration failed. Please try again.");
    }
  };
  
  return (
    <Container maxWidth="xs">
      <Paper elevation={3} className="profile-form">
        <Box className="inside-header">
          <Typography variant="h6" className="header-title">Create a Matrimony Profile</Typography>
        </Box>

        <Typography variant="h6" className="form-title1">Find a Perfect Match</Typography>

        <Grid container spacing={2}>
          {/* Relation */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              label="Matrimony profile for"
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              className="input-field"
            >
              {relations.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Gender */}
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
          </Grid>

          {/* Name */}
          <Grid item xs={12}>
            <TextField fullWidth label="Enter Name" name="name" value={formData.name} onChange={handleChange} className="input-field" />
          </Grid>

          {/* Phone */}
          <Grid item xs={12} className="phone-container">
            <Select name="country" value={formData.country} onChange={handleChange} className="country-select">
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>{country.dial_code}</MenuItem>
              ))}
            </Select>
            <TextField
              fullWidth
              label="Enter Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field phone-input"
            />
          </Grid>

          {/* Password */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Enter Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
          </Grid>
        </Grid>

        {/* Register Button */}
        <Button onClick={handleRegister} className="register-button">
          REGISTER FREE <ArrowForward className="arrow-icon" />
        </Button>

        {/* T&C */}
        <Typography variant="caption" className="terms-text">
          *By clicking register free, I agree to the <a href="#">T&C</a> and <a href="#">Privacy Policy</a>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Register;
