const { client } = require("../middleware/mongo.client");

const emailCollection = client.db("emails").collection("email");
module.exports = { emailCollection };
