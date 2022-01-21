require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  extensions: [".js", ".ts", ".tsx"],
});

require("./server");
