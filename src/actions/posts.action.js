import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_LIKE = "ADD_LIKE";

export const getPosts = () => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3000/posts?_sort=id&_order=desc")
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addPosts = (data) => {
  return async (dispatch) => {
    return await axios
      .post("http://localhost:3000/posts", data)
      .then((res) => {
        dispatch({ type: ADD_POSTS, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

export const editPost = (data) => {
  return async (dispatch) => {
    return await axios
      .put("http://localhost:3000/posts/" + data.id, { ...data })
      .then((res) => {
        dispatch({ type: EDIT_POST, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (dataId) => {
  return async (dispatch) => {
    return await axios
      .delete("http://localhost:3000/posts/" + dataId)
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: dataId });
      })
      .catch((err) => console.log(err));
  };
};

export const addLike = (data) => {
  return async (dispatch) => {
    return await axios
      .put("http://localhost:3000/posts/" + data.id, { ...data })
      .then((res) => {
        dispatch({ type: ADD_LIKE, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};
