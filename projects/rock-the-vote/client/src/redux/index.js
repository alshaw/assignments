import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import issuesReducer from "./issues";
import commentsReducer from "./comments";

const globalState = {
  issues: issuesReducer,
  comments: commentsReducer
}

const store = createStore(combineReducers(globalState), applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()));

export default store;
