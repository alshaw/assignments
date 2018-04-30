import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/index.js";
import { BrowserRouter } from "react-router-dom";
// import "semantic-ui-css/components/icon.min.css";
// import "semantic-ui-css/components/popup.min.css";
// import "semantic-ui-css/components/card.min.css";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
