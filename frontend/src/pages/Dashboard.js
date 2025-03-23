import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Typography, Box } from "@mui/material";
import Register from "./Register";
import Background from "../components/Background"; // Import Background component
import "../assets/dashboard.css";
import Header from "../components/Header";


function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [showLogin, setShowLogin] = useState(false); // State for Login Popup

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100vw", minHeight: "100vh" }}>
      {/* Background Component */}
      <Background />
      <Header/>
       
      {/* Matrimony Content (Positioned at the Top) */}
      
      {/* Main Content (Lifted Register Form) */}
      <Container
        sx={{
          position: "absolute",
          top: "200px", // Lifted register form higher
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 15, // Ensures it stays above the overlay
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Side - Matrimony Info */}
          <Grid item xs={15} md={6}>
            <Box className="matrimony-info">
              <Typography variant="h4" className="matrimony-title">
                The biggest and most trusted <br />
                matrimony service for Malayalees!
              </Typography>
              <Typography variant="h6" className="matrimony-subtitle">
                Now find matches based on your hobbies & interests.
              </Typography>
            </Box>
          </Grid>

          {/* Right Side - Registration Form */}
          <Grid item xs={12} md={6}>
            <Register />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;
