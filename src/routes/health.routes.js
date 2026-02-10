const express = require("express");
const router = express.Router();

const OFFICIAL_EMAIL = "preetinder1391.be23@chitkarauniversity.edu.in";

router.get("/", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: OFFICIAL_EMAIL
  });
});

module.exports = router;
