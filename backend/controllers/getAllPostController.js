// Controller function to get all posts
const getAllPost = async (req, res) => {
  try {
    // Retrieve all posts from the database
    const posts = await Post.find();

    // Respond with the list of posts as JSON
    res.json(posts);
  } catch (error) {
    // Handle errors by logging and sending an error response
    console.error("Error getting posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export the getAllPost function for use in other files
module.exports = getAllPost;
