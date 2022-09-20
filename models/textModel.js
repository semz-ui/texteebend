const mongoose = require("mongoose");

const textSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a text value"],
    },
    text: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Text", textSchema);
