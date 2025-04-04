import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/MobileVerification.css";
import { useParams } from "react-router-dom";

// Base URL correction
axios.defaults.baseURL = "http://localhost:5000"; // Removed "/api" from base URL





const generateCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 6 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
};

const MobileVerification = () => {
  const { userId } = useParams();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [step, setStep] = useState(1);
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [uniqueID, setUniqueID] = useState("");
  const [attempts, setAttempts] = useState(3);

  useEffect(() => {
    if (userId) {
      axios
        .get(`/api/users/${userId}`)
        
        .then((res) => {
          setPhone(res.data.phone);
          setEmail(res.data.email);
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, [userId]);

  // Send Mobile OTP
  const sendOtp = async () => {
    try {
      await axios.post("/api/send-otp", { phone });
      alert("OTP resent successfully");
      setOtp("");

      alert("OTP sent successfully!");
    } catch (error) {
      console.error("Error sending OTP:", error.response?.data || error.message);
      alert("Failed to send OTP. Please try again.");
    }
  };

  // Verify Mobile OTP
  const verifyOtp = async () => {
    if (otp.length !== 6) {
      alert("OTP must be 6 digits.");
      return;
    }

    setAttempts((prevAttempts) => {
      const newAttempts = prevAttempts - 1;
      if (newAttempts <= 0) {
        alert("Too many failed attempts. Please request a new OTP.");
        sendOtp(); // Resend OTP if attempts exhausted
        return 3; // Reset attempts
      }
      return newAttempts;
    });

    try {
      const res = await axios.post("/api/verify", { phone, otp });
  
   
      setUniqueID(res.data.uniqueId); 
  
      alert(res.data.message);
      setStep(2); 
    } catch (error) {
      console.error(error);
      alert(`Invalid OTP. ${attempts - 1 <= 0 ? 0 : attempts - 1} attempts remaining.`);

  
    }
  };

  // Send Email OTP
  const sendEmailOtp = async () => {
    try {
      await axios.post("/api/send-email-otp", { email });
      alert("Email OTP sent successfully!");
    } catch (error) {
      console.error("Error sending Email OTP:", error.response?.data || error.message);
      alert("Failed to send Email OTP. Please try again.");
    }
  };

  // Verify Email OTP
  const verifyEmailOtp = async () => {
    if (emailOtp.length !== 6) {
      alert("OTP must be 6 digits.");
      return;
    }

    try {
      const res = await axios.post("/api/verify-email-otp", { email, otp: emailOtp });
      alert(res.data.message);
      setStep(3); // Move to Captcha Verification
    } catch (error) {
      console.error("Error verifying Email OTP:", error.response?.data || error.message);
      alert("Invalid Email OTP. Please try again.");
    }
  };

  const handleCaptchaVerify = async () => {
    if (captchaInput !== captcha) {
      alert("Incorrect Captcha. Try again.");
      setCaptchaInput("");
      return;
    }
  
    try {
      const res = await axios.get(`/api/users/${userId}`); // Fetch from DB
  
      setUniqueID(res.data.uniqueId);
      setStep(4); // Move to final step
    } catch (error) {
      console.error("Error fetching uniqueId:", error.message);
      alert("Something went wrong. Please try again.");
    }
  };
  


  return (
    <div className="mobile-verification-container">
      <header className="mobile-verification-header">Kerala Matrimony Registration</header>

      <div className="mobile-verification-box">
        {step === 1 && (
          <>
            <h2>Verify Your Mobile Number</h2>
            <p>OTP will be sent to: {phone || "Your Registered Number"}</p>
            <input
              type="text"
              className="mobile-verification-input"
              placeholder="Enter OTP"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="mobile-verification-btn" onClick={verifyOtp}>
              Verify OTP
            </button>
            <p className="resend-code" onClick={sendOtp}>
              Didn’t receive the code? <span>Resend</span>
            </p>
            <p className="alternate-methods">
              Or verify using: <span onClick={() => setStep(2)}>Email</span>
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Verify Your Email</h2>
            <p>OTP will be sent to: {email || "Your Registered Email"}</p>
            <input
              type="text"
              className="mobile-verification-input"
              placeholder="Enter Email OTP"
              maxLength={6}
              value={emailOtp}
              onChange={(e) => setEmailOtp(e.target.value)}
            />
            <button className="mobile-verification-btn" onClick={verifyEmailOtp}>
              Verify Email
            </button>
            <p className="resend-code" onClick={sendEmailOtp}>
              Didn’t receive the code? <span>Resend</span>
            </p>
            <p className="alternate-methods">
              Or verify using: <span onClick={() => setStep(1)}>Mobile OTP</span>
            </p>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Captcha Verification</h2>
            <p>Enter the text shown below:</p>
            <div className="mobile-verification-captcha-box">
              <span className="mobile-verification-captcha-text">{captcha}</span>
            </div>
            <input
              type="text"
              className="mobile-verification-input"
              placeholder="Enter Captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />
            <button className="mobile-verification-btn" onClick={handleCaptchaVerify}>
              Verify Captcha
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h2>Registration Successful!</h2>
            <p>Your unique ID: <strong>{!uniqueID ? "Loading your ID..." : uniqueID}</strong></p>

            <p>Welcome to Kerala Matrimony!</p>
          </>
        )}
      </div>

      <footer className="mobile-verification-footer">© 2025 Kerala Matrimony. All rights reserved.</footer>
    </div>
  );
};

export default MobileVerification;
