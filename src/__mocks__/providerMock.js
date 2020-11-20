/* eslint-disable react/prop-types */
import React from "react";
import { createStore } from "redux";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import reducer from "../frontend/reducers";
import initialState from "../frontend/initialState";

const history = createBrowserHistory();
const store = createStore(reducer, initialState);

const ProviderMock = (props) => (
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>
);

export default ProviderMock;
