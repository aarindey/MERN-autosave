// Create.js
import React from "react";
import CreatePostForm from "../components/CreatePostForm";
import axios from "axios";

const Create = () => {
  const handlePost = (postData) => {
    // Use the API URL directly from config.json
    const apiUrl = "http://localhost:5000/api/posts";

    // Send the post data to the server
    axios
      .post(apiUrl, postData)
      .then((response) => {
        console.log("Post successful:", response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <div>
      <CreatePostForm onPost={handlePost} />
    </div>
  );
};

export default Create;
