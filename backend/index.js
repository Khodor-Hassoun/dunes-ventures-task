require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["POST", "GET"],
};

app.use(cors(corsOptions));
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
