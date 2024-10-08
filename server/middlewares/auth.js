import jwt from "jsonwebtoken";
import { ErrorHandler } from "../utils/utility.js"
import { TryCatch } from "./error.js";
import { SESSION_TOKEN } from "../constants/config.js";


const isAuthenticated = TryCatch((req, res, next) => {
    const token = req.cookies[SESSION_TOKEN];
    if (!token)
      return next(new ErrorHandler("Please login to access this route", 401));
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = decodedData._id;
  
    next();
  });


export {isAuthenticated};