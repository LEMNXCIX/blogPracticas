const mongoose = require("mongoose");

const GalerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Galery", GalerySchema);
