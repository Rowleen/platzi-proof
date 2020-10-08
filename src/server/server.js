import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === "development") {
  console.log("Enviroment: ", "Working on develop");

  const webpackConfig = require("../../webpack.config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);

  const webpackServerConfig = {
    port: ENV,
    hot: true,
  };

  app.use(webpackDevMiddleware(compiler, webpackServerConfig));
  app.use(webpackHotMiddleware(compiler));
} else if (ENV === "production") {
  console.log("Enviroment: ", "Working on production");
}

app.get("*", (request, response) => {
  response.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link href="assets/app.css" rel="stylesheet" type="text/css">
      <title>React App</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="assets/app.js" type="text/javascript"></script>
    </body>
  </html>
  `);
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error: ", "can not run the server.");
  } else {
    console.log("Server running on port 3000");
  }
});
