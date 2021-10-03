const mongoose = require("mongoose");
const Games = mongoose.model("Game");


getAllGames = function(req, res){
    console.log("Get all Games");

    let count = 6 ;
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
    Games.find().skip(offset).limit(count).exec(function(err, games){
        if(err){
            console.log("Error finding games");
        }
        else {
            console.log("Games found");
            res.status(200).json(games);
        }
    })
}

getOneGame = function(req, res){
    const gameId = req.params.gameId;

    if(!mongoose.isValidObjectId(gameId)){
        console.log("Invalid Game Id");
        res.status(400).json({"message": "Invalid Game id"});
        return;
    }

    Games.findById(gameId).exec(function(err, game){
        if(err){
            console.log("error finding game");
            res.status(500).json(err);
        }
        else{
            if(!game){
                console.log("Game Id not found");
                res.status(404).json({"message": "Game with given gameId not found"});
            }
            console.log("Game Found");
            res.status(200).json(game);
        }
    });


};


module.exports = {
    getAllGames : getAllGames,
    getOneGame : getOneGame
}