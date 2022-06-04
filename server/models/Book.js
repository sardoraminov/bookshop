const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    name: {
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
  },
  { timestamps: true }
);

module.exports = model('Book', bookSchema)
