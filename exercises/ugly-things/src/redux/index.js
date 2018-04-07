import { createStore, combineReducers } from "redux";

import postReducer from "./posts";

const store = createStore(combineReducers({ posts: postReducer}));
store.subscribe(() => {
  console.log(store.getState());
});

export default store;