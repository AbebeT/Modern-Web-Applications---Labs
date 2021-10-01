const dbConnection = require("../../data/dbconnection");
module.exports.gamesGetAll = function (req, res) {
  const db = dbConnection.get();
  const gamesCollection = db.collection("games");
  console.log("db is ");

  let count = 6;
  let offset = 0;

  if (req.query && req.query.count) {
    count = parseInt(req.query.count);
  }

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset);
  }

  console.log("GET request received");

  if (count <= 9) {
    gamesCollection
      .find()
      .skip(offset)
      .limit(count)
      .toArray(function (err, games) {
        res.status(200).json(games);
      });
  } else {
    res.status(500).json({ error: "count should not exceed 9" });
  }
};
