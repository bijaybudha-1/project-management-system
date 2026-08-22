import { Router } from "express";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userLoginValidator,
  userRegisterValidator,
} from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Unsecure Route
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, loginUser);

// Secure Route
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").get(verifyJWT, getCurrentUser);

export default router;
