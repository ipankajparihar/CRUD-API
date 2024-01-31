"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var homeController_1 = require("../controllers/homeController");
var addCourse_1 = __importDefault(require("./addCourse"));
var registerCourse_1 = __importDefault(require("./registerCourse"));
var allot_1 = __importDefault(require("./allot"));
var cancleRegistration_1 = __importDefault(require("./cancleRegistration"));
var router = express_1.default.Router();
//here home is name of ejs file in views folder
router.get("/", homeController_1.home);
router.use("/add", addCourse_1.default);
router.use("/add", registerCourse_1.default);
router.use("/allot", allot_1.default);
router.use("/cancle", cancleRegistration_1.default);
exports.default = router;
