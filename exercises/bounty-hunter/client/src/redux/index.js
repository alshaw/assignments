import { createStore, combineReducers } from "redux";
import bountyReducer from "./bounties";

const store = createStore(combineReducers({ bounties: bountyReducer }));
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
