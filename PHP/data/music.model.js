const mongoose =require("mongoose");

const artistSchema =  new mongoose.Schema({
    name : String,
    age : Number
})
const musicSchema = new mongoose.Schema({
    
    year : Number,
    origin : String,
    genre : {
        type : String,
        required : true
    },
    artists : [artistSchema]
   
});

mongoose.model("Music", musicSchema, "music");