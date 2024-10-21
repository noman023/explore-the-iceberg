const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 400;

app.use(require("./routes/index"));

// error handler
app.use((req, res) => {
  res.send("Page not found!");
});

// Replace with your actual MongoDB password
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3rmap.mongodb.net/Test?retryWrites=true&w=majority`;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function run() {
  try {
    // Connecting to MongoDB
    await mongoose.connect(uri, clientOptions);
    // This line confirms the connection
    console.log("Connected to MongoDB!");

    // Start the Express server after successful DB connection
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);
