const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Consumer = require("../models/Consumer");
const { generateOrderId } = require("../helpers/generateId");
const { checkToken, checkAdmin } = require("../middlewares/checkToken");
const jwt = require("jsonwebtoken");

// get all orders
router.get("/", checkAdmin, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.json({ orders, status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

// get one order
router.get("/:id", checkAdmin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.json({ order, status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

// get consumer's orders
router.get("/get/:consumerId", checkToken, async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const decodedConsumer = decoded.consumer;
    const consumer = await Consumer.findOne({ oneId: req.params.consumerId });
    if (
      consumer._id.toString() !== decodedConsumer._id &&
      decodedConsumer.username !== "bookadmin"
    ) {
      return res.json({
        status: "bad",
        msg: "You are not authorized to access this resource!",
      });
    }
    const order = await Order.find({ consumerId: req.params.consumerId }).sort({
      createdAt: -1,
    });

    res.json({ order, status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

// get one order by id which is related to consumer
router.get("/getOne/:consumerId/:id", checkToken, async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const decodedConsumer = decoded.consumer;
  const consumer = await Consumer.findOne({ oneId: req.params.consumerId });
  if (
    consumer._id.toString() !== decodedConsumer._id &&
    decodedConsumer.username !== "bookadmin"
  ) {
    return res.json({
      status: "bad",
      msg: "You are not authorized to access this resource!",
    });
  }

  const order = await Order.findById(req.params.id);

  res.json({ order, status: "ok" });
});

// create order
router.post("/create", checkToken, async (req, res) => {
  try {
    const { name, price, amount, address, consumerPhone, consumerId } =
      req.body;
    const newOrder = await new Order({
      name,
      price,
      amount,
      address,
      consumerPhone,
      consumerId,
      status: "waiting",
      oneId: generateOrderId(),
      canceledReason: "",
    });

    const savedOrder = await newOrder.save();

    res.json({ msg: "Order created!", order: savedOrder });
  } catch (error) {
    console.log(error.message);
  }
});

// update a order
router.put("/update/:id", checkToken, async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const decodedConsumer = decoded.consumer;
    const consumer = await Consumer.findOne({ oneId: req.params.consumerId });
    if (
      consumer._id.toString() !== decodedConsumer._id &&
      decodedConsumer.username !== "bookadmin"
    ) {
      return res.json({
        status: "bad",
        msg: "You are not authorized to access this resource!",
      });
    }
    const changedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.json({ order: changedOrder, status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

// change status
router.put("/:oneId/:status", checkToken, async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const decodedConsumer = decoded.consumer;
  const order = await Order.findOne({ oneId: req.params.oneId });
  if (
    order.consumerId !== decodedConsumer.oneId &&
    decodedConsumer.username !== "bookadmin"
  ) {
    return res.json({
      status: "bad",
      msg: "You are not authorized to access this resource!",
    });
  }

  const changedOrder = await Order.findOneAndUpdate(
    { oneId: req.params.oneId },
    {
      $set: {
        status: req.params.status,
        canceledReason: req.body.canceledReason,
      },
    },
    { new: true }
  );

  res.json({
    msg: `Order's status changed to ${req.params.status}!`,
    order: changedOrder,
    status: "ok",
  });
});

// delete consumer's orders
router.delete("/deleteOrders/:consumerId", checkToken, async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const decodedConsumer = decoded.consumer;
    const consumer = await Consumer.findOne({ oneId: req.params.consumerId });
    if (
      consumer._id.toString() !== decodedConsumer._id &&
      decodedConsumer.username !== "bookadmin"
    ) {
      return res.json({
        status: "bad",
        msg: "You are not authorized to access this resource!",
      });
    }
    await Order.deleteMany({ consumerId: req.params.consumerId });

    res.json({ msg: `Successfully deleted consumer's orders!`, status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

// delete all delivered orders which is related to consumer
router.delete(
  "/deleteConsumerOrders/:consumerId",
  checkToken,
  async (req, res) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const decodedConsumer = decoded.consumer;
      const consumer = await Consumer.findOne({ oneId: req.params.consumerId });
      if (
        consumer._id.toString() !== decodedConsumer._id &&
        decodedConsumer.username !== "bookadmin"
      ) {
        return res.json({
          status: "bad",
          msg: "You are not authorized to access this resource!",
        });
      }

      await Order.deleteMany({
        consumerId: req.params.consumerId,
        status: "DELIVERED",
      });

      res.json({ msg: "Successfully deleted delivered orders!", status: "ok" });
    } catch (error) {
      console.log(error.message);
    }
  }
);

// delete one order
router.delete("/delete/:id", checkToken, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ msg: "Successfully deleted!", status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

// delete all delivered orders
router.delete("/deleteDelivered", checkAdmin, async (req, res) => {
  try {
    await Order.deleteMany({ status: "DELIVERED" });
    res.json({ msg: "Successfully deleted delivered orders!", status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
