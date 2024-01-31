import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/courses_list");
}
//connection to db
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

//when running
db.once("open", function () {
  console.log("Successfully connected to database");
});

export default db;
