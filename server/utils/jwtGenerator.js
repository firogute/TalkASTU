import jsonWebToken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtGenerator = (userId) => {
  if (!userId) {
    console.error("Error: user_id is undefined or null");
    return;
  }
  const payload = { userId };
  return jsonWebToken.sign(
    payload,
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" } // Token expires in 1 day
  );
};

// console.log(process.env.JWT_SECRET);
export default jwtGenerator;
