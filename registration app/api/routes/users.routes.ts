import express from "express";
import {
  getAttendanceCountsByDepartment,
  getRegisteredUsers,
  markAttendance,
  registerUser,
} from "../controllers/registration.controller.js";
const userRouter = express.Router();

userRouter.post("/", registerUser);
userRouter.get("/", getRegisteredUsers);
userRouter.get("/count", getAttendanceCountsByDepartment);
userRouter.patch("/", markAttendance);

export { userRouter };
