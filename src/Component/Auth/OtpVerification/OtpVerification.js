import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./OtpVerification.css";
import { useLocation, useNavigate } from "react-router-dom";
import { OtpVerifyService, ResendOtpService } from "../Service/Service";
import Loading from "../../pages/Loading/Loading";
 

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async () => {
    if (otp.length === 4) {
      if (email) {
        try {
          setLoading(true); 
          const formData = { otp, email };
          const response = await OtpVerifyService(formData);
          if (response.status === 200 || response.status === 201) {
            setLoading(false); 
            console.log("User verified OTP successfully");
            navigate("/login");
          }
        } catch (error) {
          setLoading(false); 
          console.log("Error during OTP submission:", error);
        }
      } else {
        console.log("Email is required");
      }
    } else {
      alert("Please enter a 4-digit OTP.");
    }
  };

  const handleOtpReset = async () => {
    setOtp("");
    if (email) {
      try {
        setLoading(true); 
        const formData = { email };
        const response = await ResendOtpService(formData);
        if (response.status === 200 || response.status === 201) {
           setLoading(false); 
          console.log("Otp sent successfully");
        }
      } catch (error) {
         setLoading(false); 
        console.log("Error during OTP reset:", error);
      }
    } else {
      console.log("Email is required");
    }
  };

  return (
    <div className="otp-verification-container-main">
    {loading ? <Loading/> :   <div className="otp-verification-container">
        <h2>OTP Verification</h2>
        {email && (
          <p>
            Please enter the verification code sent to your Email:{" "}
            <span className="email-input">{email}</span>
          </p>
        )}
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} className="otp-input" />}
          inputStyle={{
            width: "50px",
            height: "50px",
            margin: "0 5px",
            fontSize: "18px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            textAlign: "center",
          }}
          focusStyle={{
            border: "2px solid #4CAF50",
            outline: "none",
          }}
        />
        <p className="reset-otp" onClick={handleOtpReset}>
          Don`t get the Otp ?<span> Reset OTP </span>
        </p>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit OTP
        </button>
      </div>}
    </div>
  );
};

export default OtpVerification;
