import express from "express";
import db from "../config/db.js";
import authorization from "../middleware/authorization.js";

const router = express.Router();

// Create a new post
router.post("/", authorization, async (req, res) => {
  try {
    const { content, image_url } = req.body;

    // Validate inputs
    if (!content && !image_url) {
      return res
        .status(400)
        .json({ message: "Either content or image_url must be provided" });
    }

    // Prepare new post
    const newPost = {
      user_id: req.user,
      content: content || null,
      image_url: image_url || null,
    };

    // Insert new post into the database
    const post = await db.query(
      "INSERT INTO posts (user_id, content, image_url) VALUES ($1, $2, $3) RETURNING *",
      [newPost.user_id, newPost.content, newPost.image_url]
    );

    if (!post.rows[0]) {
      return res.status(500).json({ message: "Failed to create post" });
    }

    res.status(201).json(post.rows[0]);
  } catch (err) {
    console.error("Post creation error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch all posts
router.get("/", async (req, res) => {
  try {
    const posts = await db.query(`
      SELECT posts.*, users.username 
      FROM posts 
      JOIN users ON posts.user_id = users.id 
      ORDER BY posts.created_at DESC
    `);

    return res.status(200).json(posts.rows);
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
});

router.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;

  try {
    const posts = await db.query(
      "SELECT * FROM posts WHERE user_id = $1 ORDER BY created_at DESC",
      [user_id]
    );

    // Check if posts were found
    if (posts.rows.length === 0) {
      return res.status(404).json({ message: "No posts found for this user." });
    }

    // Return the posts
    return res.status(200).json(posts.rows);
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
