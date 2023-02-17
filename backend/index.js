require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.SERVER_PORT, () => {
  //   console.log("app running on port 3000");
  console.log(process.env.SERVER_PORT);
});
