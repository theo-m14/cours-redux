import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, editPost } from "../actions/posts.action";
import Like from "./Like";
import { isEmpty } from "./Utils";

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [postContent, setPostContent] = useState(post.content);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer);

  const handleEdit = (e) => {
    e.preventDefault();
    const data = {
      title: post.title,
      content: postContent,
      likes: post.likes,
      id: post.id,
      author: post.author,
    };
    dispatch(editPost(data));
    setEditToggle(false);
  };

  return (
    <div className="post">
      {!isEmpty(user[0]) && user[0].pseudo === post.author && (
        <div className="edit-delete">
          <img
            src="./icons/edit.svg"
            alt="edit"
            onClick={() => setEditToggle(true)}
          />
          <img
            src="./icons/delete.svg"
            alt="delete"
            onClick={() => {
              dispatch(deletePost(post.id));
            }}
          />
        </div>
      )}
      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {editToggle ? (
        <form className="edit-content" onSubmit={(e) => handleEdit(e)}>
          <textarea
            defaultValue={post.content}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
          <input type="submit" value="Modifier" />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
