import express from "express";

import { registerController } from "../controllers/registorController";

const router = express.Router();

router.use("/register/:course_id", registerController);

export default router;
