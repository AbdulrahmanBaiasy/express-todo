const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const tasksRoute = require("./routes/taskRoutes");

//MiddleWare
app.use(express.json());

//Db Connection
mongoose.connect("mongodb://admin:admin@localhost:27017/todo?authSource=admin");

const db = mongoose.connection;
db.on("error", () => {
  console.log("Connection Error");
});

db.once("open", () => {
  console.log("connected to db");
});



app.use(tasksRoute)


app.listen(port, () => {
  console.log(`application running on port ${port}`);
});
