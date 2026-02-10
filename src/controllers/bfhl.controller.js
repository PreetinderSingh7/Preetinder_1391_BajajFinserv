const {
  fibonacci,
  filterPrimes,
  calculateLCM,
  calculateHCF
} = require("../utils/math.utils");

const { askAI } = require("../services/ai.service");

const OFFICIAL_EMAIL = "preetinder1391.be23@chitkarauniversity.edu.in";

exports.handleBFHL = async (req, res) => {
  try {
    const keys = Object.keys(req.body);

    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        error: "Request must contain exactly one operation"
      });
    }

    const key = keys[0];
    const value = req.body[key];
    let data;

    switch (key) {
      case "fibonacci":
        data = fibonacci(value);
        break;
      case "prime":
        data = filterPrimes(value);
        break;
      case "lcm":
        data = calculateLCM(value);
        break;
      case "hcf":
        data = calculateHCF(value);
        break;
      case "AI":
        data = await askAI(value);
        break;
      default:
        return res.status(400).json({
          is_success: false,
          error: "Invalid operation"
        });
    }

    res.status(200).json({
      is_success: true,
      official_email: OFFICIAL_EMAIL,
      data
    });
  } catch (err) {
    res.status(400).json({
      is_success: false,
      error: err.message
    });
  }
};
