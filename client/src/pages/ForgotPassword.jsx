import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const { axios, navigate } = useAppContext();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] =
    useState("");

  const sendOtp = async () => {
    try {
      const { data } = await axios.post(
        "/api/user/send-reset-otp",
        { email }
      );

      if (data.success) {
        toast.success(data.message);
        setStep(2);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const verifyOtp = async () => {
    try {
      const { data } = await axios.post(
        "/api/user/verify-reset-otp",
        {
          email,
          otp,
        }
      );

      if (data.success) {
        toast.success(data.message);
        setStep(3);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const resetPassword = async () => {
    try {
      const { data } = await axios.post(
        "/api/user/reset-password",
        {
          email,
          otp,
          newPassword,
        }
      );

      if (data.success) {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-6">
          Forgot Password
        </h1>

        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border p-3 rounded-lg mb-4"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <button
              onClick={sendOtp}
              className="w-full bg-primary text-white py-3 rounded-lg"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full border p-3 rounded-lg mb-4"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value)
              }
            />

            <button
              onClick={verifyOtp}
              className="w-full bg-primary text-white py-3 rounded-lg"
            >
              Verify OTP
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <input
              type="password"
              placeholder="New Password"
              className="w-full border p-3 rounded-lg mb-4"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(
                  e.target.value
                )
              }
            />

            <button
              onClick={resetPassword}
              className="w-full bg-primary text-white py-3 rounded-lg"
            >
              Reset Password
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;