const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {

    const post = await Post.create({
      user: req.user.id,
      caption: req.body.caption,
      image: req.body.image
    });

    res.status(201).json({
      success: true,
      post
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {

    const posts = await Post.find()
      .populate("user", "name username profilePic")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: posts.length,
      posts
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {

    await Post.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Post deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};