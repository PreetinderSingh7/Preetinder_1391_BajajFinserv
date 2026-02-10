const express = require("express");
const bfhlRoutes = require("./routes/bfhl.routes");
const healthRoutes = require("./routes/health.routes");

const app = express();
app.use(express.json());

app.use("/api/bfhl", bfhlRoutes);
app.use("/api/health", healthRoutes);


// 404
app.use((req, res) => {
  res.status(404).json({
    is_success: false,
    error: "Endpoint not found"
  });
});

module.exports = app;
