const { Schema, model } = require("mongoose");

const consumerSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    orders: [
      {
        type: Array,
        default: [],
      },
    ],
    oneId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Consumer", consumerSchema);
