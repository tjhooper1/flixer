const express = require("express");
const router = express.Router();

const userCtrl = require('../controllers/usersCtrl')

const mockData = require("../mockData");

router.get("/", userCtrl.getUsers);
router.post("/", (req, res) => {
  console.log(req.body);
  return res.status(201).json({ success: true });
});

module.exports = router;
