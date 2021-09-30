
const games = require("../../data/games.json")

module.exports.gamesGetAll = function(req, res){
    console.log("GET request received");
        res.status(200).json(games);
}



