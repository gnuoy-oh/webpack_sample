const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  SvgSpriteLoaderPlugin = require("svg-sprite-loader/plugin"),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 현재 작업할 서비스만 번들링하는게 조금 더 빠를 것으로 보임
  entry: {
    common: "./src/js/common.js",
    index: "./src/js/index.js",
    index2: "./src/js/index2.js",
    multiple: "./src/js/multiple.js",
    svgIcon: "./src/js/svgIcon.js",
    dbBrowser: "./src/js/db-browser.js"
  },

  optimization: {
    minimize: true,
    concatenateModules: true,
  },

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader",
        },
      },

      // font-face generate
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        }, ],
      },

      // CSS Compile
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "./src/css/db-browser"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // CSS 파일 형식을 자바스크립트에서 사용할 수 있도록 js로 변환
          "postcss-loader", // vendor prefix, Minify
        ],
      },
      
      // SCSS to CSS Compile
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, "./src/scss"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // CSS 파일 형식을 자바스크립트에서 사용할 수 있도록 js로 변환
          "postcss-loader", // vendor prefix, Minify
          "sass-loader", // SCSS -> CSS compile
        ],
      },

      // image file
      {
        test: /\.(png|jp(e*)g|gif|ico)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "./",
            name: "[path][name].[ext]",
            // 가져올 경로에서 해당 경로만 지우고 가져온다.
            context: "src/"
          },
        },
      },

      // svg icon
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "./src/svgIcon"),
        use: {
          loader: "svg-sprite-loader",
          options: {},
        },
      },
    ]

  },

  plugins: [
    new CleanWebpackPlugin({
    }),

    // html에 사용할 이미지 copy
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: './src/images', 
          to: 'images/[path][name].[ext]',
      },
      ],
    }),

    // output CSS 경로
    new MiniCssExtractPlugin({
      filename: "css/[name]/style.css",
    }),

    // generate svg
    new SvgSpriteLoaderPlugin({
      filename: "./svg/[name].[ext]",
    }),

    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name].bundle.js",
    publicPath: "../../",
  },
}