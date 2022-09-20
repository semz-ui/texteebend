const express = require("express");
const router = express.Router();
const {
  setText,
  getText,
  updateText,
  singleGoal,
} = require("../controller/textController");

router.post("/", setText);
router.get("/", getText);
router.get("/single", singleGoal);
router.put("/update", updateText);

module.exports = router;
