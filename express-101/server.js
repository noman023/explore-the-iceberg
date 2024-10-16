const mongoose = require("mongoose");

// Replace with your actual MongoDB password
const uri =
  "mongodb+srv://noman:mongodbpass@cluster0.3rmap.mongodb.net/Test?retryWrites=true&w=majority";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function run() {
  try {
    // Connecting to MongoDB
    await mongoose.connect(uri, clientOptions);

    // This line confirms the connection
    console.log("Connected to MongoDB!");

    // Define the schema for kittens
    const kittySchema = new mongoose.Schema({
      name: { type: String, required: true },
    });

    // Create the Kitten model
    const Kitten = mongoose.model("Kitten", kittySchema);

    // Create and save a new Kitten
    const silence = new Kitten({ name: "Silence" });

    const savedKitten = await silence.save(); // Await the save operation
    console.log("Kitten saved:", savedKitten);

    // Fetch all kittens to verify the save

    const kittens = await Kitten.find();
    console.log("All saved kittens:", kittens);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}

run().catch(console.dir);
