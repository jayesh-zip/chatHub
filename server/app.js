import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/features.js";
import userRoute from "./routes/user.js";
import chatRoute from "./routes/chat.js";
import adminRoute from "./routes/admin.js";
import cookieParser from "cookie-parser";
import { createSingleChats } from "./seeders/chat.js";
import { errorMiddleware } from "./middlewares/error.js";

// Load environment variables from .env file
dotenv.config({
    path: "./.env",
});

// MongoDB URI and port from environment variables
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;
const envMode = process.env.NODE_ENV.trim() || "PRODUCTION";
const adminSecretKey = process.env.ADMIN_SECRET_KEY || "adsasdsdfsdfsdfd";


// Connect to MongoDB
connectDB(mongoURI);

// createSingleChats(10);

// Initialize Express app
const app = express();


// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Define routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/chat", chatRoute);
app.use("/api/v1/admin", adminRoute);


// Default route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port ${port} in ${envMode} Mode`);
  });
  

export { envMode, adminSecretKey };