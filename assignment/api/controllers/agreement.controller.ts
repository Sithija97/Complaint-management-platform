import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Agreement } from "../models/agreement.model.js";
import nodemailer from "nodemailer";

const agreementConfirmation = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, acceptance } = req.body;

    if (!email || acceptance === "") {
      res.status(400);
      throw new Error(`Please fill in all required fields`);
    }

    const userExists = await Agreement.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User has already submitted this Agreement");
    }

    const agreement = await Agreement.create({
      email,
      acceptance,
    });

    if (agreement) {
      res.status(201).json({ message: "Agreement submission successful!" });
    } else {
      res.status(400);
      throw new Error(`Invalid data`);
    }
  }
);

export { agreementConfirmation };
