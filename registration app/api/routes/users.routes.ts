import express from "express";
import {
  getAttendanceCountsByDepartment,
  getRegisteredCountsByDepartment,
  getRegisteredUsers,
  markAttendance,
  registerUser,
} from "../controllers/registration.controller.js";
const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.get("/", getRegisteredUsers);
userRouter.get("/count", getAttendanceCountsByDepartment);
userRouter.get("/registeredCount", getRegisteredCountsByDepartment);
userRouter.patch("/", markAttendance);

export { userRouter };
