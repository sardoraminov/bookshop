const express = require("express");
const router = express.Router();
const { generateBookId } = require("../helpers/generateId");
const Book = require("../models/Book");
const { checkToken, checkAdmin } = require("../middlewares/checkToken");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname + "/resources/img"));
  },
  filename: function (req, file, cb) {
    cb(null, generateBookId());
  },
});

const upload = multer({ storage: storage });

// get all books
router.get("/", checkToken, async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json({ books, status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

// get one book
router.get("/:id", checkToken, async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json({ book, status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

// create a book
router.post("/create", checkAdmin, upload.single("img"), async (req, res) => {
  try {
    const { name, price, author, releaseDate, moreDetails } = req.body;

    if (!name)
      return res.json({ msg: "Name of book is required!", status: "ok" });
    if (!price)
      return res.json({ msg: "Price of book is required!", status: "ok" });
    if (!author)
      return res.json({ msg: "Author of book is required!", status: "ok" });
    if (!releaseDate)
      return res.json({
        msg: "Release date of book is required!",
        status: "ok",
      });

    const newBook = await new Book({
      name,
      price,
      author,
      releaseDate,
      oneId: req.file.filename,
      moreDetails,
      img: req.file.path,
    });

    const savedBook = await newBook.save();

    res.json({ msg: "Book is saved!", status: "ok", book: savedBook });
  } catch (error) {
    console.log(error.message);
  }
});

// update a book
router.put("/:id", checkAdmin, upload.single("img"), async (req, res) => {
  try {
    const { name, price, author, releaseDate, moreDetails } = req.body;

    const book = await Book.findById(req.params.id);

    const imgPath = book.img;
    await fs.unlink(`../${imgPath}`, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    const changedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name,
          price,
          author,
          releaseDate,
          moreDetails,
          oneId: req.file.filename,
          img: req.file.path,
        },
      },
      { new: true }
    );

    res.json({ msg: "Successfully updated!", book: changedBook, status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

// delete a book
router.delete("/:id", checkAdmin, async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ msg: "Successfully deleted!", status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

// delete all book
router.delete("/:id", checkAdmin, async (req, res) => {
  try {
    await Book.deleteMany();
    res.json({ msg: "Successfully deleted all books!", status: "ok" });
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/:author", checkAdmin, async (req, res) => {
  try {
    await Book.deleteMany({ author: req.params.author });

    res.json({
      msg: `Successfully deleted all books that ${req.params.author} has written`,
      status: "ok",
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
