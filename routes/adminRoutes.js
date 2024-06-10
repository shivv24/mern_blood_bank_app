const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");

const router = express.Router();

//Routes || DOnarList
//GET || DONAR LIST
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);

//Routes ||Hospital List
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

//delete donar||get
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);

//Routes ||Org List
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

module.exports = router;
