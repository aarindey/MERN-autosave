// CreatePostForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import "../styles/createPost/CreatePostForm.css"
const CreatePostForm = ({ onPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
    // Set the height of the textarea to its scrollHeight
    const textarea = document.getElementById("contentTextarea");
    if (textarea) {
      // textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
    document.documentElement.style.scrollBehavior = "auto";
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
    navigate("/");
  };

  return (
    <div className="create-post-form">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={handleTitleChange}
          style={{ fontWeight: "bold", fontSize: "large" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="contentTextarea"
          value={content}
          onChange={handleContentChange}
          style={{ overflow: "hidden" }}
        />
      </div>
      <div className="hstack">
        <button className="btn btn-success ms-auto" onClick={handlePostClick}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePostForm;
