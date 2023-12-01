// Import necessary modules and packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path"); // Path module for working with file paths
require("dotenv").config(); // Load environment variables from a .env file

// Import routes for handling posts
const postsRouter = require("./routes/posts");

// Import database connection function from config
const { connectToDB } = require("./config/db");

// Create an instance of the Express application
const app = express();

// Set the port for the server to listen on
const PORT = process.env.PORT || 5000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse incoming JSON requests
app.use(bodyParser.json());

// Connect to the MongoDB database
connectToDB().then(() => {
  console.log(`The mongoDB is connected to port ${process.env.MONGO_URL}`);
});

// Set up routes for handling posts
app.use("/api/posts", postsRouter);

// Serve static files from the "client/build" directory
app.use(express.static(path.join(__dirname, "../client/build")));

// Handle all other routes by serving the "index.html" file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
