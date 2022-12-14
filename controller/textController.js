const Text = require("../models/textModel");
const asyncHandler = require("express-async-handler");

const getText = asyncHandler(async (req, res) => {
  const texts = await Text.find({ id: req._id });
  res.status(200).json(texts);
});
const setText = asyncHandler(async (req, res) => {
  const { companyName, companyAddress, platformFee, TryFee, FeatureFee } =
    req.body;
  if (
    !companyName ||
    !companyAddress ||
    !platformFee ||
    !TryFee ||
    !FeatureFee
  ) {
    res.status(404).json({
      message: "input all feilds",
    });
  }
  const texts = await Text.create({
    companyName,
    companyAddress,
    platformFee,
    TryFee,
    FeatureFee,
  });
  res.status(200).json(texts);
});

const updateText = asyncHandler(async (req, res) => {
  const text = await Text.findById(req.body.id);
  console.log(text);

  if (!text) {
    res.status(400);
    throw new Error("Text not found");
  }

  const updatedText = await Text.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedText);
});

const singleGoal = asyncHandler(async (req, res) => {
  const text = await Text.findById(req.body.id);

  if (!text) {
    res.status(400);
    throw new Error("text not found");
  }
  res.status(200).json(text);
});

module.exports = {
  setText,
  getText,
  updateText,
  singleGoal,
};
