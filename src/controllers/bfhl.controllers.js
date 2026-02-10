const validate = require("../validators/bfhl.validator");
const { fibonacci, filterPrimes, hcf, lcm } = require("../utils/math.utils");
const { getSingleWordAIAnswer } = require("../utils/ai.utils");

const EMAIL = "adish1761.be23@chitkara.edu.in";

exports.health = (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: EMAIL
  });
};

exports.bfhl = async (req, res, next) => {
  try {
    const { key, value } = validate(req.body);
    let data;

    if (key === "fibonacci") data = fibonacci(value);
    if (key === "prime") data = filterPrimes(value);
    if (key === "hcf") data = hcf(value);
    if (key === "lcm") data = lcm(value);
    if (key === "AI") data = await getSingleWordAIAnswer(value);

    res.json({
      is_success: true,
      official_email: EMAIL,
      data
    });
  } catch (err) {
    next(err);
  }
};
