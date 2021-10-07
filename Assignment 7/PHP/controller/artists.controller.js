const mongoose = require("mongoose");
const ListOfMusic = mongoose.model("Music");

musicGetAllArtists = function (req, res) {
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

const getMusicArtistById = function (req, res) {
  console.log("Get request to signle artist of a music recieved");

  var musicId = req.params.musicId;
  var artistId = req.params.artistId;

  if (
    !mongoose.isValidObjectId(musicId) &&
    !mongoose.isValidObjectId(artistId)
  ) {
    console.log("Invalid music Id");
    res.status(400).json({ message: "Invalid music id or artistId" });
    return;
  }

  

  ListOfMusic.findById(musicId).exec(function (err, music) {
    if (music.artists.length < 0) {
      console.log("Artist not found");
      res.status(404).json({ message: "Artist not found" });
    } else {
      let index = -1;
      for (let i = 0; i < music.artists.length; i++) {
        if (music.artists[i].id === artistId) {
          console.log("Id found" , i);
          index = i;
        }
        console.log("music.artists[i].id", music.artists[i].id);
      }

      console.log("music ===== ", music.artists);

      console.log("Artist found ", music.artists[index]);
      res.status(200).json(music.artists[index]);
      
    }
  });
};


const addArtist = function (req, res) {
  const musicId = req.params.musicId;

  console.log("musicId ", musicId);

  ListOfMusic.findById(musicId).exec(function (err, music) {
    // console.log("found music", music);
    if (err) {
      console.log("error finding music");
      res.status(500).json(err);
    } else if (!music) {
      console.log("Music Id not found");
      res.status(404).json({ message: "Music Id not found" });
    } else {

      console.log("music saved", music.artists.length);

     
        if (!music.artists[0]) {
          music.artists = req.body;
          console.log("music.artists", music.artists[0]);
        } else {
          music.artists.push(req.body);
          console.log("music.artists.length", music.artists.length);
        }
      
     
          // music.artists.push(req.body);
          // console.log("music.artists", music.artists);
        
      

      // game.reviews.push(req.body);
      music.save(function (err, result) {
        if (err) {
          console.log("error saving artist");
          res.status(500).json(err);
        } else {
          console.log("music saved", music.aritsts);
          res.status(201).json(music);
        }
      });
    }
  });
};

const deleteArtist = function (req, res) {
  const musicId = req.params.musicId;
  const artistId = req.params.artistId;

  console.log("musicId ", musicId);

  ListOfMusic.findById(musicId).exec(function (err, music) {
    console.log("found music", music);
    if (err) {
      console.log("error finding music");
      res.status(500).json(err);
    } else if (!music) {
      console.log("Music Id not found");
      res.status(404).json({ message: "Music Id not found" });
    } else {

      let index = -1;
        for (let i = 0; i < music.artists.length; i++) {
          if (music.artists[i].id === req.params.artistId) {
            console.log("Id found");
            index = i;
          }
        }

        music.artists.splice(index, 1);
        console.log("Message 2 artists removed ");

      music.save(function (err, result) {
        if (err) {
          console.log("error saving artist");
          res.status(500).json(err);
        } else {
          console.log("music deleted", music.aritsts);
          res.status(204).json(music);
        }
      });
    }
  });
};

const updateArtist = function (req, res) {
  const musicId = req.params.musicId;
  const artistId = req.params.artistId;

  console.log("musicId ", musicId);

  ListOfMusic.findById(musicId).exec(function (err, music) {
    console.log("found music", music.aritsts);
    if (err) {
      console.log("error finding music");
      res.status(500).json(err);
    } else if (!music) {
      console.log("Music Id not found");
      res.status(404).json({ message: "Music Id not found" });
    } else {

      // console.log("music.aritsts.length ", music.aritsts.length)

      if(music.artists.length == 0){
        console.log("No artists found")
        res.status(404).json({"message": "No artists"})
      }
      else {
        if (music.artists <= 1) {
          if (music.artists === "") {
            res.status(404).json({ message: "Review not found" });
          } else {

            
            music.artists[0].name = req.body.name;
            music.artists[0].age = req.body.age;
            
            console.log("artist updated2");
  
            res.status(200).json({ message: "artist updated" });
          }
        } else {
          let index = -1;
          for (let i = 0; i < music.artists.length; i++) {
            if (music.artists[i].id === req.params.artistId) {
              console.log("Id found");
              index = i;
            }
          }
  
            music.artists[index].name = req.body.name;
            music.artists[index].age = req.body.age;
            
            console.log("aritsts updated2");
          
        }
  


      music.save(function (err, result) {
        if (err) {
          console.log("error saving artist");
          res.status(500).json(err);
        } else {
          console.log("music saved", music.artists);
          res.status(201).json(music);
        }
      });
    }
    }
  });
};





module.exports = {
  musicGetAll: musicGetAllArtists,
  getMusicArtistById: getMusicArtistById,
  addArtist : addArtist,
  deleteArtist : deleteArtist,
  updateArtist : updateArtist
};
