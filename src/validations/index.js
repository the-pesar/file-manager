const vRegister = {
  type: "object",
  required: ["username", "password", "type"],
  properties: {
    username: { type: "string", minLength: 4, maxLength: 12 },
    password: { type: "string", minLength: 4, maxLength: 20 },
    type: { type: "string", enum: ["user", "admin"] },
  },
};

const vLogin = {
  type: "object",
  required: ["username", "password"],
  properties: {
    username: { type: "string", minLength: 4, maxLength: 12 },
    password: { type: "string", minLength: 4, maxLength: 20 },
  },
};

module.exports = { vRegister, vLogin };
