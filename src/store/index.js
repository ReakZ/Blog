import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "../redusers/index";
import initionalState from "./initionalState";

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(
  reducers,
  initionalState,
  compose(applyMiddleware(thunk))
);

//, reduxDevtools && reduxDevtools()

export default store;
