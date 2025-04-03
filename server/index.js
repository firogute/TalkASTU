import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/postRoutes.js";

import cors from "cors";
const router = express.Router();

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRoutes);
app.use("/post", postRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
