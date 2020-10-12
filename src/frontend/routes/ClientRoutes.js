import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "components";

import App from "../containers/App";

const ClientRoutes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default ClientRoutes;
