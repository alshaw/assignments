const redux = require("redux");

//set up intial state
const initialState = {
  contacts: []
}

//define reducer, which will spit out a new state based on action and prevState
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.contact]
      }
    case "REMOVE_CONTACT": 
      return {
        contacts: state.contacts.filter(contact => contact.name !== action.name)
      }
    default: 
      return state;
  }
}

//actions are OBJECTS that carry information that potentially will be useful for state
//create a store
const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const addContact = contact => {
  store.dispatch({
    type: "ADD_CONTACT",
    contact
  })
}

const removeContact = name => {
  store.dispatch({
    type: "REMOVE_CONTACT",
    name
  })
}

addContact({
  name: "Allie",
  phone: "555-555-5555",
  email: "ashaw@gmail.com"
})

removeContact("Allie");


//dispatch actions
// store.dispatch(action);
// console.log(store.getState());