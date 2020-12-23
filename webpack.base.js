const filterEnv = require("./filter-env.js");
const webpackConfigAll = require("./webpack.config.all.js");
const webpackConfigPiece = require("./webpack.config.piece.js");
const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  chalk = require("chalk"),
  { merge } = require("webpack-merge");

const allProjectsBundling = "all-project-images";
let PROJECT_NAME = filterEnv.NEW_PROJECT_NAME;
let SERVICE_NAME = filterEnv.NEW_SERVICE_NAME;
let folderName = PROJECT_NAME + SERVICE_NAME;
let ENTRY_TYPE;

const filterBundlingType = () => {
  if (folderName !== allProjectsBundling) {
    ENTRY_TYPE = webpackConfigPiece.piece;
    console.log(chalk.magenta(`   ========= webpack.config.piece.js END ================ \n`));
  } else {
    ENTRY_TYPE = webpackConfigAll.all;
    console.log(chalk.magenta(`   ========= webpack.config.all.js END ================== \n`));
  }
};

const init = () => {
  filterBundlingType();
};

init();

console.log(chalk.cyan(`   ========= webpack.base.js END ======================== \n`));

module.exports = merge(ENTRY_TYPE, {
  output: {
    path: path.resolve(__dirname, `./dist`),
    filename: "./js/[name].bundle.js",
    publicPath: "../../",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader",
        },
      },

      // font-face generate
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, "./assets/fonts"),
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },

      // SCSS to CSS Compile
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, "./assets/scss"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // CSS 파일 형식을 자바스크립트에서 사용할 수 있도록 js로 변환
          "postcss-loader", // vendor prefix, Minify
          "sass-loader", // SCSS -> CSS compile
        ],
      },

      // image file
      {
        test: /\.(png|jp(e*)g|gif|ico|svg)$/,
        include: path.resolve(__dirname, "./assets/images"),
        use: {
          loader: "file-loader",
          options: {
            outputPath: "./",
            name: "[path][name].[ext]",
            // 가져올 경로에서 해당 경로만 지우고 가져온다.
            context: "assets/",
          },
        },
      },
    ],
  },
  plugins: [
    // output CSS 경로
    new MiniCssExtractPlugin({
      filename: "css/[name]/style.min.css",
    }),
  ],
});
