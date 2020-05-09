import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "../redusers/index";
import { fetchUsers, fetchPosts } from "../actions";
import initionalState from "./initionalState";

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(
  reducers,
  initionalState,
  compose(applyMiddleware(thunk), reduxDevtools && reduxDevtools())
);

store.dispatch(fetchUsers());

store.dispatch(fetchPosts());

export default store;
