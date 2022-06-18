const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Consumer = require("../models/Consumer");

//  get consumer by id
router.get("/:id", async (req, res) => {
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
router.get("/", async (req, res) => {
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
router.put("/:id", async (req, res) => {
  try {
    const consumer = await Consumer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json({
      consumer,
      status: "ok",
    });
  } catch (error) {
    console.log(error.message);
  }
});

// delete consumer
router.delete("/:id", async (req, res) => {
  try {
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
