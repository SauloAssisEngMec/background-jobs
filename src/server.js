const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const UserController = require("./app/controllers/UserController");
const app = express();

app.use(express.json());

app.post("/users", UserController.store);

app.listen(8080, () => {
  console.log("server is running on localhost:8080");
});
