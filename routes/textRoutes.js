const express = require("express");
const router = express.Router();
const {
  setText,
  getText,
  singleGoal,
  updateText,
} = require("../controller/textController");

router.post("/", setText);
router.get("/", getText);
router.get("/single", singleGoal);
router.patch("/update", updateText);

module.exports = router;
