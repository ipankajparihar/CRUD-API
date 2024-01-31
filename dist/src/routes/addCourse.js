"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var addCourseController_1 = require("../controllers/addCourseController");
var router = express_1.default.Router();
router.post("/courseOffering", addCourseController_1.addCourseController);
exports.default = router;
