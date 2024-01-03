const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>404 NOT FOUND <h1/>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});