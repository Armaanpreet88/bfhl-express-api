const allowedKeys = ["fibonacci", "prime", "lcm", "hcf", "AI"];

function validateBfhlBody(body) {
  const keys = Object.keys(body);

  if (keys.length !== 1 || !allowedKeys.includes(keys[0])) {
    throw { status: 400, message: "Exactly one valid key is required" };
  }

  const key = keys[0];
  const value = body[key];

  if (key === "fibonacci" && (!Number.isInteger(value) || value > 100)) {
    throw { status: 400, message: "Invalid fibonacci value" };
  }

  if (["prime", "lcm", "hcf"].includes(key)) {
    if (!Array.isArray(value) || value.length === 0) {
      throw { status: 400, message: `${key} must be a non-empty array` };
    }
  }

  if (key === "AI" && (typeof value !== "string" || value.length > 200)) {
    throw { status: 400, message: "Invalid AI question" };
  }

  return { key, value };
}

module.exports = validateBfhlBody;
