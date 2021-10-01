const mongoClient = require("mongodb").MongoClient;
const dbName = "meanGames";
const dburl = "mongodb://localhost:27017/"+dbName;

var _connection=null;
var open=function(){
    mongoClient.connect(dburl, function(err, client){
        if(err){
            console.log("Db connection failed");
            return;
        }
        else{
            _connection = client.db(dbName);
           console.log("DB connection open");
        }

    });
}

var get = function(){
    return _connection;
};

module.exports = {
    open :open,
    get : get
}