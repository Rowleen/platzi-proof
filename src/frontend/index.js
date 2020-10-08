import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
import ClientRoutes from "./routes/ClientRoutes";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ClientRoutes />
  </Router>,
  document.getElementById("root")
);
