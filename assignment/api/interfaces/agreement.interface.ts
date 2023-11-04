import { Document, Types } from "mongoose";

export interface IAgreement extends Document {
  email: string;
  acceptance: boolean;
}
