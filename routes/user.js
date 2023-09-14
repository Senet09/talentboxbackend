const express = require("express");
const { AddUser, login } = require("../controller/user");
const { getBlogs, getCourses } = require("../controller/course");
const routes = express.Router();

// routes.post("/createuser",AddUser);
routes.post("/login",login);
routes.get("/courses",getCourses);
routes.post("/adduser",AddUser);
module.exports = routes;