const mongoose = require("mongoose");
const Students = mongoose.model("Student");


getAllStudents = function(req, res){
    console.log("Get all students");

    let count = 3 ;
    let offset = 0;

    if(req.query && req.query.count){
        count = parseInt(req.query.count);
    }

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset);
    }

    if(isNaN(count)){

        res.status(400).send({"message" : "invalid input for count"});
    }

    if(isNaN(offset)){
        res.status(400).send({"message" : "invalid input for offset"});
    }
    Students.find().skip(offset).limit(count).exec(function(err, students){
        if(err){
            console.log("Error finding students");
        }
        else {
            console.log("Students found");
            res.status(200).json(students);
        }
    })
}

getOneStudent = function(req, res){
    const studentId = req.params.studentId;

    if(!mongoose.isValidObjectId(studentId)){
        console.log("Invalid Student Id");
        res.status(400).json({"message": "Invalid Student id"});
        return;
    }

    Students.findById(studentId).exec(function(err, student){
        if(err){
            console.log("error finding student");
            res.status(500).json(err);
        }
        else{
            if(!student){
                console.log("Student Id not found");
                res.status(404).json({"message": "Student with given studentId not found"});
            }
            console.log("Student Found");
            res.status(200).json(student);
        }
    });


};

deleteStudent = function(req, res){
    console.log("Delete request received");
    const studentId = req.params.studentId;
  
    if(!mongoose.isValidObjectId(studentId)){
      console.log("invalid student id");
      res.send(404).send({"message": "student Id not found"});
    }
  
    Students.findByIdAndDelete(studentId).exec(function(err, student){
      if(err){
        console.log("error deleting the student");
        res.status(500).json(err);
      }
      else{
        console.log("student deleted");
        res.status(201).json({"message": "student deleted"});
      }
  
    });
  
  };


addStudent = function(req, res){
    console.log("Post request received");
    console.log("rq.body ", req.body);

    const newStudent = {
        name : req.body.name,
        GPA : parseFloat(req.body.GPA), 
        courses : req.body.courses
    }

    Students.create(newStudent, function(err, result){
        if(err){
            console.log("error creating student");
            res.status(500).json(err);
        }
        else{
            console.log("student created");
            res.status(201).json(result);
                }
    })
}

updateStudent = function(req, res){
    console.log("update request recieved");
    console.log("req.params._id ", req.params.studentId);

    // res.status(201).json({"message": "Update request received"});

    const studentId = {_id : req.params.studentId}

    const studentUpdate = {
        name : req.body.name,
        GPA : parseFloat(req.body.GPA),
        //courses : req.body.courses
    }

    const returnUpdated = {
        new: true
      }

    Students.findOneAndUpdate(studentId
    , studentUpdate, returnUpdated,  function(error, result){
        if(error){
            console.log("unable to update student")
        }
        else{
            console.log("student updated");
            console.log(result);
        }
    });

}



module.exports = {
    getAllStudents : getAllStudents,
    getOneStudent : getOneStudent,
    deleteStudent : deleteStudent,
    addStudent : addStudent,
    updateStudent : updateStudent
}