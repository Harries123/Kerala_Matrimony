import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Paper, Typography, Alert, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/login.css';

const Login = ({ setShowLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/admin/login', formData);
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        setShowLogin(false); // Close popup on successful login
        navigate('/admindashboard');
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <Box className="login-container">
        <Paper elevation={3} className="p-4 login-box">
          {/* Title */}
          <div className="login-title">
            <Typography variant="h5" fontWeight="bold">Admin Login</Typography>
            <img onClick={() => setShowLogin(false)} src="/close-icon.png" alt="Close" />
          </div>

          {/* Error Message */}
          {error && <Alert severity="error" className="mb-3">{error}</Alert>}

          <form className="login-form" onSubmit={handleSubmit}>
            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              margin="normal"
            />

            {/* Password */}
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              margin="normal"
            />

            {/* Terms & Conditions */}
            <div className="login-condition">
              <input type="checkbox" required />
              <Typography variant="body2">By continuing, I agree to the terms of use & privacy policy</Typography>
            </div>

            {/* Login Button */}
            <Button type="submit" variant="contained" fullWidth className="loginbut">Login</Button>
          </form>

          {/* Forgot Password */}
          <Typography variant="body2" className="text-end mt-2">
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default Login;
