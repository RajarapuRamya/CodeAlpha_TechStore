const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  getProfile,
  updateProfile
} = require("../controllers/userController");

router.get("/:id", protect, getProfile);

router.put("/update", protect, updateProfile);

module.exports = router;