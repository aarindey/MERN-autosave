const express = require("express");
const router = express.Router();
const getAllPost = require("../controllers/getAllPostController");
const getPost = require("../controllers/getPostController");
const updatePost = require("../controllers/updatePostController");
const deletePost = require("../controllers/deletePostController");
const createPost = require("../controllers/createPostController");

router.post("/", createPost);           // create post
router.get("/", getAllPost);            // get all post
router.get("/:postId", getPost);        // get post
router.put("/:postId", updatePost);     // update post
router.delete("/:postId", deletePost);  // delete post

module.exports = router;
