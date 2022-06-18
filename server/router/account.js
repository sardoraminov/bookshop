const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Consumer = require("../models/Consumer");
const { generateId } = require("../helpers/generateId");

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, password, gender } = req.body;
    const existingConsumer = await Consumer.findOne({
      username: username.trim(),
    });

    if (existingConsumer)
      return res.json({
        msg: "Username already exists. Please choose another one!",
        status: "bad",
      });

    if (username.trim().length < 4)
      return res.json({
        msg: "Username must be at least 4 characters long!",
        status: "bad",
      });

    if (password.trim().length < 4)
      return res.json({
        msg: "Password must be at least 4 characters long!",
        status: "bad",
      });

    const hashPass = await bcrypt.hash(password, 10);

    const newConsumer = new Consumer({
      username: username.trim(),
      password: hashPass,
      gender,
      oneId: generateId(username, ""),
    });
    const savedConsumer = await newConsumer.save();

    const token = jwt.sign({ consumer: savedConsumer }, process.env.JWT_SECRET);

    res.json({
      account: savedConsumer,
      token,
      status: "ok",
      msg: "Successfully registered!",
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingConsumer = await Consumer.findOne({
      username: username.trim(),
    });

    if (!existingConsumer)
      return res.json({ status: "bad", msg: "Username does not exist!" });

    const isMatch = await bcrypt.compare(password, existingConsumer.password);

    if (!isMatch)
      return res.json({ msg: "Incorrect password!", status: "bad" });

    const token = jwt.sign(
      { consumer: existingConsumer },
      process.env.JWT_SECRET
    );

    req.user = existingConsumer;

    res.json({
      account: existingConsumer,
      token,
      status: "ok",
      msg: "Successfully logged in!",
    });
  } catch (error) {
    console.log(error.message);
  }
});

// check user logged in with jwt
router.get("/loggedin", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.json({
        status: "bad",
        msg: "You are not logged in!",
      });
    }

    const consumer = await Consumer.findById(decoded.consumer._id);

    res.json(consumer);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
