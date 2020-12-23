const rm = require("rimraf"),
  path = require("path"),
  chalk = require("chalk"),
  copydir = require("copy-dir");

const assetsPath = path.resolve(__dirname, "./assets");

// 2. default 이미지 이동
const moveDefaultImagesFolder = () => {
  copydir.sync(
    path.join(assetsPath, "images-projects", "iris"), assetsPath, {
      mode: true, 
      cover: true 
    },
    function (err) {
      if (err) throw err;
      console.log(chalk.red(err));
    }
  )
  console.log(chalk.yellow(`   ========= move-images.js END ========================= \n`));
}

// 1. assets/images 폴더 삭제
const deleteImagesFolder = () => {
  rm(path.join(assetsPath, "/images"), (err) => {
    if (err) {
      console.log(chalk.red(err));
      throw err;
    }
    moveDefaultImagesFolder();
  });
}

exports.deleteImagesFolder = deleteImagesFolder;