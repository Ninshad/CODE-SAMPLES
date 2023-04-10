import {
    GET_POSTS,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
  } from "../actions/types";
  
  const initialState = {
    posts: [],
  };
  
  export default function postReducer(state = initialState, action) {
    switch (action.type) {
      case GET_POSTS:
        return {
          ...state,
          posts: action.payload,
        };
      case ADD_POST:
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
      case EDIT_POST:
        return {
          ...state,
          posts: state.posts.map((post) =>
            post._id === action.payload._id ? action.payload : post
          ),
        };
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter((post) => post._id !== action.payload),
        };
      default:
        return state;
    }
  }
  