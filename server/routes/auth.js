import express from "express";
import bcrypt from "bcryptjs";
import db from "../db.js";

const app = express();
const router = express.Router();
import cors from "cors";

router.post("/register", async (req, res) => {
  try {
    //   Destructuring the request object
    const { username, password } = req.body;
    // Validating the provided username and password
    if (!username || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
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
      "INSERT INTO users (username,password) VALUES($1,$2)",
      [username, hashedPassword]
    );
    return res.status(201).json({ message: "User  registered successfully" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
