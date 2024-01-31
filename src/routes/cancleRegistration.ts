import express from "express";
import { cancleController } from "../controllers/cancleRegistrationController";

const router = express.Router();

router.post("/:registration_id", cancleController);

export default router;
