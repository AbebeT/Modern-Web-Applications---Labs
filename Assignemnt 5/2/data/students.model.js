const mongoose =require("mongoose");

const coursesSchema = new mongoose.Schema({
    code : Number,
    name : String,
    credit : Number
})

const studentsSchema = new mongoose.Schema({
    GPA : Number,
    name: {
        type: String,
        required : true
    },    
    courses : [coursesSchema]
});

mongoose.model("Student", studentsSchema, "students");