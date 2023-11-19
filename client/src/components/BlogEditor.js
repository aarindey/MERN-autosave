// BlogEditor.js
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../redux/actions/postActions";
import axios from "axios";
import "../styles/blog/BlogEditor.css";
import config from "../config.json";

const BlogEditor = ({ postId }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [autosaving, setautosaving] = useState(false);

  // Assuming you have a Redux state for the selected post
  // const selectedPost = useSelector((state) => state.selectedPost);

  // Fetch the actual title and content when the component mounts
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `${config.API_URL}/api/posts/${postId}`
        );
        const { title, content } = response.data;
        setTitle(title);
        setContent(content);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    };

    fetchPostData();
  }, [postId]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    const autosave = setTimeout(() => {
      setautosaving(true);
      dispatch(updatePost({ title, content }, postId));
      setautosaving(false);
    }, 1000);

    return () => clearTimeout(autosave);
  }, [content, dispatch, title, postId]);

  return (
    <div className="blog-container">
      <p>{autosaving ? "saving..." : "saved"}</p>
      <label className="input-title">Title:</label>
      <input
        className="input-text input-container"
        value={title}
        onChange={handleTitleChange}
      ></input>
      <label className="input-content">Content:</label>
      <textarea
        className="textarea-content textarea-container"
        value={content}
        onChange={handleContentChange}
      />
    </div>
  );
};

export default BlogEditor;
