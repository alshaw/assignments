import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./users.js";

const store = createStore(combineReducers({ users: userReducer }), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;