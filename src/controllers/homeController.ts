import { Request, Response } from "express";
import Courses from "../model/courses";

export const home = async (req: Request, res: Response) => {
  const courses = await Courses.find({});
  res.render("home", { title: "hey there", courses });
};
