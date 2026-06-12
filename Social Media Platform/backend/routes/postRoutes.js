const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createPost,
  getAllPosts,
  deletePost
} = require("../controllers/postController");

router.post("/", protect, createPost);

router.get("/", protect, getAllPosts);

router.delete("/:id", protect, deletePost);

module.exports = router;