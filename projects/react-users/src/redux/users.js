import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  errMsg: ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state, 
        data: action.users,
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

const userUrl = "https://randomuser.me/api/?results=20";

export const getUsers = () => {
  return dispatch => {
    axios.get(userUrl)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: "GET_USERS",
          users: response.data.results
        })
      })
      .catch(err => {
        dispatch({
          type: "ERR_MSG",
          errMsg: "Sorry, users are not available."
        })
      })
  }
}

export default userReducer;