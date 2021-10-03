const mongoose = require("mongoose");
const ListOfMusic = mongoose.model("Music");


getAllMusic = function(req, res){
    console.log("Get all music");

    let count = 5 ;
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
    ListOfMusic.find().skip(offset).limit(count).exec(function(err, musics){
        if(err){
            console.log("Error finding music");
        }
        else {
            if(!musics){
                console.log("music not found");
                res.status(404).json({"message" : "music not found"});
            }
            else{
            console.log("music found ", musics.length);
            res.status(200).json(musics);
            }
        }
    })
}

getOneMusic = function(req, res){
    const musicId = req.params.musicId;

    if(!mongoose.isValidObjectId(musicId)){
        console.log("Invalid Music Id");
        res.status(400).json({"message": "Invalid Music id"});
        return;
    }

    ListOfMusic.findById(musicId).exec(function(err, music){
        if(err){
            console.log("error finding Music");
            res.status(500).json(err);
        }
        else{
            if(!music){
                console.log("Music Id not found");
                res.status(404).json({"message": "Music with given musicId not found"});
            }
            console.log("Music Found", music);
            res.status(200).json(music);
        }
    });


};


deleteMusic = function(req, res){
    console.log("Delete request received");
    const musicId = req.params.musicId;
  
    if(!mongoose.isValidObjectId(musicId)){
      console.log("invalid music id");
      res.send(404).send({"message": "music Id not found"});
    }
  
    ListOfMusic.findByIdAndDelete(musicId).exec(function(err, music){
      if(err){
        console.log("error deleting the music");
        res.status(500).json(err);
      }
      else{
        console.log("music deleted");
        res.status(201).json({"message": "music deleted"});
      }
  
    });
  
  };
  addMusic = function(req, res){
    console.log("Post request received");
    console.log("req.body ", req.body);

    const newMusic = {
        genre : req.body.genre,
        year : parseInt(req.body.year),
        origin: req.body.origin

    }

    ListOfMusic.create(newMusic, function(err, result){
        if(err){
            console.log("error creating music");
            res.status(500).json(err);
        }
        else{
            console.log("Music created");
            res.status(201).json(result);
                }
    })
}

  updateMusic = function(req, res){
    console.log("update request recieved");
    console.log("req.params._id ", req.params.musicId);
    
    if(!mongoose.isValidObjectId(req.params.musicId)){
      console.log("invalid music id");
      res.send(404).send({"message": "music Id not found"});
    }
    // res.status(201).json({"message": "Update request received"});

    const musicId = {_id : req.params.musicId}

    const musicUpdate = {
        origin : req.body.origin,
        year : parseInt(req.body.year),
        //courses : req.body.courses
    }

    const returnUpdated = {
        new: true
      }

    ListOfMusic.findOneAndUpdate(musicId
    , musicUpdate, returnUpdated,  function(error, result){
        if(error){
            console.log("unable to update music")
        }
        else{
            console.log("music updated");
            console.log(result);
            res.status(200).json(result)
        }
    });

}


module.exports = {
    getAllMusic : getAllMusic,
    getOneMusic : getOneMusic,
    deleteMusic : deleteMusic,
    updateMusic : updateMusic,
    addMusic : addMusic

}