const rm = require("rimraf"),
  path = require("path"),
  chalk = require("chalk");
const moveImages = require("./move-images");

const destFolderName = "./dist";
const destPath = path.resolve(__dirname, destFolderName);

// 2. move-images.js 실행
const moveImagesActive = () => {
  moveImages.deleteImagesFolder();
}

// 1. dist-프로젝트 폴더 삭제
const cleanDistFolder = () => {
  rm(path.join(destPath, "*"), (err) => {
    if (err) {
      console.log(chalk.red(err));
      throw err;
    }
    console.log(chalk.white(`   ========= clean-dist.js END ========================== \n`));
    moveImagesActive();
  });
}

const init = () => {
  cleanDistFolder();
}
init();