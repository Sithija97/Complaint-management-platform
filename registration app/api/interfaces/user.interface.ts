import { Document, Types } from "mongoose";

export interface IUser extends Document {
  userNumber: number;
  departmentNumber: number;
  departmentName: string;
  attendance: boolean;
}
