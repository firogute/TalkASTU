import express from "express";
import {
  toggleLike,
  getLikesCount,
  isLiked,
} from "../controllers/likeController.js";
import authorization from "../middleware/authorization.js"; // Ensure this middleware is set up

const router = express.Router();

// Route to like or unlike a post
router.post("/:id/like", authorization, toggleLike);

// Route to get likes count for a post
router.get("/:id/likes-count", getLikesCount);

// Route to check if the user has liked a post
router.get("/:id/is-liked", authorization, isLiked);

export default router;
