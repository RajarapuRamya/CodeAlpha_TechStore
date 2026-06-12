const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  try {

    const comment = await Comment.create({
      user: req.user.id,
      post: req.params.postId,
      text: req.body.text
    });

    res.status(201).json({
      success: true,
      comment
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {

    const comments = await Comment.find({
      post: req.params.postId
    }).populate("user", "name username profilePic");

    res.json({
      success: true,
      comments
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};