const express = require("express");
const path = require("path")
const app = express();
const routes = require("./api/routes");
require("./data/dbconnection").open();


app.set("port", 3000);

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api",routes);

const server = app.listen(app.get("port"), function(){
    const port = app.get("port");
    console.log("Listening to port " + port);
})