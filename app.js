const express = require("express");
require("dotenv").config();
const app = express();
const index = require("./routes");
const api = require("./routes/api");
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // aka bodyparser

console.log(process.env);

// serve static directories
app.use(express.static("public")); // static html landingpage, favicons, etc

// set the view engine to ejs
app.set("view engine", "ejs");

app.use("/", index);
app.use("/api", api); // api routes

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
