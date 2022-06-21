const express = require("express");
const router = express.Router();
const User = require("../models/peopleModel");

router.route("/").post(async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    return res.status(200).json({ user });
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
