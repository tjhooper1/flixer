const express = require("express");

const usersRoutes = require("./usersRoute");

const router = express.Router();

router.use("/user", usersRoutes);

module.exports = router;
