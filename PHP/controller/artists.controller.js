const mongoose = require("mongoose");
const ListOfMusic = mongoose.model("Music");

musicGetAll = function (req, res) {
    console.log("Get request to all artists of a music received!!");
    var musicId = req.params.musicId;
    if (!mongoose.isValidObjectId(musicId)) {
      console.log("Invalid Music Id");
      res.status(400).json({ message: "Invalid Music id" });
      return;
    }
  
    ListOfMusic.findById(musicId)
      .select("artists")
      .exec(function (err, doc) {
        if (err) {
          console.log("error finding Music");
          res.status(500).json(err);
        } else {
          if (!doc) {
            console.log("Music Id not found");
            res
              .status(404)
              .json({ message: "Music with given musicId not found" });
          } else {
            res.status(200).json(doc.artists);
          }
        }
      });
  };

  getMusicArtistById = function (req, res) {
    console.log("Get request to signle artist of a music recieved");
  
    var musicId = req.params.musicId;
  
    if (!mongoose.isValidObjectId(musicId)) {
      console.log("Invalid music Id");
      res.status(400).json({ message: "Invalid music id" });
      return;
    }
  
    if (!req.params.artistName) {
      console.log("Invalid artistName Id");
      res.status(400).json({ message: "Invalid artistName id" });
      return;
    }
    var artistName = req.params.artistName;
    console.log("GET artistName " + artistName + " for artistName " + artistName);
  
    ListOfMusic.findById(musicId)
      .select("artists")
      .exec(function (err, music) {
        var artist = music.artists.find((art) => art.name === artistName);
      
        console.log("music artists ", music.artists);
        res.status(200).json(music.artists.find((art) => art.name === artistName));
      });
  };
  

  module.exports = {
    musicGetAll: musicGetAll,
    getMusicArtistById : getMusicArtistById
  }