const User = require("../models/user.model");

const createUser = (req, res) => {
  res.status(200).json({
    message: "user is Register",
  });
};
const loginUser = (req, res) => {
  res.status(200).json({
    message: "user is login",
  });
};

const getUserProfile = (req, res) => {
  res.status(200).json({
    message: "user profile",
  });
};

module.exports = { getUserProfile, createUser, loginUser };
