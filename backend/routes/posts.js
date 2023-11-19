const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// Create a new post
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error("Error getting posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a specific post by ID
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    console.error("Error getting post by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a post by ID
router.put("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      { $set: req.body },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(updatedPost);
  } catch (error) {
    console.error("Error updating post by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a post by ID
router.delete("/:postId", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.postId);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(deletedPost);
  } catch (error) {
    console.error("Error deleting post by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
