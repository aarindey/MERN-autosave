// Controller function to delete a post by ID
const deletePost = async (req, res) => {
  try {
    // Attempt to find and delete the post by its ID
    const deletedPost = await Post.findByIdAndDelete(req.params.postId);

    // If the post was not found, return a 404 error
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Respond with the deleted post as JSON
    res.json(deletedPost);
  } catch (error) {
    // Handle errors by logging and sending an error response
    console.error("Error deleting post by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export the deletePost function for use in other files
module.exports = deletePost;
