import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export default function (req, res, next) {
  try {
    const jwtToken = req.header("token");
    if (!jwtToken) {
      return res.status(403).json("No token, authorization denied");
    }
    const payload = jwt.verify(jwtToken, process.env.jwtSecretKey);
    // console.log(payload);
    req.user = payload.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(403).json("Not authorized");
  }
}
