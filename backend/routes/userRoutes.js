const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
    try {
      const { name, phone, password, relation, gender, country } = req.body;
      if (!name || !phone || !password || !relation || !gender || !country) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        phone,
        password: hashedPassword,
        relation,
        gender,
        country,
      });
  
      await newUser.save();
      res.status(201).json({ message: "User registered successfully", userId: newUser._id });
    } catch (error) {
      console.error("Registration Error:", error.message);
      res.status(500).json({ error: "Error registering user" });
    }
  });
  


router.put("/update/:id", async (req, res) => {
    try {
      const { dob, religion, motherTongue, email, password } = req.body;
  
      let updateData = { dob, religion, motherTongue, email };
  
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        updateData.password = hashedPassword;
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        updateData,
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      console.error("Update error:", error.message);
      res.status(500).json({ message: "Something went wrong" });
    }
  });
  

// Matrimony Details Route
router.post("/matrimony-details", async (req, res) => {
    try {
      const { userId, maritalStatus, familyStatus, familyType, familyValues, disability } = req.body;
      if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
      }
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      user.maritalStatus = maritalStatus;
      user.familyStatus = familyStatus;
      user.familyType = familyType;
      user.familyValues = familyValues;
      user.disability = disability;
  
      await user.save();
      res.status(200).json({ message: "Matrimony details updated successfully" });
    } catch (error) {
      console.error("Matrimony Update Error:", error.message);
      res.status(500).json({ error: "Failed to update details" });
    }
  });


  router.post("/professional-details", async (req, res) => {
    try {
      const { userId, occupation, income, education } = req.body;

        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        user.occupation = occupation;
        user.income = income;
        user.education = education;

        await user.save();
        res.status(200).json({ message: "Professional details updated successfully" });
    } catch (error) {
        console.error("Professional Details Error:", error.message);
        res.status(500).json({ error: "Failed to update details" });
    }
});


// Verification Status Route
router.get("/verify/:userId", async (req, res) => {
  try {
      const user = await User.findById(req.params.userId);
      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }

      // Assuming `isVerified` is a field in your User model
      res.status(200).json({ isVerified: user.isVerified });
  } catch (error) {
      console.error("Verification error:", error.message);
      res.status(500).json({ error: "Error fetching verification status" });
  }
});




  // Login Route
router.post("/login", async (req, res) => {
    try {
      const { phone, password } = req.body;
  
      if (!phone || !password) {
        return res.status(400).json({ error: "Phone and Password are required" });
      }
  
      const user = await User.findOne({ phone });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }
  
      // If you want, generate a token here (Optional)
      // For now, we'll just send user info
      res.status(200).json({
        message: "Login successful",
        userId: user._id,
        name: user.name,
        phone: user.phone,
      });
    } catch (error) {
      console.error("Login error:", error.message);
      res.status(500).json({ error: "Something went wrong during login" });
    }
  });
  


// Get all users (optional)
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
});

module.exports = router;
