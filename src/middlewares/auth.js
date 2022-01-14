const isAuth = (request, reply, done) => {
  const { authorization } = request.headers;

  if (!authorization) {
    reply.status(401).send({ msg: "auth invalid" });
    return;
  }

  done();
};

module.exports = { isAuth };
