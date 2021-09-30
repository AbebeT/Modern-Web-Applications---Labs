const express = require("express");
const app = express();
const routes = require("./api/routes");

app.set("port", 3000);
app.use("/api", routes);

const server = app.listen(app.get("port"), () => {
  console.log("Listening on port " + app.get("port"));
});
