import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/MobileVerification.css";
import { useParams } from "react-router-dom";

const generateUniqueID = () =>
  Math.floor(1000000000 + Math.random() * 9000000000).toString();

const generateCaptcha = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
    if (!userId) {
      console.error("User ID is undefined");
      return;
    }

    axios
      .get(`/api/users/${userId}`)
      .then((response) => {
        console.log("Fetched user:", response.data);
        setPhone(response.data.phone);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, [userId]);

  const sendOtp = async () => {
    try {
      await axios.post("/api/send-otp", { phone });
      alert("OTP sent successfully!");
    } catch (error) {
      alert("Failed to send OTP. Please try again.");
    }
  };

  const sendEmailOtp = async () => {
    try {
      await axios.post("/api/send-email-otp", { email });
      alert("Email OTP sent successfully!");
    } catch (error) {
      alert("Failed to send Email OTP. Please try again.");
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 6) {
      alert("OTP must be 6 digits.");
      return;
    }

    try {
      const res = await axios.post("/api/verify-otp", { phone, otp });
      alert(res.data.message);
      setStep(2);
    } catch (error) {
      setAttempts((prevAttempts) => prevAttempts - 1);
      if (attempts <= 1) {
        alert("Too many failed attempts. Please request a new OTP.");
        setAttempts(3);
        sendOtp();
      } else {
        alert(`Invalid OTP. ${attempts - 1} attempts remaining.`);
      }
    }
  };

  const verifyEmailOtp = async () => {
    if (emailOtp.length !== 6) {
      alert("OTP must be 6 digits.");
      return;
    }

    try {
      const res = await axios.post("/api/verify-email-otp", { email, emailOtp });
      alert(res.data.message);
      setStep(3);
    } catch (error) {
      alert("Invalid Email OTP. Please try again.");
    }
  };

  const handleCaptchaVerify = () => {
    if (captchaInput !== captcha) {
      alert("Incorrect Captcha. Try again.");
      setCaptcha(generateCaptcha());
      return;
    }
    setUniqueID(generateUniqueID());
    setStep(4);
  };

  return (
    <div className="mobile-verification-container">
      <header className="mobile-verification-header">
        Kerala Matrimony Registration
      </header>

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
            <p>
              Your unique ID: <strong>{uniqueID}</strong>
            </p>
            <p>Welcome to Kerala Matrimony!</p>
          </>
        )}
      </div>

      <footer className="mobile-verification-footer">
        © 2025 Kerala Matrimony. All rights reserved.
      </footer>
    </div>
  );
};

export default MobileVerification;
