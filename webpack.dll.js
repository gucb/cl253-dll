const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    common: ["axios", "moment"],
    react: ["react", "react-dom", "react-router-dom"],
    react_redux: ["redux", "react-redux"],
    vue: ["vue", "vuex", "vue-router"],
  },
  output: {
    path: path.resolve(__dirname, "./dll"),
    filename: "[name].dll.js",
    library: ["[name]Dll"],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, "./dll")],
      verbose: true,
    }),
    new webpack.DllPlugin({
      context: __dirname,
      name: "[name]Dll",
      path: path.join(__dirname, "./dll/[name]_manifest.json"),
    }),
  ],
  performance: {
    hints: false,
  },
};
