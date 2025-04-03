import db from "../config/db.js";

// Function to check if a user has liked a post
export const hasLikedPost = async (userId, postId) => {
  const result = await db.query(
    "SELECT * FROM likes WHERE user_id = $1 AND post_id = $2",
    [userId, postId]
  );
  return result.rows.length > 0;
};

// Function to add a like
export const addLike = async (userId, postId) => {
  return await db.query(
    "INSERT INTO likes (user_id, post_id) VALUES ($1, $2)",
    [userId, postId]
  );
};

// Function to remove a like
export const removeLike = async (userId, postId) => {
  return await db.query(
    "DELETE FROM likes WHERE user_id = $1 AND post_id = $2",
    [userId, postId]
  );
};

// Function to count likes for a post
export const countLikes = async (postId) => {
  const result = await db.query(
    "SELECT COUNT(*) FROM likes WHERE post_id = $1",
    [postId]
  );
  return parseInt(result.rows[0].count, 10);
};
