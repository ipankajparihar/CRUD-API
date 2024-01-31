import { Request, Response } from "express";
import Courses from "../model/courses";
import Registration from "../model/registration";

export const allocateController = async (req: Request, res: Response) => {
  let courseId = req.params.course_id;

  try {
    let course = await Courses.findOne({ course_id: courseId });
    if (!course) {
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
    let employeeArr = await Registration.find({ course_id: course._id });

    employeeArr.sort((a, b) =>
      a.course_registration_id.localeCompare(b.course_registration_id)
    );

    if (
      course.min_employees > employeeArr.length &&
      course.start_date > new Date()
    ) {
      res.status(200).send({
        message: "course has been cancelled due to low registration!",
        data: {
          failure: employeeArr.map((emp) => ({
            registration_id: emp.course_registration_id,
            email: emp.email,
            course_id: courseId,
            course_name: course.course_name,
            status: "REJECTED",
          })),
        },
      });
    } else {
      res.status(200).send({
        message: "course successfully allocated to registed users!",
        data: {
          success: employeeArr.map((emp) => ({
            registration_id: emp.course_registration_id,
            email: emp.email,
            course_id: courseId,
            course_name: course.course_name,
            status: "ACCEPTED",
          })),
        },
      });
      course.allocated = true;
      await course.save();
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
