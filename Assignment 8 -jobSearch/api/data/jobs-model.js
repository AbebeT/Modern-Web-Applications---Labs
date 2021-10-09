const mongoose = require("mongoose")

const locationSchema = new mongoose.Schema({
    address : {
        type : String,
        required : true
    },
    phoneNumber : String,
    zipcode : String
})

const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    },
    description : String,    
    experience : Number,
    skill : [String],
    postDate : {
        type : Date
    },
    location : locationSchema

})

mongoose.model("Job", jobSchema, "jobs")