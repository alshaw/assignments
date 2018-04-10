import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import peopleReducer from "./people.js"

const store = createStore(combineReducers({ people: peopleReducer }),
  applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;