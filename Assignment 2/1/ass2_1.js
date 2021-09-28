const express = require("express");
const app = express();

app.set("port", 5353);
const server = app.listen(app.get("port"), function(){
    const port = app.get("port");
    console.log("Listening to port " + port);
});


