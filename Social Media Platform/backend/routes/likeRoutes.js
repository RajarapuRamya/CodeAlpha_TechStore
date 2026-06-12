const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  likePost,
  unlikePost
} = require("../controllers/postController");

router.post("/:postId", protect, likePost);

router.delete("/:postId", protect, unlikePost);

module.exports = router;