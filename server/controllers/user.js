import { User } from "../models/user.js";
import { TryCatch } from "../middlewares/error.js";
import { sendToken } from "../utils/features.js";


// Create a new user and save it to the database and save token in cookie
const newUser = TryCatch(async (req, res, next) => {
    const { name, username, password, bio } = req.body;
  
    // const file = req.file;
  
    // if (!file) return next(new ErrorHandler("Please Upload Avatar"));
  
    // const result = await uploadFilesToCloudinary([file]);
  
    const avatar = {
    //   public_id: result[0].public_id,
    //   url: result[0].url,
      public_id: "jmhv",
      url: "jhvjj",
    };
  
    const user = await User.create({
      name,
      bio,
      username,
      password,
      avatar,
    });
  
    sendToken(res, user, 201, "User created");
  });
  
  // Login user and save token in cookie
  const login = TryCatch(async (req, res, next) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username }).select("+password");
  
    if (!user) return next(new ErrorHandler("Invalid Username or Password", 404));
  
    const isMatch = await compare(password, user.password);
  
    if (!isMatch)
      return next(new ErrorHandler("Invalid Username or Password", 404));
  
    sendToken(res, user, 200, `Welcome Back, ${user.name}`);
  });

  export {newUser, login};