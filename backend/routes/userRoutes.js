const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

const twilio = require("twilio");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();


// Get user by ID
router.get("/users/:id", async (req, res) => {
  try {
      const user = await User.findById(req.params.id);
      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ error: "Error fetching user" });
  }
});



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


// Twilio setup
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Function to generate a 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Send OTP to phone
router.post("/send-otp", async (req, res) => {
    try {
        const { phone } = req.body;

        if (!phone) return res.status(400).json({ error: "Phone number is required" });

        const user = await User.findOne({ phone });
        if (!user) return res.status(404).json({ error: "User not found" });

        const otp = generateOTP();
        user.otp = otp;
        await user.save();

        // Send SMS via Twilio
        await twilioClient.messages.create({
            body: `Your verification code is: ${otp}`,
            from: process.env.TWILIO_PHONE,
            to: phone,
        });

        res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
        console.error("Error sending OTP:", error.message);
        res.status(500).json({ error: "Error sending OTP" });
    }
});


// Verification Status Route
router.post("/verify", async (req, res) => {
  try {
      const { phone, otp } = req.body;

      const user = await User.findOne({ phone });
      if (!user) return res.status(404).json({ error: "User not found" });

      if (user.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });

      user.isVerified = true;
      user.otp = null; // Clear OTP after verification
      await user.save();

      res.status(200).json({ message: "Phone verified successfully" });
  } catch (error) {
      res.status(500).json({ error: "Error verifying OTP" });
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
  },
});

router.post("/send-email-otp", async (req, res) => {
  try {
      const { email } = req.body;
      if (!email) return res.status(400).json({ error: "Email is required" });

      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ error: "User not found" });

      const emailOtp = generateOTP();
      user.emailOtp = emailOtp;
      await user.save();

      await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Email Verification OTP",
          text: `Your OTP is: ${emailOtp}`,
      });

      res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
      res.status(500).json({ error: "Error sending OTP" });
  }
});


router.post("/verify-email-otp", async (req, res) => {
  try {
      const { email, otp } = req.body;

      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ error: "User not found" });

      if (user.emailOtp !== otp) return res.status(400).json({ error: "Invalid OTP" });

      user.isVerified = true;
      user.emailOtp = null; // Clear OTP
      await user.save();

      res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
      res.status(500).json({ error: "Error verifying OTP" });
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
