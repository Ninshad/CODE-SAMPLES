import React, { useState } from "react";
import { connect } from "react-redux";
import { editPost } from "../actions/postActions";

const PostEdit = ({ post, editPost, history }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost(post._id, { title, content });
    history.push("/");
  };

  return (
    <div>
      <h1>Edit post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  post: state.posts.posts.find(
    (post) => post._id === ownProps.match.params.id
  ),
});

export default connect(mapStateToProps, { editPost })(PostEdit);
