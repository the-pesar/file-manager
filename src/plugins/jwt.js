const jwt = require("jsonwebtoken");

const sign = (data, algo) => {
  if (!data) return;

  return jwt.sign(data, process.env.SECRET_KEY, {
    algorithm: algo || "HS256",
  });
};

const verify = (token) => {
  if (!token) return;
  return jwt.verify(token, process.env.SECRET_KEY);
};

module.exports = { sign, verify };
