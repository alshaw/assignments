import axios from "axios";

const initialItemState = {
  data: [],
  loading: true,
  errMsg: ""
}

const itemReducer = (state = initialItemState, action) => {
  switch (action.type) {
    case "GET_ITEMS": {
      return {
        ...state,
        loading: false,
        data: action.items
      }
    }
    default: return state;
  }
}

export const getItems = () => {
  return dispatch => {
    axios.get("./items")
      .then(response => {
        dispatch({ 
          type: "GET_ITEMS", 
          items: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: "ERR_MSG",
          err: "Data unavailable"
        })
      })
  }
}

export default itemReducer;