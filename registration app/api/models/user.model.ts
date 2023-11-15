import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "../interfaces/index.js";

const userSchema = new Schema<IUser>(
  {
    userNumber: {
      type: Number,
      required: true,
    },
    departmentNumber: {
      type: Number,
      required: true,
    },
    departmentName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export { User };
