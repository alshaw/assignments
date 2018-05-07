import axios from "axios";

const initialState = {
  data: [],
  loading: true,
  errMsg: ""
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUOTES":
      return {
        ...state,
        data: action.quotes,
        loading: false
      };
    case "ERR_MSG":
      return {
        ...state,
        loading: false,
        errMsg: action.errMsg
      };
    default:
      return state;
  }
};

const userUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

export const getQuotes = () => {
  return dispatch => {
    axios
      .get(userUrl)
      .then(response => {
        console.log(response.data);
        dispatch({
          type: "GET_QUOTES",
          quotes: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: "ERR_MSG",
          errMsg: "Sorry, quotes are not available."
        });
      });
  };
};

export default quoteReducer;
