import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/features.js";
import userRoute from "./routes/user.js";
import chatRoute from "./routes/chat.js";
import cookieParser from "cookie-parser";


// Load environment variables from .env file
dotenv.config({
    path: "./.env",
});

// MongoDB URI and port from environment variables
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB(mongoURI);


// Initialize Express app
const app = express();


// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Define routes
app.use("/user", userRoute);
app.use("/chat", chatRoute);

// Default route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
