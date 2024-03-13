const express = require("express");
const {
  getUserProfile,
  loginUser,
  createUser,
} = require("../controllers/user.controllers");
const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/profile", getUserProfile);

module.exports = router;
