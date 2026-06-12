const Post = require("../models/Post");

const createPost = async (
    userId,
    caption,
    image
) => {

    const post = await Post.create({
        user: userId,
        caption,
        image
    });

    return post;
};

const getAllPosts = async () => {

    return await Post.find()
        .populate(
            "user",
            "name username profilePic"
        )
        .sort({ createdAt: -1 });
};

const deletePost = async (postId) => {

    const post =
        await Post.findById(postId);

    if (!post) {
        throw new Error("Post not found");
    }

    await Post.findByIdAndDelete(postId);

    return true;
};

const likePost = async (
    postId,
    userId
) => {

    const post =
        await Post.findById(postId);

    if (!post) {
        throw new Error("Post not found");
    }

    if (
        !post.likes.includes(userId)
    ) {
        post.likes.push(userId);
        await post.save();
    }

    return post;
};

module.exports = {
    createPost,
    getAllPosts,
    deletePost,
    likePost
};