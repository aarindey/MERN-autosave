// CreatePostForm.js
import React, { useState } from "react";
import "../styles/createPost/CreatePostForm.css"
const CreatePostForm = ({ onPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handlePostClick = () => {
    // Validate data if needed
    if (title.trim() !== "" && content.trim() !== "") {
      // Send data to the parent component
      onPost({ title, content });

      // Clear the form
      setTitle("");
      setContent("");
    } else {
      alert("Please fill in both title and content fields.");
    }
  };

  return (
    <div className="create-post-form">
      <label>Title:</label>
      <input type="text" value={title} onChange={handleTitleChange} />

      <label>Content:</label>
      <textarea value={content} onChange={handleContentChange} />

      <button onClick={handlePostClick}>Post</button>
    </div>
  );
};

export default CreatePostForm;
