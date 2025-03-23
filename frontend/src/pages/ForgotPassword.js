import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Alert, Box } from '@mui/material';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/users/forgot-password', { email });
      setMessage(res.data.message);
      setError('');
    } catch (err) {
      setError('Error sending reset link. Try again.');
      setMessage('');
    }
  };

  return (
    <Box className="forgot-password-container">
      <Paper elevation={3} className="p-4 forgot-box">
        <Typography variant="h5" fontWeight="bold" className="text-center mb-3">
          Forgot Password?
        </Typography>

        {message && <Alert severity="success" className="mb-3">{message}</Alert>}
        {error && <Alert severity="error" className="mb-3">{error}</Alert>}

        <TextField
          fullWidth
          label="Enter your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
        />

        <Button variant="contained" color="primary" fullWidth className="mt-3" onClick={handleReset}>
          Send Reset Link
        </Button>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;
