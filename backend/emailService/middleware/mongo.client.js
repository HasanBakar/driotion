require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_pass}@cluster0.rkbdlho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// mongodb+srv://driotion:$d123456$$$@cluster0.rkbdlho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);
module.exports = { client };
