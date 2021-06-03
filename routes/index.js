const express = require("express");
const router = express.Router();
const { getUsers } = require("../model");

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/results", async (req, res, next) => {
  let queries = await getUsers();
  res.render("pages/results", {
    queries: queries,
  });
});

module.exports = router;
