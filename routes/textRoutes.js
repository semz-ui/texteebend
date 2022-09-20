const express = require("express");
const router = express.Router();
const {
  setText,
  setText1,
  getText,
  getText1,
  singleGoal,
  updateText,
} = require("../controller/textController");

router.post("/", setText);
router.post("/rae", setText1);
router.get("/", getText);
router.get("/rae", getText1);
router.get("/single", singleGoal);
router.put("/update", updateText);

module.exports = router;
