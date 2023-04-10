import axios from "axios";
import {
  GET_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from "./types";

// Get all posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Add a new post
export const addPost = (postData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/posts", postData);
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Edit an existing post
export const editPost = (id, postData) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/${id}`, postData);
    dispatch({
      type: EDIT_POST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete a post
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
