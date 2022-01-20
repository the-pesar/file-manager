const { MongoClient } = require("mongodb");
require("@src/plugins/colors.js");

const MongoURL = `mongodb://127.0.0.1:${process.env.MONGODB_PORT || 27017}`;
const client = new MongoClient(MongoURL);

client.connect();
const DB = client.db("file-managment");
const UsersCollection = DB.collection("users");
const AdminsCollection = DB.collection("users");

module.exports = { UsersCollection, AdminsCollection, DB };
