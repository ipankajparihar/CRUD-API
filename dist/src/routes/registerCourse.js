"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var registorController_1 = require("../controllers/registorController");
var router = express_1.default.Router();
router.use("/register/:course_id", registorController_1.registerController);
exports.default = router;
