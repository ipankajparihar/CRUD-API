import express from "express";
import { addCourseController } from "../controllers/addCourseController";

const router = express.Router();

router.post("/courseOffering", addCourseController);

export default router;
