const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    oneId: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    moreDetails: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = model("Book", bookSchema);
