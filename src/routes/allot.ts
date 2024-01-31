import express from "express";
import { allocateController } from "../controllers/allotController";

const router = express.Router();

router.post("/:course_id", allocateController);

export default router;
