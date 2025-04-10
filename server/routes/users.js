import express from "express";
import pool from "../config/db.js";
import authorization from "../middleware/authorization.js";

const router = express.Router();

router.get("/", authorization, async (req, res) => {
  try {
    // res.json(req.user);
    const id = req.user;
    const user = await pool.query(
      `select user_id,username from users where user_id = $1`,
      [id]
    );
    // console.log(user.rows[0]);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});
export default router;
