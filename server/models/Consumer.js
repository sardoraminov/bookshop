const { Schema, model } = require("mongoose");

const consumerSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    phone: {
      type: String,
      required: true,
    },
    oneId: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    bio: {
      type: String,
    },
    fullname: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = model("Consumer", consumerSchema);
