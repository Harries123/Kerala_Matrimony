import React, { useState } from "react";
import "../assets/MobileVerification.css"; 

const generateUniqueID = () => {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
};

const generateCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const MobileVerification = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [uniqueID, setUniqueID] = useState("");
  const [attempts, setAttempts] = useState(3);

  const handleVerifyOTP = () => {
    if (attempts === 0) {
      alert("Too many failed attempts. Please try again later.");
      return;
    }
    if (otp.length === 6) {
      setStep(3);
    } else {
      setAttempts(attempts - 1);
      alert(`Invalid OTP. You have ${attempts - 1} attempts left.`);
    }
  };

  const handleVerifyEmail = () => {
    if (attempts === 0) {
      alert("Too many failed attempts. Please try again later.");
      return;
    }
    if (emailCode.length === 6) {
      setStep(3);
    } else {
      setAttempts(attempts - 1);
      alert(`Invalid Email Code. You have ${attempts - 1} attempts left.`);
    }
  };

  const handleCaptchaVerify = () => {
    if (captchaInput === captcha) {
      setUniqueID(generateUniqueID());
      setStep(4);
    } else {
      alert("Incorrect Captcha. Try again.");
      setCaptcha(generateCaptcha()); // Refresh Captcha
    }
  };

  return (
    <div className="mobile-verification-container">
      <header className="mobile-verification-header">Kerala Matrimony Registration</header>

      <div className="mobile-verification-box">
        {step === 1 && (
          <>
            <h2>Verify Your Mobile Number</h2>
            <p>
              You will receive a 6-digit confirmation code via SMS to{" "}
              <strong>9645230834</strong>
            </p>
            <input
              type="text"
              className="mobile-verification-input"
              placeholder="Enter Code"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="mobile-verification-btn" onClick={handleVerifyOTP}>
              Verify OTP
            </button>
            <p className="resend-code">
              Didn’t receive the code? <span>Resend Code</span>
            </p>
            <p className="alternate-methods">
              Or verify using:{" "}
              <span onClick={() => setStep(2)}>Email</span>
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Verify via Email</h2>
            <p>Enter the 6-digit code sent to your email.</p>
            <input
              type="text"
              className="mobile-verification-input"
              placeholder="Enter Code"
              maxLength={6}
              value={emailCode}
              onChange={(e) => setEmailCode(e.target.value)}
            />
            <button className="mobile-verification-btn" onClick={handleVerifyEmail}>
              Verify Email
            </button>
            <p className="alternate-methods">
              Or verify using:{" "}
              <span onClick={() => setStep(1)}>Mobile OTP</span>
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
            <p>Your unique ID: <strong>{uniqueID}</strong></p>
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
