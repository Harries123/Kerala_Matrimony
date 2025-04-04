const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

const twilio = require("twilio");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");


dotenv.config();





router.post("/register", async (req, res) => {
  try {
    console.log("Register API hit");

    const { name, phone, relation, gender, country } = req.body;

    if (!name || !phone ||  !gender || !relation) {
      return res.status(400).json({ error: "All fields are required" }); // ✅ Only one return here
    }

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" }); // ✅ Only one return here
    }

    const newUser = new User({ name, phone, relation,  gender, country });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", userId: newUser._id });
  } catch (error) {
    console.error("Registration Error:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: "Server error" }); // ✅ Check if headers are already sent
    }
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



  
// professional
router.post("/professional-details", async (req, res) => {

    try {
      const { userId, education, employment, occupation, citizenship, residentStatus } = req.body;
  
      if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
      }
  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Update professional details
      user.professionalDetails = { education, employment, occupation, citizenship, residentStatus };
      await user.save();
  
      res.status(200).json({ success: true, message: "Professional details updated successfully" });
    } catch (error) {
      console.error("Error updating professional details:", error);
      res.status(500).json({ error: "Server error" });
    }
  });
  



// Twilio Setup
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Generate OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();



// Send OTP to phone
router.post("/api/send-otp", async (req, res) => {
  try {
      const { phone } = req.body;
      console.log("Received OTP request for:", phone); // Debugging

      if (!phone) return res.status(400).json({ error: "Phone number is required" });

      const user = await User.findOne({ phone });
      if (!user) return res.status(404).json({ error: "User not found" });

      const otp = generateOTP();
      user.otp = otp;
      
      await user.save();

      console.log("Generated OTP:", otp); // Debugging

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

const generateUniqueId = () => {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `KER${randomNum}`;
};

// Verification Status Route
router.post("/verify", async (req, res) => {
  try {
    const { phone, otp } = req.body;

    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (user.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });

    user.isVerified = true;
    user.otp = null; // Clear OTP after verification

    // ✅ Set uniqueId only if it hasn't been set before
    if (!user.uniqueId) {
      user.uniqueId = generateUniqueId();
    }

    await user.save();

    // ✅ Return uniqueId in response so frontend can store it
    res.status(200).json({ 
      message: "Phone verified successfully", 
      uniqueId: user.uniqueId 
    });

  } catch (error) {
    console.error("OTP verification error:", error);
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


router.post("/api/verify-email-otp", async (req, res) => {
  
  

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




// login Route
router.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and Password are required" });
    }

    // Find admin user
    
    // const admin = await Admin.findOne({ email }); 
    // if (!admin) {
      // return res.status(404).json({ error: "Admin not found" });
    // }

    // Check password
   // const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ adminId: admin._id, role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      success: true,
      message: "Admin login successful",
      adminId: admin._id,
      token,
    });
  } catch (error) {
    console.error("Admin Login Error:", error.message);
    res.status(500).json({ error: "Something went wrong during admin login" });
  }
});

  




router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      uniqueId: user.uniqueId,
      isVerified: user.isVerified,
      isPremium: user.isPremium,
      name: user.name,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

