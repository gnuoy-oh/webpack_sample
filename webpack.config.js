const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  SvgSpriteLoader = require("svg-sprite-loader/plugin");

// CSS Theme
module.exports = {
  // webpack에 내장된 최적화를 사용하도록 지시하는 것 (development / production / none)
  // mode: options.mode,
  mode: "development",

  // 어디를 컴파일 + 번들링 할지 지정
  entry: ["@babel/polyfill", "./src/js/index.js"],

  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name].bundle.js",
    publicPath: "/dist/",
  },

  module: {
    rules: [
      // ES6 -> ES5로 변환시키기 위해 Babel 실행으로 보임
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

      // SASS, SCSS, CSS 파일을 가져와서 컴파일 해준다.
      {
        test: /\.(sa|sc|c)ss$/,
        // include: path.resolve(__dirname, "src/scss/utils"),
        use: [
          MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // vendor prefix options (./postcss.config.js module)
          "sass-loader", // compiles Sass to CSS
        ],
        exclude: /node_modules/,
      },

      // 이미지 파일 형식을 가져온다.
      {
        test: /\.(png|jp(e*)g|gif)$/,
        include: path.resolve(__dirname, "src/images"),
        use: {
          loader: "file-loader",
          options: {
            // useRelativePath: true,
            // outputPath: "./src/images", // 대상파일을 저장할 경로 지정
            // publicPath: "./images/", // 번들링 될 상대경로 지정
            name: "images/[name].[ext]?[hash]",
          },
        },
      },

      // Icon svg sprite generate
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "src/svgImages"),
        use: ["svg-sprite-loader", "svgo-loader"],
      },
    ],
  },

  plugins: [

    // 컴파일 + 번들링한 CSS 위치를 지정한다.
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "./css/[id].css"
    }),

    // 최종 HTML 위치 지정
    new HtmlWebpackPlugin({
      title: "Project Demo",
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      filename: "./html/index.html",
      template: "./src/index.html",
    }),

    // generate svg sprite
    new SvgSpriteLoader(),

    // Clean Code
    new CleanWebpackPlugin(),
  ],
};
