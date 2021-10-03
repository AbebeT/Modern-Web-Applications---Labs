const mongoose = require("mongoose");
const Students = mongoose.model("Student");

courseGetAll = function (req, res) {
  console.log("Get request to all course of a student received!!");
  var studentId = req.params.studentId;
  if (!mongoose.isValidObjectId(studentId)) {
    console.log("Invalid Student Id");
    res.status(400).json({ message: "Invalid Student id" });
    return;
  }

  Students.findById(studentId)
    .select("courses")
    .exec(function (err, doc) {
      if (err) {
        console.log("error finding Student");
        res.status(500).json(err);
      } else {
        if (!game) {
          console.log("Student Id not found");
          res
            .status(404)
            .json({ message: "Student with given studentId not found" });
        } else {
          res.status(200).json(doc.courses);
        }
      }
    });
};
getStudentCourse = function (req, res) {
  console.log("Get request to signle course of a student recieved");

  var studentId = req.params.studentId;

  if (!mongoose.isValidObjectId(studentId)) {
    console.log("Invalid Student Id");
    res.status(400).json({ message: "Invalid Student id" });
    return;
  }

  if (!req.params.courseId) {
    console.log("Invalid courseCode Id");
    res.status(400).json({ message: "Invalid cousreCode id" });
    return;
  }
  var code = parseInt(req.params.courseId);
  console.log("GET courseCode " + code + " for studentId " + studentId);

  Students.findById(studentId)
    .select("courses")
    .exec(function (err, student) {
      var course = student.courses.find((c) => c.code === code);
      // console.log("code ", code);
      console.log("student ", student.courses);
      res.status(200).json(student.courses.find((c) => c.code === code));
    });
};

module.exports = {
  courseGetAll: courseGetAll,
  getStudentCourse: getStudentCourse,
};
