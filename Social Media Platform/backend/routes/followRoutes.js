const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  followUser,
  unfollowUser
} = require("../controllers/userController");

router.post("/:userId", protect, followUser);

router.delete("/:userId", protect, unfollowUser);

module.exports = router;