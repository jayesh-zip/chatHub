import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const cookieOptions = {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true,
};  

const connectDB = (uri) => {
    mongoose
    .connect(uri)
      .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
      .catch((err) => {
        console.error("MongoDB connection error:", err);
      });
  };


  const sendToken = (res, user, code, message) => {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  
    return res.status(code).cookie("session-token", token, cookieOptions).json({
      success: true,
      user,
      message,
    });
  };

  const emitEvent = (req, event, users, data) => {
    console.log("Emithing Event", event);
  };


  const deletFilesFromCloudinary = async (public_ids) => {
    // Delete files from cloudinary
  };

  export {connectDB, sendToken, cookieOptions, emitEvent, deletFilesFromCloudinary};