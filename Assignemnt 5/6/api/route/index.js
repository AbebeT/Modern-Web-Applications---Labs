const express = require("express");
const router = express.Router();
const controller = require("../../controller/students.controller")
const courseController = require("../../controller/courses.controller")


router.route("/students")
        .get(controller.getAllStudents)
        .post(controller.addStudent)
        

router.route("/students/:studentId")
        .get(controller.getOneStudent)
        .delete(controller.deleteStudent)
        .put(controller.updateStudent)


router.route("/students/:studentId/courses")
        .get(courseController.courseGetAll);
        
router.route("/students/:studentId/courses/:courseId")
        .get(courseController.getStudentCourse);


module.exports = router;
        