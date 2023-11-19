const Post = require("../models/post");

// Controller function to update a specific post by ID
const updatePost = async (req, res) => {
  try {
    // Attempt to update the post by its ID
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      { $set: req.body },
      { new: true }
    );

    // If the post was not found, return a 404 error
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Respond with the updated post as JSON
    res.json(updatedPost);
  } catch (error) {
    // Handle errors by logging and sending an error response
    console.error("Error updating post by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export the updatePost function for use in other files
module.exports = updatePost;
