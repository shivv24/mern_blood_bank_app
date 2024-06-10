const express = require("express");
const authMiddelware = require("../middlewares/authMiddleware");
const {
  bloodGroupDetailsController,
} = require("../controllers/analyticsController");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddelware, bloodGroupDetailsController);

module.exports = router;
