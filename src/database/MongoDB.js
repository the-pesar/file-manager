const mongoose = require("mongoose");

const MongoURL = `mongodb://127.0.0.1:${process.env.MONGODB_PORT}/file-managment`;
mongoose.connect(MongoURL);

mongoose.connection.on("connected", () => {
  console.log("MongoDB with successfully connected".cSuccess);
});

mongoose.connection.on("error", (error, response) => {
  console.log(error.red);
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("users", userSchema);

module.exports = { mongoose, Users };
