import { createAction } from "redux-actions";
import axios from "axios";

//USER
export const registrationUser = createAction("USER_REGISTRATION");

//POSTS
export const removePost = createAction("POST_REMOVE");

//STATEUI
export const userLogin = createAction("USER_LOGIN");
export const loginUpdate = createAction("LOGIN_FORM_UPDATE");
export const passwordUpdate = createAction("PASSWORD_FORM_UPDATE");
export const userLogout = createAction("USER_LOGOUT");
export const messageUpdate = createAction("MESSAGE_UPDATE");

//CREATEPOST
export const newPostTitleUpdate = createAction("NEW_POST_TITLE_UPDATE");
export const newPostTextUpdate = createAction("NEW_POST_TEXT_UPDATE");
export const newPostCreate = createAction("NEW_POST_CREATE");

//REGISTRATION
export const closeModal = createAction("MODAL_CLOSE");
export const openModal = createAction("MODAL_OPEN");
export const modalEmail = createAction("MODAL_EMAIL_UPDATE");
export const modalNickname = createAction("MODAL_NICKNAME_UPDATE");
export const setBox = createAction("MODAL_CHEXBOX_UPDATE");
export const setErrorMessage = createAction("MODAL_MESSAGE_UPDATE");

//LIKE

export const setLike = createAction("LIKE_SET");
export const deleteLike = createAction("LIKE_DELETE");

//COMMENT
export const createComment = createAction("COMMENT_CREATE");

//EDIT_POST
export const editPostTitleUpdate = createAction("EDIT_TITLE");
export const editPostTextUpdate = createAction("EDIT_BODY");
export const editPostSubmit = createAction("EDIT_POST");
export const setEdit = createAction("EDIT_SET");

//ASYNC

//USERS
export const fetchUsersRequest = createAction("USERS_FETCH_REQUEST");
export const fetchUsersSuccess = createAction("USERS_FETCH_SUCCESS");
export const fetchUsersFailure = createAction("USERS_FETCH_FAILURE");

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersRequest());
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    dispatch(fetchUsersSuccess({ users: response.data }));
  } catch (e) {
    dispatch(fetchUsersFailure());
    throw e;
  }
};

//POSTS
export const fetchPostsRequest = createAction("POSTS_FETCH_REQUEST");
export const fetchPostsSuccess = createAction("POSTS_FETCH_SUCCESS");
export const fetchPostsFailure = createAction("POSTS_FETCH_FAILURE");

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsRequest());
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(url);
    dispatch(fetchPostsSuccess({ posts: response.data }));
  } catch (e) {
    dispatch(fetchPostsFailure());
    throw e;
  }
};
