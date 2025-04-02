import express from "express";
import bcrypt from "bcryptjs";
import db from "../db.js";
import jwtGenerator from "../utils/jwtGenerator.js";

const app = express();
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    //   Destructuring the request object
    const { username, password } = req.body;
    // Validating the provided username and password
    if (!username || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    //   check if the user is already registered (if exist return)
    const user = await db.query("SELECT * from users WHERE username = $1", [
      username,
    ]);

    if (user.rows.length > 0) {
      return res.status(400).json({ message: "Username already exists" });
    }
    //   Hashing the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    //   Adding the new user to the database
    const newUser = await db.query(
      "INSERT INTO users (username,password) VALUES($1,$2) RETURNING *",
      [username, hashedPassword]
    );

    const token = jwtGenerator(newUser.rows[0].user_id);
    return res.status(201).json({
      token,
      message: "User  registered successfully",
      userId: newUser.rows[0].user_id,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
