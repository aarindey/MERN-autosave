import axios from "axios";
import React from "react";
import config from "../config.json";

const BlogCard = ({ post, setPosts }) => {
  const handleDelete = async (postId) => {
    try {
      // Send a delete request to remove the post with the specified ID
      await axios.delete(`${config.API_URL}/api/posts/${postId}`);

      // Update the local state to reflect the deletion
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <div style={{ maxHeight: "300px", overflow: "hidden" }}>
          <h4 className="card-title">{post.title}</h4>
          <hr></hr>
          <pre className="card-text" style={{ whiteSpace: "pre-wrap" }}>
            {post.content}
          </pre>
        </div>

        <div className="hstack pt-2">
          <a href={`/blog/${post._id}`} className="btn btn-primary ms-auto">
            view & edit
          </a>
          <button
            className="btn text-bg-danger m-2"
            onClick={() => handleDelete(post._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
