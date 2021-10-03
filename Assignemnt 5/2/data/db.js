const mongoose = require("mongoose");
require("../data/students.model")
const dbName = "SchoolDB";
const dbURL = "mongodb://localhost:27017/SchoolDB";

mongoose.connect(dbURL);

mongoose.connection.on("connected", function(){
    console.log("Mongoose connected to " + dbName);
});

mongoose.connection.on("disconnected", function(){
    console.log("Mongoose disconneted");
});

mongoose.connection.on("error", function(){
    console.log("Mongoose connection error");
});

process.on("SIGINT", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconeected by app termination");
        process.exit(0);
    })
})

process.on("SIGUSR2", function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconeected by app restart");
        process.kill(process.pid, "SIGUSR2");
    })
})




