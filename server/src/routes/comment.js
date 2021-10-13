const express = require("express");
const Comment = require("../models/comment-model");

const router = express.Router();

router.get("/comments", async (req, res, next) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
});

router.post("/comment", async (req, res, next) => {
  const body = req.body;
  try {
    const comment = new Comment(body);
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
