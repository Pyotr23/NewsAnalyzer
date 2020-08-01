const path = require("path");
const webpack = require("webpack");
new webpack.DefinePlugin({
    "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
});
const WebpackMd5Hash = require("webpack-md5-hash");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
    entry: {
      index: "./src/index.tsx",
      // about: "./src/about.tsx",
      // analytics: "./src/analytics"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./js/[name].[chunkhash].js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.js$/, // регулярное выражение, которое ищет все js файлы
                use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
                exclude: /node_modules/ // исключает папку node_modules
            },
            {
                test: /\.css$/i,
                use: [
                    (isDev ? "style-loader" : MiniCssExtractPlugin.loader),
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "./vendor/[name].[ext]"
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "./images/[name].[ext]",
                        esModule: false
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "index.html",
            favicon: "./public/favicon.ico"
        }),
        new WebpackMd5Hash(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorPluginOptions: {
                    preset: ["default"],
            },
            canPrint: true
        }),
    ]
}
