const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {

    const user = await User.findById(req.params.id)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.json({
      success: true,
      user
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      req.body,
      {
        new: true
      }
    ).select("-password");

    res.json({
      success: true,
      user: updatedUser
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};