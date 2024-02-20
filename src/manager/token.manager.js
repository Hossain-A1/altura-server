const JWT = require("jsonwebtoken");

const createToken = (id) => {
  try {
    const token = JWT.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    throw new Error("Token creation failed");
  }
};

const verifyToken = (token) => {
  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (error) {
    throw new Error("Token verification failed!");
  }
};

module.exports = {createToken,verifyToken}