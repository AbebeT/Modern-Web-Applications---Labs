require("dotenv").config({"path" : "env"})
require("./api/data/db")
const routes = require("./api/routes")
const path = require("path")
const express = require("express")
const app = express()




console.log("env port ", process.env.PORT);
if(!isNaN(process.env.PORT)){
    process.env.PORT = 3200
}
process.env.PORT = process.env.PORT || 3200
app.set("port", process.env.PORT);


app.use(function(req, res, next){
    console.log(req.method, req.url)
    next()
})

app.use("/node_modules",express.static(path.join(__dirname, "node_modules")))
app.use(express.static(path.join(__dirname, "public")))

// app.use("/", express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({extended: false}))
app.use(express.json({extended: false}))

app.use("/api", routes)

const server = app.listen(app.get("port"), function(){
    console.log("listening to port " , server.address().port);
})