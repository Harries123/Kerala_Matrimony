const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


require("dotenv").config();


const app = express();

app.use(cors({
  origin: "http://localhost:3000", // React frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));



// Middleware
app.use(express.json());  // Parses JSON requests
app.use(cors());          // Enables communication between frontend and backend

// Routes
const router = require("./routes/userRoutes");
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);


app.use(express.json());
app.use("/api", userRoutes); // This mounts /send-otp as /api/send-otp

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
