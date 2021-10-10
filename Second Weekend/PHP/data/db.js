const mongoose = require("mongoose");
require("./music.model.js")
require("./users-model")
const dbName = "MyNewMusicDB";
// const dbURL = "mongodb://localhost:27017/MyNewMusicDB";

const dbURL = process.env.DATABASE_URL + "MyNewMusicDB"
mongoose.connect(dbURL);

mongoose.connection.on("connected", function(){
    console.log("Mongoose connected to " + "MyNewMusicDB");
});

mongoose.connection.on("disconnected", function(){
    console.log("Mongoose disconneted");
});

mongoose.connection.on("error", function(){
    console.log("Mongoose connection error");
});

process.on("SIGINT", () => {

    mongoose.connection.close(() => {
    
    console.log("Mongoose disconnected by app termination");
    
    process.exit(0);
    
    });
    
    });
    
    
    
    process.on("SIGTERM", () => {
    
    mongoose.connection.close(() => {
    
    console.log("Mongoose disconnected by apptermination");
    
    process.exit(0);
    
    });
    
    });
    
    
    
    process.once("SIGUSR2", () => {
    
    mongoose.connection.close(() => {
    
    console.log("Mongoose disconnected by apptermination");
    
    process.kill(process.pid, "SIGUSR2");
    
    });
    
    });


