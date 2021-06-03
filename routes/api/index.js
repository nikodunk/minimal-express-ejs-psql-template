const express = require("express");
const router = express.Router();
const { createUsers } = require("../../model");

router.post("/csv", async (req, res, next) => {
  createUsers(req.body.token);
  res.status(200);
});

module.exports = router;
