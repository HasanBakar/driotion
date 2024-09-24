const express = require("express");
const router = require("./routes/email");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
const port = process.env.port || 5000;
app.get("/", (req, res) => {
  res.send("Welcome To Driotion");
});
app.use(express.json());
app.use("/api", router);
app.listen(port, () => {
  console.log(`Server is Running At ${port}`);
});
