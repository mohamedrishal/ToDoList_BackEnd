require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./Routes/router");
require("./DB/connection");
// create an express application
const toDoList = express();

toDoList.use(cors());
toDoList.use(express.json());
// toDoList.use(appMiddleware)
toDoList.use(router);
// toDoList.use("/uploads", express.static("./uploads"));
const PORT = 4000 || process.env.PORT;

toDoList.listen(PORT, () => {
  console.log(
    `ToDo List Server started at Port : ${PORT} and waiting for Client Requests !!!!`
  );
});

// http get request resolving to http://localhost:4000/
toDoList.get("/", (req, res) => {
  res.send(
    `<h1>ToDo List Server started waiting for Client Requests !!!!</h1>`
  );
});
