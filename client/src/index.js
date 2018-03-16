import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers";

const Store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={Store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
