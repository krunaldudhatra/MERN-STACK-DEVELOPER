import express from "express";
import OtpController from "../Controller/otp.controller.js";
import jwtAuth from "../../../middlewares/jwt.middleware.js";

const otpRouter = express.Router();

const otpController = new OtpController();

// All the paths to controller methods.
// Send an OTP for password reset.
otpRouter.post("/send", (req, res, next) => {
  otpController.sendOtp(req, res, next);
});

// Verify an OTP.
otpRouter.post("/verify", (req, res, next) => {
  otpController.verifyOtp(req, res, next);
});

// Reset the user's password.
otpRouter.put("/reset-password", (req, res, next) => {
  otpController.resetPassword(req, res, next);
});

// Exporting Router
export default otpRouter;
