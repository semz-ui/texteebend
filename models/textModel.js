const mongoose = require("mongoose");

const textSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Please add a text value"],
    },
    companyAddress: {
      type: String,
      required: true,
    },
    platformFee: {
      description: String,
      fees: String,
    },
    TryFee: {
      description: String,
      fees: String,
    },
    FeatureFee: {
      description: String,
      fees: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Text", textSchema);
