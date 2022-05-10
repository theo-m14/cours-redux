import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addLike } from "../actions/posts.action";
import { addUserLike } from "../actions/user.action";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLike = () => {
    const data = {
      title: post.title,
      content: post.content,
      author: post.author,
      id: post.id,
      likes: ++post.likes,
    };

    const userData = {
      pseudo: user[0].pseudo,
      likes: ++user[0].likes,
      id: user[0].id,
    };

    dispatch(addLike(data));
    dispatch(addUserLike(userData));
  };

  return (
    <div onClick={() => handleLike()}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
