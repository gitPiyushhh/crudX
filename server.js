const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = "mongodb+srv://piyush_dev:Password%40123@crudx.ss6ns.mongodb.net/?retryWrites=true&w=majority&appName=CrudX";

console.log(DB);

mongoose
  .connect(DB)
  .then(() => console.log("Successfully connected to DB"));

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`App running on port - ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION: 💥", "Shutting down...");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
