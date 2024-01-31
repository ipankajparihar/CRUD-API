import express from "express";

import { home } from "../controllers/homeController";
import { registrationPage } from "../controllers/registorController";
import addCourseRouter from "./addCourse";
import registration from "./registerCourse";
import allotRouter from "./allot";
import cancleRouter from "./cancleRegistration";
const router = express.Router();

//here home is name of ejs file in views folder
router.get("/", home);
router.use("/add", addCourseRouter);
router.use("/add", registration);
router.use("/allot", allotRouter);
router.use("/cancle", cancleRouter);

export default router;
