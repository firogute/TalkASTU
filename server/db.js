import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;
dotenv.config();

const db = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

// console.log(process.env.USER);
export default db;
