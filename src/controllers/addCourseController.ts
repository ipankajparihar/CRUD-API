import { Request, Response } from "express";
import Courses from "../model/courses";

export const addCourseController = async (req: Request, res: Response) => {
  try {
    const requiredFields = [
      "course_name",
      "instructor_name",
      "start_date",
      "min_employees",
      "max_employees",
    ];
    const leftFields = requiredFields.filter((field) => !req.body[field]);
    if (leftFields.length > 0) {
      res.status(400).send({
        status: 400,
        message: "Unable to add Course",
        data: {
          failuer: {
            message: `Required fields are missing: ${leftFields.join(",")}`,
          },
        },
      });
      return;
    }
    let course = await Courses.create({
      course_name: req.body.course_name,
      instructor_name: req.body.instructor_name,
      start_date: req.body.start_date,
      min_employees: req.body.min_employees,
      max_employees: req.body.max_employees,
      enrolled_now: 0,
    });

    await course.save();

    res.status(200).send({
      status: 200,
      message: "Course added successfully",
      data: {
        success: {
          "course-id": `OFFERING-${req.body.course_name}-${req.body.instructor_name}`,
        },
      },
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: "INTERNAL_SERVER_ERROR",
      data: {
        failuer: {
          message: err,
        },
      },
    });
  }
};
