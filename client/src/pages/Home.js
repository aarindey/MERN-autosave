// Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../styles/Home.css";
import config from "../config.json";
import BlogCard from "../components/BlogCard";

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

  return (
    <div>
      {posts.map((post) => (
        <BlogCard post={post} setPosts={setPosts} />
      ))}
    </div>
  );
};

export default Home;
