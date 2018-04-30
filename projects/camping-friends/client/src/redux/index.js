import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import camperReducer from "./campers.js";

const store = createStore(
  combineReducers({ campers: camperReducer }),
  applyMiddleware(thunk)
);

store.subscribe(() => console.log(store.getState()));

export default store;
