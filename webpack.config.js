const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // webpack에 내장된 최적화를 사용하도록 지시하는 것 (development / production / none)
  // mode: options.mode,
  mode: "development",

  // 어디를 컴파일 + 번들링 할지 지정
  entry: ["@babel/polyfill", "./src/js/index.js", "./src/scss/common.scss"],

  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/js")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            useRelativePath: true,
            outputPath: "./src/images", // 대상파일을 저장할 경로 지정
            publicPath: "./dist/images/", // 번들링 될 상대경로 지정
            name: "[name].[ext]?[hash]",
          },
        },
      },
    ],
  },

  plugins: [
    // 컴파일 + 번들링한 Output CSS 위치를 지정한다.
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),

    new HtmlWebpackPlugin({
      title: "Project Demo",
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      filename: "./html/index.html",
      template: "./src/index.html",
    }),

    new CleanWebpackPlugin(),
  ],
};
