"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./src/routes/index"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("./src/config/mongoose"));
var app = (0, express_1.default)();
var port = 5000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded());
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express_1.default.static("assets"));
//use routes
app.use("/", index_1.default);
app.listen(port, function () {
    console.log("server is running at Port ".concat(port));
});
mongoose_1.default.once("open", function () {
    console.log("Successfully connected to database");
});
