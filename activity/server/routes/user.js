//setup the dependencies
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { verify } = require("../auth");

router.post("/register",  userController.registerUser)
router.post("/login", userController.loginUser)
router.get("/details", verify, userController.getProfile)

module.exports = router;