const { Users } = require("@src/database/MongoDB");
const jwt = require("@src/plugins/jwt");

const isAuth = async (request, reply, done) => {
  try {
    const { authorization } = request.headers;
    const token = authorization.split(" ")[1];
    const { username, password } = jwt.verify(token);

    const user = await Users.findOne({
      username,
      password,
    });
    if (!user) reply.status(401).send({ msg: "you must be login" });
  } catch (error) {
    console.log(error.cError);
    reply.status(400).send({ msg: "your token is invalid or empty" });
  }

  done();
};

module.exports = { isAuth };
