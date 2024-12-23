const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production"
});

// module.exports = {
//     mode: "production",
//     entry: "./src/index.js",
//     output: {
//         filename: "main.js",
//         path: path.resolve(__dirname, "dist"),
//         clean: true
//     },
//     devtool: "eval-source-map",
//     devServer: {
//         watchFiles: ["./src/template.html"]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({ template: "./src/template.html" })
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: ["style-loader", "css-loader"]
//             },
//             {
//                 test: /\.html$/i,
//                 loader: "html-loader"
//             },
//             {
//                 test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
//                 type: "asset/resource"
//             }
//         ]
//     }
// };