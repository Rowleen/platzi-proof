require("ignore-styles");
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("asset-require-hook")({
  extensions: ["png", "jpg", "gif"],
  name: "/assets/[hash].[ext]",
});

require("./server");
