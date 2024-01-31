import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },
  instructor_name: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
    validate: {
      validator: function (value: Date) {
        return value > new Date();
      },
      message: "start date must be in future",
    },
  },
  min_employees: {
    type: Number,
    required: true,
  },
  max_employees: {
    type: Number,
    required: true,
  },
  course_id: {
    type: String,
    unique: true,
    default: function () {
      return `OFFERING-${this.course_name}-${this.instructor_name}`;
    },
  },
  allocated: {
    type: Boolean,
    default: false,
  },
});

const Courses = mongoose.model("Courses", courseSchema);

export default Courses;
