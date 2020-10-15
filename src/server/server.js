import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import webpack from "webpack";
import helmet from "helmet";
import React from "react";
import { getLyric, searchTrack } from "api/server";
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import { StaticRouter } from "react-router-dom";
import { Layout } from "components";
import serverRoutes from "../frontend/routes/serverRoutes";
import getManifest from "./getManifest";

dotenv.config();

const { ENV, PORT_DEV, PORT_PRO } = process.env;
const port = ENV === "development" ? PORT_DEV : PORT_PRO;

const app = express();
app.use(
  cors({
    origin: ["*"],
  })
);

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

const setResponse = (html, manifest) => {
  const mainStyles = manifest ? manifest["main.css"] : "assets/main.css";
  const mainBuild = manifest ? manifest["main.js"] : "assets/main.js";
  const vendorBuild = manifest ? manifest["vendors.js"] : "assets/vendor.js";

  return `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="utf-8" />
          <link href="${mainStyles}" rel="stylesheet" type="text/css">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Lyrics.io</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="${mainBuild}" type="text/javascript"></script>
          <script src="${vendorBuild}" type="text/javascript"></script>
        </body>
      </html>
    `;
};

const renderApp = (request, response) => {
  const html = renderToString(
    <Layout>
      <StaticRouter location={request.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Layout>
  );

  response.send(setResponse(html, request.hashManifest));
};

app.get("/search-tracks/:search/:sort", (req, res) => {
  const { search, sort } = req.params;

  searchTrack(search, sort)
    .then(
      (response) =>
        response.status === 200 &&
        res.send(response.data.message.body.track_list)
    )
    .catch((error) => console.log(error));
});

app.get("/track-liryc/id/:id", (req, res) => {
  const { id } = req.params;

  getLyric(id)
    .then(
      (response) =>
        response.status === 200 && res.send(response.data.message.body.lyrics)
    )
    .catch((error) => console.log(error));
});

app.get("*", renderApp);

app.listen(process.env.PORT || port, (error) => {
  if (error) {
    console.log("Error: ", "can not run the server.");
  } else {
    console.log(`Server running on port ${port} - ${ENV}`);
    console.log("#########################################");
  }
});
