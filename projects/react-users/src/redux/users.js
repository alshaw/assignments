import axios from "axios";

const initialState = {
  data: [],
  // savedUsers: [],
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
    // case "SAVE_USER":
    //   return {
    //     ...state, 
    //     savedUsers: state.savedUsers + action.user,
    //     loading: false
    //   }
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