// /redux/actions/postActions.js
import axios from 'axios';

// Define your API URL
const API_URL = 'http://localhost:5000/api/posts';

// Define your action types
export const UPDATE_POST = 'UPDATE_POST';

// Define your action creators
export const updatePost = (postData,postId) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${postId}`, postData);
    dispatch({ type: UPDATE_POST, payload: response.data });
  } catch (error) {
    console.error('Error updating post:', error);
  }
};
