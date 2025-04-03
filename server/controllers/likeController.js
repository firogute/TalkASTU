import * as likeModel from "../models/likeModel.js";

export const toggleLike = async (req, res) => {
  const userId = req.user; 
  const postId = req.params.id;

  try {
    const alreadyLiked = await likeModel.hasLikedPost(userId, postId);

    if (alreadyLiked) {
      await likeModel.removeLike(userId, postId);
      return res.status(200).json({ message: "Post unliked successfully" });
    } else {
      await likeModel.addLike(userId, postId);
      return res.status(200).json({ message: "Post liked successfully" });
    }
  } catch (err) {
    console.error("Error toggling like:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getLikesCount = async (req, res) => {
  const postId = req.params.id;

  try {
    const count = await likeModel.countLikes(postId);
    return res.status(200).json({ likesCount: count });
  } catch (err) {
    console.error("Error fetching likes count:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
};

// Check if the user has liked a post
export const isLiked = async (req, res) => {
  const userId = req.user; 
  const postId = req.params.id;

  try {
    const liked = await likeModel.hasLikedPost(userId, postId);
    return res.status(200).json({ isLiked: liked });
  } catch (err) {
    console.error("Error checking like status:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
};
