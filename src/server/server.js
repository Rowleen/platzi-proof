import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
import helmet from "helmet";
import React from "react";
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import { Layout } from "components";
import serverRoutes from "../frontend/routes/serverRoutes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../frontend/reducers";
import initialState from "../frontend/initialState";
import getManifest from "./getManifest";

dotenv.config();

const { ENV, PORT_DEV, PORT_PRO } = process.env;
const port = ENV === "development" ? PORT_DEV : PORT_PRO;

const app = express();

if (ENV === "development") {
  console.log("#########################################");
  console.log("Enviroment: ", "Working on develop");

  const webpackConfig = require("../../webpack.config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);

  const serverConfig = {
    port: PORT_DEV,
    hot: true,
  };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

if (ENV === "production") {
  app.use((request, response, next) => {
    if (!request.hashManifest) {
      request.hashManifest = getManifest();
    }
    next();
  });
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable("x-powered-by");
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest["main.css"] : "assets/main.css";
  const mainBuild = manifest ? manifest["main.js"] : "assets/main.js";
  const vendorBuild = manifest ? manifest["vendors.js"] : "assets/vendor.js";

  return `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="utf-8" />
          <meta name="description" content="Searcher for song's lyrics, sorting for rating, popular and unpopular songs">
          <meta name="keywords" content="searcher, lyrics, rating, popular, unpopular">
          <link href="${mainStyles}" rel="stylesheet" type="text/css">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Lyrics.io</title>
        </head>
        <body id="body">
          <div id="root">${html}</div>
          <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          "\\u003c"
        )}
      </script>
          <script src="${mainBuild}" type="text/javascript"></script>
          <script src="${vendorBuild}" type="text/javascript"></script>
        </body>
      </html>
    `;
};

const renderApp = (request, response) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();

  const html = renderToString(
    <Provider store={store}>
      <Layout>
        <StaticRouter location={request.url} context={{}}>
          {renderRoutes(serverRoutes)}
        </StaticRouter>
      </Layout>
    </Provider>
  );

  response.send(setResponse(html, preloadedState, request.hashManifest));
};

require("./routes/routes")(app);

app.get("/", renderApp);

app.listen(process.env.PORT || port, (error) => {
  if (error) {
    console.log("Error: ", "can not run the server.");
  } else {
    console.log(`Server running on port ${port} - ${ENV}`);
    console.log("#########################################");
  }
});
