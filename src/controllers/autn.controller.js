const { createToken } = require("../manager/token.manager");
const handleError = require("../errors/handleError");
const userModel = require("../models/user.model");

const register = async (req, res) => {
  try {
    const { name, email, password, address, phoneNo } = req.body;

    await Promise.resolve().then(async () => {
      const user = await userModel.register(
        name,
        email,
        password,
        address,
        phoneNo
      );

      const token = createToken(user._id);

      res.status(200).json({ user, token });
    });
  } catch (error) {
    await handleError(error, res);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    await Promise.resolve().then(async () => {
      const user = await userModel.login(email, password);

      const token = createToken(user._id);

      res.status(200).json({ user, token });
    });
  } catch (error) {
    await handleError(error, res);
  }
};

module.exports = { login, register };
