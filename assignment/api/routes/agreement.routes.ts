import express from "express";
import { agreementConfirmation } from "../controllers/agreement.controller.js";

const agreementRouter = express.Router();

agreementRouter.post("/agreement-confirmation", agreementConfirmation);

export { agreementRouter };
