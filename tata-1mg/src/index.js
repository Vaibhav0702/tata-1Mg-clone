import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./store"
=======
import {Provider} from "react-redux";
import {store} from "./redux/store"

>>>>>>> ec632d61bf50826f9d76bedd8b015a6a28287700

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
<<<<<<< HEAD
    </Provider>
=======
      </Provider>
>>>>>>> ec632d61bf50826f9d76bedd8b015a6a28287700
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
