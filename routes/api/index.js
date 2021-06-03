const express = require("express");
const router = express.Router();
const { createUsers } = require("../../model");

router.post("/csv", async (req, res, next) => {
  await createUsers(req.body.token);
  res.redirect("/");
});

module.exports = router;
