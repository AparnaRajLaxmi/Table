const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
const {updateUser} = require("../controller/updateUser");
router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.put("/updateUser/:id", updateUser);

module.exports = router;
