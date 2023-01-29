var express = require("express");
var app = express();
var redis = require("redis");
var client = redis.createClient();

// serve static files from public directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
