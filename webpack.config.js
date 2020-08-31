const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  SvgSpriteLoaderPlugin = require("svg-sprite-loader/plugin");

// CSS Theme
module.exports = {
  // webpack에 내장된 최적화를 사용하도록 지시하는 것 (development / production / none)
  // development: 빠른 빌드, 코멘트를 삭제하지 않음, 에러 메세지와 수정 사안 제안, 효율적인 디버깅 환경
  // production: 배포용으로 최적화를 위해 빌드되는데에 시간이 더 소요 되고, 불필요한 내용을 제거 
  mode: "development",

  // 어디를 컴파일 + 번들링 할지 지정
  entry: [
    "@babel/polyfill",
    "./src/js/index.js",
    "./src/scss/layout/common.scss",
    "./src/scss/utils/common.scss",
  ],

  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name].bundle.js",
    publicPath: "/dist/",
  },

  module: {
    rules: [
      // ES6 -> ES5로 변환시키기 트랜스파일링을 위해 Babel 실행
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "./src/js")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },

      // 경로에 해당하는 SASS, SCSS, CSS 파일을 가져와서 컴파일 해준다.
      // config에서는 일반 프로그래밍 순서와 다르게 거꾸로 작업을 한다. sass -> postCss -> css 변환을 순서로 진행한다.
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader, // creates style tag from JS strings
          "css-loader", // translates CSS into CommonJS , options { modules: true }
          "postcss-loader", // vendor prefix
          "sass-loader", // SCSS -> CSS compile
        ],
        exclude: /node_modules/,
      },

      // image file 
      {
        test: /\.(png|jp(e*)g|gif)$/,
        include: path.resolve(__dirname, "./src/images"),
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[ext]?[hash]",
          },
        },
      },

      // Icon svg sprite generate
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "./src/svgIcon/"),
        use: {
          loader: "svg-sprite-loader",
          options: {
            // extract: true, 
            // spriteFilename: './svgSprite/svgSprite.svg', // this is the destination of your sprite sheet
          }
        }
      },
    ],
  },

  plugins: [
    // 컴파일 + 번들링한 CSS 위치를 지정한다.
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
    }),

    // 최종 보여질 HTML 위치 지정
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
    new SvgSpriteLoaderPlugin({
    }),

    // Clean Code
    new CleanWebpackPlugin(),
  ],
};
