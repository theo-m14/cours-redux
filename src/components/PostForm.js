import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPosts, getPosts } from "../actions/posts.action";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer);

  const handleForm = async (event) => {
    event.preventDefault();
    if (title && content) {
      const data = {
        title,
        content,
        author: user[0].pseudo,
        likes: 0,
      };

      await dispatch(addPosts(data));
      dispatch(getPosts());
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleForm(e)}>
        <input
          type="text"
          placeholder="Titre du poste"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Postez vos pensées..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
