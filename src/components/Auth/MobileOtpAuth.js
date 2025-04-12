import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
// import animation1 from '../animation1.json';
import axios from 'axios';
import '../../styles/MobileOtpAuth.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const MobileOtpAuth = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputsRef = useRef([]);

  // ✅ New state for timer
  const [timeLeft, setTimeLeft] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isOtpSent) {
      setIsOtpSent(false);
    }
    return () => clearInterval(timer);
  }, [timeLeft, isOtpSent]);

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setMobile(value);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const sendOtp = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/auth/send-otp`,
        { mobile: mobile }
      );
      alert('OTP sent successfully!');
      setIsOtpSent(true);
      setTimeLeft(300); // 5 minutes = 300 seconds
    } catch (err) {
      alert('Failed to send OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const otpString = otp.join('');
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/auth/verify-otp`,
        {
          mobile: mobile,
          otp: otpString,
        }
      );
      alert('OTP verified successfully!');
      await login(response.data);
      localStorage.setItem('jwt', response.data.token);
      navigate('/');
      console.log('OTP: ', response);
    } catch (err) {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="otp-page">
      {/* <Lottie
        animationData={animation1}
        loop={true}
        className="lottie-background"
      /> */}

      <div className="otp-container">
        <h2 className="otp-heading">Continue with Mobile Number</h2>

        <label className="otp-label">What's your phone number?</label>
        <input
          type="text"
          value={mobile}
          onChange={handleMobileChange}
          //   maxLength={10}
          placeholder="Enter mobile number"
          className="otp-input input-field"
        />

        {/* ✅ Disable button while timer is running */}
        <button className="otp-button" onClick={sendOtp} disabled={isOtpSent}>
          Generate OTP
        </button>

        {/* ✅ Show Timer */}
        {isOtpSent && (
          <p style={{ color: 'white', marginTop: '10px' }}>
            OTP is valid for: {Math.floor(timeLeft / 60)}:
            {String(timeLeft % 60).padStart(2, '0')}
          </p>
        )}

        <label className="otp-label">Enter your OTP</label>
        <div className="otp-boxes">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="otp-box input-field"
            />
          ))}
        </div>

        <button className="verify-button" onClick={verifyOtp}>
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default MobileOtpAuth;
