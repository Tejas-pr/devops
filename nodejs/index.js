const express = require("express");
const { connectToMongoDB, client } = require("./db");

const app = express();
app.use(express.json());

// Root route
app.get("/", async (req, res) => {
  try {
    const db = await connectToMongoDB(); 
    const collection = db.collection("users");

    const doc = await collection.findOne();
    res.json(doc || { message: "No documents found" });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching document");
  }
});

async function startServer() {
  try {
    // connect to MongoDB once before starting server
    await connectToMongoDB();

    app.listen(3000, () => {
      console.log("🚀 The app is running on port 3000");
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1); // exit if DB connection fails
  }
}

startServer();
