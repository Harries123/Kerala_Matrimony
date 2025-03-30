import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Paper, Typography, Alert, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    phone: '',
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
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/profile');
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <Box className="login-container">
      <Paper elevation={3} className="p-4 login-box">
        <Typography variant="h4" fontWeight="bold" className="text-center mb-3">
          Matrimonial Login
        </Typography>

        {error && <Alert severity="error" className="mb-3">{error}</Alert>}

        <form className="login-form" onSubmit={handleSubmit}>
          {/* Username */}
          <TextField
  fullWidth
  label="Phone"
  name="phone"
  value={formData.phone}
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

          {/* Forgot Password Link */}
          <Typography variant="body2" className="text-end mt-1">
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
          </Typography>

          {/* Login Button */}
          <Button type="submit" variant="contained" color="primary" fullWidth className="mt-3">
            Login
          </Button>
        </form>

        {/* Register Link */}
        <Typography variant="body2" className="text-center mt-3">
          Don't have an account? <Link to="/register">Register here</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
