import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
import helmet from "helmet";
import React from "react";
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import { serverRoutes } from "../frontend/routes/serverRoutes";

dotenv.config();

const { ENV, PORT_DEV, PORT_PRO } = process.env;
const port = ENV === "development" ? PORT_DEV : PORT_PRO;
const app = express();

if (ENV === "development") {
  console.log("Enviroment: ", "Working on develop");

  const webpackConfig = require("../../webpack.config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);

  const webpackServerConfig = {
    port: port,
    hot: true,
  };

  app.use(webpackDevMiddleware(compiler, webpackServerConfig));
  app.use(webpackHotMiddleware(compiler));
}

if (ENV === "production") {
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable("x-powered-by");
}

const setResponse = (html) => {
  return `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="utf-8" />
          <link href="assets/app.css" rel="stylesheet" type="text/css">
          <title>React App</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="assets/app.js" type="text/javascript"></script>
        </body>
      </html>
    `;
};

const renderApp = (request, response) => {
  const html = renderToString(
    <StaticRouter location={request.url} context={{}}>
      {renderRoutes(serverRoutes)}
    </StaticRouter>
  );

  response.send(setResponse(html));
};

app.get("*", renderApp);

app.listen(port, (error) => {
  if (error) {
    console.log("Error: ", "can not run the server.");
  } else {
    console.log(`Server running on port ${port} - ${ENV}`);
  }
});
