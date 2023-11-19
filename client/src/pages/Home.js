// Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Home.css";
import config from "../config.json";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts from the API
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

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
    <div>
      <div>
        {posts.map((post) => (
          <div className="blog-card" key={post._id}>
            <a href={"/blog/" + post._id}>
              <h2 className="card-title">{post.title}</h2>
              <pre className="card-content">{post.content}</pre>
            </a>
            {/* <button onClick={() => handleDelete(post._id)}>Edit</button> */}
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </div>

          // You can display other post details as needed
        ))}
      </div>
    </div>
  );
};

export default Home;
