import { Request, Response } from "express";
import Courses from "../model/courses";
import Registration from "../model/registration";

export const registerController = async (req: Request, res: Response) => {
  try {
    const requiredFields = ["name", "email"];
    const leftFields = requiredFields.filter((field) => !req.body[field]);
    if (leftFields.length > 0) {
      res.status(400).send({
        status: 400,
        message: "Unable to do registration",
        data: {
          failuer: {
            message: `Required fields are missing: ${leftFields.join(",")}`,
          },
        },
      });
      return;
    }
    const courseId = req.params.course_id;
    const courseName = await Courses.findOne({ course_id: courseId });

    if (!courseName) {
      return res.status(404).send({
        status: 404,
        message: `Course not found for ID: ${courseId}`,
        data: {
          failure: {
            message: "Invalid course ID",
          },
        },
      });
    }

    const registered = await Registration.find({ course_id: courseName._id });

    if (registered.length < courseName.max_employees) {
      const registration = await Registration.create({
        name: req.body.name,
        email: req.body.email,
        course_registration_id: `${req.body.name}-${courseName.course_name}`,
        course_id: courseName._id,
      });

      await registration.save();

      res.status(200).send({
        status: 200,
        message: `Successfully registered for ${req.body.course_id}`,
        data: {
          success: {
            "registration-id": `<${req.body.name}><${req.body.course_id}>`,
            status: "ACCEPTED",
          },
        },
      });
    } else {
      res.status(400).send({
        status: 400,
        message: "COURSE_FULL_ERROR",
        data: {
          failure: {
            message: "cant register for this course ,this is full",
          },
        },
      });
    }
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

export const registrationPage = async (req: Request, res: Response) => {
  let courses = await Courses.find({});
  res.render("register", {
    courses,
  });
};
