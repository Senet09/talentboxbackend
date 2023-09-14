const express = require("express");
const { createCourse, getCourses, getCourseById } = require("../controller/course");
const { auth } = require("../middleware/auth");
const Routes = express.Router();

Routes.post("/createcourse",createCourse);
Routes.get("/courses",getCourses);
Routes.post("/course",getCourseById);
module.exports = Routes;