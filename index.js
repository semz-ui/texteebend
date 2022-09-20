const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/texts", require("./routes/textRoutes"));

app.get("/", (req, res) => {
  res.send("tf you doing here");
});

app.listen(port, () => {
  console.log(`listen ${port}`);
});
