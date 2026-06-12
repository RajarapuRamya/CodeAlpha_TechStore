const Notification = require("../models/Notification");

exports.getNotifications = async (req, res) => {
  try {

    const notifications = await Notification.find({
      recipient: req.user.id
    })
      .populate("sender", "name username profilePic")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      notifications
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.markAsRead = async (req, res) => {
  try {

    await Notification.findByIdAndUpdate(
      req.params.id,
      {
        isRead: true
      }
    );

    res.json({
      success: true,
      message: "Notification marked as read"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};