const { UsersCollection } = require("@src/database/MongoDB");
const jwt = require("@src/plugins/jwt");

const checkAuth = async (request, reply, done) => {
  try {
    const { authorization } = request.headers;
    const token = authorization.split(" ")[1];
    const { username, password } = jwt.verify(token);

    const user = await UsersCollection.findOne({
      username,
      password,
    });
    if (!user) reply.status(401).send({ msg: "you must be login" });
    request.body.username = username;
  } catch (error) {
    console.log(error.cError);
    reply.status(400).send({ msg: "your token is invalid or empty" });
  }

  done();
};

module.exports = { checkAuth };
