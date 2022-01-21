const { initUserDirectory } = require("@src/services/core-fm");
const { UsersCollection } = require("@src/database/MongoDB");
const jwt = require("@src/plugins/jwt");
const bcrypt = require("bcrypt");

const register = async (request, reply) => {
  let { username, password, type } = request.body;

  const salt = await bcrypt.genSalt(11);
  password = await bcrypt.hash(password, salt);

  const token = jwt.sign({ username, password });

  if (type === "user") {
    await UsersCollection.insertOne({
      username,
      password,
      token,
    });
  }
  initUserDirectory(username);
  reply.send({ token });
};
const login = async (request, reply) => {
  const { username, password } = request.body;

  const user = await UsersCollection.findOne({ username });

  if (!user) {
    reply.status(400).send({ msg: "user not found" });
    return;
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    reply.status(400).send({ msg: "password invalid" });
    return;
  }

  const token = jwt.sign({
    username: user.username,
    password: user.password,
  });

  await UsersCollection.updateOne({ _id: user._id }, { $set: { token } });

  reply.send({ msg: "ok", token });
};

module.exports = { login, register };
