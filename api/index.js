require("dotenv").config();
const express = require("express");
const cors = require("cors");

const bfhlRoutes = require("../src/routes/bfhl.routes");
const errorHandler = require("../src/middleware/error.middleware");

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(express.json({ limit: "10000kb" }));

app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});

app.use("/", bfhlRoutes);
app.use(errorHandler);

module.exports = app;
