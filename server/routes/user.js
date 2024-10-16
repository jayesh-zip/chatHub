import express from "express";
import {acceptFriendRequest, getMyFriends, getMyNotifications, getMyProfile, login, logout, newUser, searchUser, sendFriendRequest} from "../controllers/user.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { acceptRequestValidator, loginValidator, registerValidator, sendRequestValidator, validateHandler } from "../lib/validators.js";

const app = express.Router();

app.post("/new", singleAvatar,  registerValidator(), validateHandler, newUser);

app.get("/login",loginValidator(), validateHandler, login);


// After here user must be logged in to access the routes

app.use(isAuthenticated);

app.get("/me", getMyProfile);

app.get("/search", searchUser);

app.get("/logout", logout);

app.put("/sendrequest", sendRequestValidator(), validateHandler, sendFriendRequest );

app.put("/acceptrequest",acceptRequestValidator(),validateHandler,acceptFriendRequest);

app.get("/notifications", getMyNotifications);

app.get("/friends", getMyFriends);

export default app;