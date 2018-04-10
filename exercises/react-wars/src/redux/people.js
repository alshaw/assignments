import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  errMsg: ""
}

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PEOPLE":
      return {
        ...state.errMsg,
        data: action.people,
        loading: false
      }
    case "ERR_MSG":
      return {
        ...state,
        loading: false,
        errMsg: action.errMsg
      }
    default: 
      return state;
  }
}

const swapiUrl = "https://swapi.co/api/people/";

export const getPeople = () => {
  return dispatch => {
    axios.get(swapiUrl)
      .then(response => {
        dispatch({
          type: "GET_PEOPLE",
          people: response.data.results
        })
      })
      .catch(err => {
        dispatch({
          type: "ERR_MSG",
          errMsg: "Sorry, your data is unavailable."
        })
      })
  }
}

export default peopleReducer;