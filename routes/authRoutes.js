const express = require("express");
const {
  registerController,
  loginController,
  getCurrentUserController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//routes
//POST || REGISTER
router.post("/register", registerController);

//POST || LOGIN
router.post("/login", loginController);

//GET CURRENT USER
router.get("/current-user", authMiddleware, getCurrentUserController);

module.exports = router;
