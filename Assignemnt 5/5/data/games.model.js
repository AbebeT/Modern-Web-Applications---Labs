const mongoose =require("mongoose");

const publisherSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    country :{
        type : String,
        required : true
    }
})

const reviewSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    date :{
        type : String,
        required : true
    },
    review : {
        type : String,
        required : true
    }
})

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true
    },
    price : Number,
    minAge: Number,
    designers : [String],
    rate: {
        type : Number,
        min: 1,
        max:5,
        "default":1
    },

    publisher : publisherSchema,

    review : [reviewSchema]
});

mongoose.model("Game", gameSchema, "games");