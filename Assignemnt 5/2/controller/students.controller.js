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


module.exports = {
    getAllStudents : getAllStudents,
    getOneStudent : getOneStudent
}