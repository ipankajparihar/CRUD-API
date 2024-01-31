import express from "express";
import router from "./src/routes/index";
import path from "path";
import bodyParser from "body-parser";
import db from "./src/config/mongoose";
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// app.use(express.json());
// app.use(express.urlencoded());

// app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("assets"));

//use routes
app.use("/", router);

app.listen(port, () => {
  console.log(`server is running at Port ${port}`);
});

db.once("open", function () {
  console.log("Successfully connected to database");
});
