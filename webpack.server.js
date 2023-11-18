const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base");
const config = {
    target: "node",
    externals: [nodeExternals()],
    entry: "./src/server/index.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js"
    }
};
module.exports = merge(baseConfig, config);
