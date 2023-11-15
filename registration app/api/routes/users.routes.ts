import express from "express";
import {
  getCountsByDepartment,
  getRegisteredUsers,
  registerUser,
} from "../controllers/registration.controller.js";
const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.get("/", getRegisteredUsers);
userRouter.get("/count", getCountsByDepartment);

export { userRouter };
