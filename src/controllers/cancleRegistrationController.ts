import { Request, Response } from "express";
import Courses from "../model/courses";
import Registration from "../model/registration";

export const cancleController = async (req: Request, res: Response) => {
  try {
    let registrationId: string = req.params.registration_id;

    let courseRegisterd = await Registration.findOne({
      course_registration_id: registrationId,
    });

    if (!courseRegisterd) {
      return res.status(404).send({
        status: 404,
        message: `Course not registered for ID: ${registrationId}`,
        data: {
          failure: {
            message: "Invalid registration ID",
          },
        },
      });
    }

    let course = await Courses.findOne({
      _id: courseRegisterd.course_id,
    });

    if (!course) {
      return res.status(404).send({
        status: 404,
        message: `Course not found for registration ID: ${registrationId}`,
        data: {
          failure: {
            message: "Invalid registration ID",
          },
        },
      });
    }

    if (course.allocated) {
      res.status(200).send({
        message: "cancle registration unsuccessful!",
        data: {
          success: {
            registration_id: registrationId,
            course_id: course.course_id,
            status: "CANCLE_REJECTED",
          },
        },
      });
    } else {
      res.status(200).send({
        message: "cancle registration unsuccessful!",
        data: {
          success: {
            registration_id: registrationId,
            course_id: course.course_id,
            status: "CANCLE_ACCEPTED",
          },
        },
      });

      await Registration.deleteOne({
        course_registration_id: registrationId,
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
