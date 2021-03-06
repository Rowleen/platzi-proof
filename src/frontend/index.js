import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
import ClientRoutes from "./routes/ClientRoutes";
import reducer from "./reducers";

const history = createBrowserHistory();

const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadedState, composeEnhancers());

delete window.__PRELOADED_STATE__;
ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <ClientRoutes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
