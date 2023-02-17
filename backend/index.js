require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

const authRoute = require("./routes/auth.route");
app.use("/auth", authRoute);

app.listen(process.env.SERVER_PORT, () => {
  //   console.log("app running on port 3000");
  console.log(process.env.SERVER_PORT);
});
