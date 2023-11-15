import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { User } from "../models/user.model.js";

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { userNumber, departmentName, departmentNumber } = req.body;

    if (!userNumber || !departmentName || !departmentNumber) {
      res.status(400);
      throw new Error(`Please fill in all required fields`);
    }

    // Check if the userNumber exists in the specified department
    const userExistsInDepartment = await User.findOne({
      userNumber,
      departmentNumber,
    });

    if (userExistsInDepartment) {
      res.status(400);
      throw new Error("User already exists in this department");
    }

    const user = await User.create({
      userNumber,
      departmentNumber,
      departmentName,
    });

    if (user) {
      const { _id, userNumber, departmentNumber, departmentName, attendance } =
        user;
      res.status(201).json({
        _id,
        userNumber,
        departmentNumber,
        departmentName,
        attendance,
      });
    } else {
      res.status(400);
      throw new Error(`Invalid user data`);
    }
  }
);

export const getRegisteredUsers = asyncHandler(
  async (re: Request, res: Response) => {
    const users = await User.find();
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(400);
      throw new Error(`Invalid user data`);
    }
  }
);

export const getAttendanceCountsByDepartment = asyncHandler(
  async (re: Request, res: Response) => {
    try {
      const departmentCounts = await User.aggregate([
        {
          $match: {
            attendance: true, // Filter users where attendance is true
          },
        },
        {
          $group: {
            _id: "$departmentName", // Grouping by departmentName
            count: { $sum: 1 }, // Counting the number of users in each department
          },
        },
      ]);

      res.status(200).json(departmentCounts);
    } catch (error) {
      console.error("Error retrieving user counts by department:", error);
      throw error;
    }
  }
);

export const markAttendance = asyncHandler(
  async (req: Request, res: Response) => {
    const { userNumber, departmentName, departmentNumber, attendance } =
      req.body;

    if (!userNumber || !departmentName || !departmentNumber || !attendance) {
      res.status(400);
      throw new Error(`Please fill in all required fields`);
    }

    // Check if the user exists in the specified department
    const user = await User.findOneAndUpdate(
      { userNumber, departmentNumber },
      { $set: { attendance } },
      { new: true }
    );

    if (user) {
      const { _id, userNumber, departmentNumber, departmentName, attendance } =
        user;
      res.status(200).json({
        _id,
        userNumber,
        departmentNumber,
        departmentName,
        attendance,
      });
    } else {
      res.status(404);
      throw new Error(`User not found in this department`);
    }
  }
);
