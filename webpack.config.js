const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  SvgSpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = {
  mode: "development",

  entry: {
    index: './src/js/index.js',
    multiple: './src/js/multiple.js'
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name].bundle.js",
    publicPath: "/dist/",
  },

  module: {
    rules: [
      // es6 -> es5 로 변환. 현재 프로젝트에서는 불필요
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

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader", // css-loader로 읽은 CSS 파일들을 html 파일에서 style태그를 만들어서 head 태그 안에 넣어준다. 현재 프로젝트에서는 불필요 (분리해서 scss 사용해야 함)
          MiniCssExtractPlugin.loader, // JS에 포함된 CSS를 별도의 파일로 추출해줘서, bundle.js에 컴파일된 CSS를 포함시키지 않고 별도의 CSS 파일로 분리해서 하나의 파일로 번들링 해준다.
          "css-loader", // CSS 파일 형식을 자바스크립트에서 사용할 수 있도록 변환 / build / bundling / compile을 해준다.
          "postcss-loader", // vendor prefix
          "sass-loader", // SCSS -> CSS compile
        ],
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

  devServer: {
      port: 9000
  },

  plugins: [
    // 최종 보여질 HTML 위치 지정 -> 현재 프로젝트에서는 불필요
    new HtmlWebpackPlugin({
      title: "INDEX TITLE",
      hash: true,
      excludeChunks : ['multiple'], // entry에서 해당 리스트를 제외한 나머지
      filename: "./html/index.html",
      template: "./src/index.html",
    }),

    // 최종 보여질 HTML 위치 지정 -> 현재 프로젝트에서는 불필요
    new HtmlWebpackPlugin({
      title: "MULTIPLE TITLE",
      hash: true,
      chunks : ['multiple'], // entry에서 해당 리스트만 포함
      filename: "./html/multiple.html",
      template: "./src/multiple.html",
    }),

    // 컴파일 + 번들링한 CSS 위치를 지정한다.
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      disable : false,
      allChunks : true
    }),

    // generate svg sprite
    new SvgSpriteLoaderPlugin({
    }),

    // Clean Code
    new CleanWebpackPlugin(),
  ],
};
