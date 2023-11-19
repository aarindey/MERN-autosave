// Import the Post model
const Post = require("../models/post");

// Controller function to create a new post
const createPost = async (req, res) => {
  try {
    // Extract title and content from the request body
    const { title, content } = req.body;

    // Create a new Post instance with the extracted data
    const newPost = new Post({ title, content });

    // Save the new post to the database
    const savedPost = await newPost.save();

    // Respond with the saved post as JSON
    res.json(savedPost);
  } catch (error) {
    // Handle errors by logging and sending an error response
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export the createPost function for use in other files
module.exports = createPost;
