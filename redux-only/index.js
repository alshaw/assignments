const redux = require("redux");

const contacts = [
  {
    name: "Tommy Oliver",
    phone: "925-867-5309",
    email: "thegreenranger@powerrangers.com"
  },
  {
    name: "Allie Shaw",
    phone: "555-123-4567",
    email: "theyellowranger@powerrangers.com"
  },
  {
    name: "Buzz Lightyear",
    phone: "555-555-4567",
    email: "dog@doggydog.com"
  }
];

//set up intial state
const initialState = {
  contacts: contacts.name
}

//define reducer, which will spit out a new state based on action and prevState
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD":
      return {
        contacts: state.contacts
      }
    default: 
      return state;
  }
}

//actions are OBJECTS that carry information that potentially will be useful for state
const action = {
  type: "ADD",
  contact: {
    name: "Person McPerson",
    phone: "801-555-1234",
    email: "person@mcperson.com"
  }
}

//create a store
const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));

//dispatch actions
store.dispatch(action);
console.log(store.getState());