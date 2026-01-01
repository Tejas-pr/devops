const { MongoClient } = require("mongodb");

const uri = process.env.DATABASE || "mongodb://localhost:27017"; 
const client = new MongoClient(uri);

let db;

async function connectToMongoDB() {
  if (!db) {
    try {
      await client.connect();
      
      console.log("✅ Connected successfully to MongoDB");
      db = client.db("mydatabase");
    } catch (error) {
      console.error("❌ Error connecting to MongoDB:", error);
      throw error;
    }
  }
  return db;
}

module.exports = { client, connectToMongoDB };
