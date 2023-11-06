import { MongoClient, Db } from "mongodb";

// MongoDB connection URL. Replace with your actual MongoDB URL.
const mongoURL = "mongodb://127.0.0.1:27017/kanban";

// Define a variable to store the MongoDB client instance
let mongoClient: MongoClient | null = null;

// Function to connect to MongoDB
export async function connectToMongoDB(): Promise<Db> {
  if (mongoClient) {
    // If a client instance already exists, reuse it
    return mongoClient.db();
  }

  try {
    // Create a new MongoDB client
    mongoClient = new MongoClient(mongoURL);

    // Connect to the MongoDB server
    await mongoClient.connect();

    console.log("Connected to MongoDB");

    // Return the MongoDB database instance
    return mongoClient.db();
  } catch (error) {
    throw new Error(`Failed to connect to MongoDB: ${error}`);
  }
}

// Function to close the MongoDB connection
export async function closeMongoDBConnection() {
  if (mongoClient) {
    await mongoClient.close();
    console.log("MongoDB connection closed");
    mongoClient = null;
  }
}

async function main() {
  try {
    const db = await connectToMongoDB();

    // Your MongoDB operations can be performed here using the 'db' object.

    // Don't forget to close the MongoDB connection when done.
    closeMongoDBConnection();
  } catch (error) {
    console.error(error);
  }
}

main();
