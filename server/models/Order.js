const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
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
    consumerPhone: {
      type: String,
      required: true,
    },
    consumerId: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      /* 
        1. WAITING
        2. ONTHEWAY
        3. DELIVERED

        4. CANCELED
      */
    },
    canceledReason: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = model("Order", orderSchema);
