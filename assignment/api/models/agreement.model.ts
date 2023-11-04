import mongoose, { Schema, model } from "mongoose";
import { IAgreement } from "../interfaces/agreement.interface.js";

const agreementSchema = new Schema<IAgreement>(
  {
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid emaial",
      ],
    },
    acceptance: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Agreement = mongoose.model("Agreement", agreementSchema);
export { Agreement };
