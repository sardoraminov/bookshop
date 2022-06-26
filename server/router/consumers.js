const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Consumer = require("../models/Consumer");
const { checkToken } = require("../middlewares/checkToken");

//  get consumer by id
router.get("/:id", checkToken, async (req, res) => {
  try {
    const consumer = await Consumer.findById(req.params.id);
    res.json({
      consumer,
      status: "ok",
    });
  } catch (error) {
    console.log(error.message);
  }
});

// get all consumers
router.get("/", checkToken, async (req, res) => {
  try {
    const consumers = await Consumer.find();
    res.json({
      consumers,
      status: "ok",
    });
  } catch (error) {
    console.log(error.message);
  }
});

// update consumer
router.put("/:id", checkToken, async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const decodedConsumer = decoded.consumer;
    const consumer = await Consumer.findById(req.params.id);
    if (
      consumer._id.toString() !== decodedConsumer._id &&
      decodedConsumer.username !== "bookadmin"
    ) {
      return res.json({
        status: "bad",
        msg: "You are not authorized to update this consumer!",
      });
    }
    const changedConsumer = await Consumer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json({
      consumer: changedConsumer,
      status: "ok",
    });
  } catch (error) {
    console.log(error.message);
  }
});

// delete consumer
router.delete("/:id", checkToken, async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const decodedConsumer = decoded.consumer;
    const consumer = await Consumer.findById(req.params.id);
    if (
      consumer._id.toString() !== decodedConsumer._id &&
      decodedConsumer.username !== "bookadmin"
    ) {
      return res.json({
        status: "bad",
        msg: "You are not authorized to delete this consumer!",
      });
    }

    await Consumer.findByIdAndDelete(req.params.id);
    res.json({
      status: "ok",
      msg: "Successfully deleted!",
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
