const express = require("express");
const router = express.Router();
const { createUsers } = require("../../model");

router.post("/csv", async (req, res, next) => {
  console.log(req.body.token);
  await createUsers(req.body.token);
  res.send("worked").status(200);
});

module.exports = router;
