const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());  // Parses JSON requests
app.use(cors());          // Enables communication between frontend and backend

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Connect to MongoDB
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));

//Success Page Route
app.get("/api/success",(req,res) => {
  res.json({message:"You are Registered Successfully!"});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
