import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from "../actions";
import { reject } from "lodash";
import { reducer as formReducer } from "redux-form";

const users = handleActions(
  {
    [actions.registrationUser](state, { payload }) {
      const newUser = {
        username: payload.nickName,
        email: payload.email,
        name: payload.nickName,
        id: payload.id,
        company: { name: "selfFounded" },
      };

      return [...state, newUser];
    },
    [actions.fetchUsersSuccess](state, { payload: { users } }) {
      return [...users];
    },
  },
  []
);

const posts = handleActions(
  {
    [actions.newPostCreate](state, { payload: { abuz } }) {
      return [...state, abuz];
    },
    [actions.fetchPostsSuccess](state, { payload: { posts } }) {
      return [...posts];
    },
    [actions.removePost](state, { payload }) {
      const newState = reject(state, function (x) {
        return x.id === payload;
      });

      return newState;
    },
    [actions.editPostSubmit](state, { payload }) {
      const { id } = payload;
      const index = state.findIndex((x) => x.id === id);
      const newState = [...state];
      newState.splice(index, 1, payload);
      return [...newState];
    },
  },
  []
);
const stateUI = handleActions(
  {
    [actions.userLogin](state, { payload: { login } }) {
      return {
        ...state,
        loginIs: true,
        loginName: login.loginName,
        userId: login.userId,
        loginPassword: "",
      };
    },
    [actions.loginUpdate](state, { payload }) {
      return { ...state, loginName: payload };
    },
    [actions.passwordUpdate](state, { payload }) {
      return { ...state, loginPassword: payload };
    },
    [actions.userLogout](state, { payload }) {
      return {
        ...state,
        loginIs: false,
        loginName: "",
        userId: "",
        loginPassword: "",
      };
    },
    [actions.messageUpdate](state, { payload: messageObj }) {
      return { ...state, Message: { ...messageObj } };
    },
  },

  {}
);
const newPost = handleActions(
  {
    [actions.newPostTitleUpdate](state, { payload }) {
      return { ...state, title: payload };
    },
    [actions.newPostTextUpdate](state, { payload }) {
      return { ...state, text: payload };
    },
    [actions.newPostCreate](state, { payload: { newPost } }) {
      return { ...state, text: "", title: "" };
    },
  },
  {}
);

const ModalRegistration = handleActions(
  {
    [actions.openModal](state, { payload }) {
      return { ...state, isVisible: true };
    },
    [actions.closeModal](state, { payload }) {
      return { isVisible: false, nickName: "", email: "" };
    },
    [actions.modalEmail](state, { payload }) {
      return { ...state, email: payload };
    },
    [actions.modalNickname](state, { payload }) {
      return { ...state, nickName: payload };
    },
    [actions.setBox](state, { payload }) {
      const { rule } = state;
      return { ...state, rule: !rule };
    },
    [actions.registrationUser](state, { payload }) {
      return {
        ...state,
        nickName: "",
        email: "",
        rule: false,
        errorMessage: "",
      };
    },
    [actions.setErrorMessage](state, { payload }) {
      return { ...state, errorMessage: payload };
    },
  },
  {}
);

const likes = handleActions(
  {
    [actions.setLike](state, { payload }) {
      return [...state, payload];
    },
    [actions.deleteLike](state, { payload }) {
      const { userId, postId } = payload;
      const newState = reject(state, function (x) {
        return x.postId === postId && x.userId === userId;
      });
      return newState;
    },
  },
  {}
);

const comments = handleActions(
  {
    [actions.createComment](state, { payload }) {
      return [...state, payload];
    },
  },
  {}
);

const editPost = handleActions(
  {
    [actions.editPostTitleUpdate](state, { payload }) {
      return { ...state, title: payload };
    },
    [actions.editPostTextUpdate](state, { payload }) {
      return { ...state, body: payload };
    },
    [actions.editPostSubmit](state, { payload }) {
      return { title: "", body: "", userId: null, isEdit: false, postId: null };
    },
    [actions.setEdit](state, { payload }) {
      return { ...state, isEdit: payload };
    },
  },
  {}
);
export default combineReducers({
  users,
  posts,
  stateUI,
  newPost,
  ModalRegistration,
  likes,
  comments,
  editPost,
  form: formReducer,
});
