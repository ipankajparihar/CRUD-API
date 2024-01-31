"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cancleRegistrationController_1 = require("../controllers/cancleRegistrationController");
var router = express_1.default.Router();
router.post("/:registration_id", cancleRegistrationController_1.cancleController);
exports.default = router;
