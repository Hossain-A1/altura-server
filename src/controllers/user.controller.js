const handleError = require("../errors/handleError");
const userModel = require("../models/user.model");

const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).json(users);
  } catch (error) {
    await handleError(error, res);
  }
};

module.exports = getAllUser;
