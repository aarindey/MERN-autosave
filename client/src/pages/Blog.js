// Blog.js
import React from "react";
import { useParams } from "react-router-dom";
import BlogEditor from "../components/BlogEditor";

const Blog = () => {
  const { id } = useParams();

  return (
    <div>
      <BlogEditor postId={id} />
    </div>
  );
};

export default Blog;
