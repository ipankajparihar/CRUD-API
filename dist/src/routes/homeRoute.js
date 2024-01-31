"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var homeController_1 = require("../controllers/homeController");
var router = express_1.default.Router();
//here home is name of ejs file in views folder
router.get("/", homeController_1.home);
exports.default = router;
