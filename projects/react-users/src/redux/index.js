import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./users.js";
import quoteReducer from "./quotes.js"

const store = createStore(combineReducers({ users: userReducer, quotes: quoteReducer }), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;