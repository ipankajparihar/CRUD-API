"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var courseSchema = new mongoose_1.default.Schema({
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
            validator: function (value) {
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
            return "OFFERING-".concat(this.course_name, "-").concat(this.instructor_name);
        },
    },
    allocated: {
        type: Boolean,
        default: false,
    },
});
var Courses = mongoose_1.default.model("Courses", courseSchema);
exports.default = Courses;
