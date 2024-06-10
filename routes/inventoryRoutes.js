const express = require("express");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganizationController,
  getOrganizationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//Add inventory || post
router.post("/create-inventory", authMiddleware, createInventoryController);

//get all blood records
router.get("/get-inventory", authMiddleware, getInventoryController);

//get recent blood records
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//get donar records
router.get("/get-donars", authMiddleware, getDonarsController);

//get hospital records
router.get("/get-hospitals", authMiddleware, getHospitalController);

//get hospital records
router.get("/get-organization", authMiddleware, getOrganizationController);

//get hospital records
router.get(
  "/get-organization-for-hospital",
  authMiddleware,
  getOrganizationForHospitalController
);

//get hospital blood records
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

module.exports = router;
