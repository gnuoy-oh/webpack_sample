const prodEnv = require("./prod.env.js");
const path = require("path"),
  chalk = require("chalk"),
  rm = require("rimraf"),
  copydir = require("copy-dir");

const assetsPath = path.resolve(__dirname, "./assets");
let NEW_PROJECT_NAME;
let NEW_SERVICE_NAME;
const eachProjectImages = ["brick", "cluster", "dashboard", "db-browser", "hdfs-browser", "meta", "kdn-m", "kdn-v", "kepco", "koti_diamond-e", "mda", "nms-plus", "suwon", "vlu-bis", "sherman", "all-project-images"];
const allBundlingCaseImages = ["brick", "cluster", "dashboard", "db-browser", "hdfs-browser", "kdn-m", "kdn-v", "meta", "sherman", "iris"];
const necessaryImages = ["brick", "sherman", "hdfs-browser"];

// 3. assets/images으로 이미지 이동
const moveAllImagesFolder = () => {
  if (eachProjectImages.some((elem) => elem === prodEnv.PROJECT_NAME)) {
    (copydir.sync(
      path.join(assetsPath, "images-projects", prodEnv.PROJECT_NAME), assetsPath, {
        mode: true, 
        cover: true 
      },
      function (err) {
        if (err) throw err;
        console.log(chalk.red(err));
      }
    ))
    console.log(chalk.green(`   ========= filter-env.js END ========================== \n`));
  } else {
    console.log(chalk.red(`   이동할 테마 이미지가 없습니다.\n`));
  }
}

// 2-2-1. 하나의 CSS + Images를 출력할 경우 
const filterProjectName = () => {
  if (prodEnv.PROJECT_NAME === "iris" && prodEnv.SERVICE_NAME) {
    prodEnv.PROJECT_NAME = prodEnv.SERVICE_NAME;
    prodEnv.SERVICE_NAME = "";
    moveAllImagesFolder();
  } else {
    necessaryImages.map((pjt) => {
      console.log(chalk.green(`   project에 추가로 필요한 이미지 폴더 -> ${pjt}\n`));
      copydir.sync(
        path.join(assetsPath, "images-projects", pjt), assetsPath, {
          mode: true,
          cover: true
        },
        function (err) {
          if (err) throw err;
          console.log('done');
        }
      )
    })
    moveAllImagesFolder();
  }
}

// 2-1-3. 모~든 이미지 all-project-images으로 이동 
const moveAllBundlingCaseImages = () => {
  allBundlingCaseImages.map((pjt) => {
    console.log(chalk.green(`   all pjt -> ${pjt}\n`));
    copydir.sync(
      path.join(assetsPath, "images-projects", pjt), path.join(assetsPath, "images-projects", "all-project-images"), {
        mode: true, // keep file mode
        cover: true // cover file when exists, default is true
      },
      function (err) {
        if (err) throw err;
        console.log('done');
      }
    )
  })
  moveAllImagesFolder();
}

// 2-1-2. 오버라이딩 방지 / 파일 누적 방지를 위해서 all-project-images 폴더 하위 Delete 
const deleteAllBundlingCaseImages = () => {
  rm(path.join(assetsPath, "/images-projects/all-project-images"), (err) => {
    if (err) {
      console.log(chalk.red(err));
      throw err;
    }
    moveAllBundlingCaseImages();
  });
}


// 2-1-1. 모든 CSS를 출력할 경우 ---> PROJECT_NAME 변경
const modifyAllBundlingCase = () => {
  prodEnv.PROJECT_NAME = "all-project-images";
  prodEnv.SERVICE_NAME = "";
  deleteAllBundlingCaseImages();
}

// 1. 모든 CSS를 출력하는지 / 하나의 CSS + Images만 출력하는지
const filterOutputCase = () => {
  (prodEnv.PROJECT_NAME && !prodEnv.SERVICE_NAME) ||
  (!prodEnv.PROJECT_NAME && !prodEnv.SERVICE_NAME) ||
  (!prodEnv.PROJECT_NAME && prodEnv.SERVICE_NAME) ?
  modifyAllBundlingCase(): filterProjectName();
}

const init = () => {
  filterOutputCase();
}

init();

NEW_PROJECT_NAME = prodEnv.PROJECT_NAME;
NEW_SERVICE_NAME = prodEnv.SERVICE_NAME;

exports.NEW_PROJECT_NAME = NEW_PROJECT_NAME;
exports.NEW_SERVICE_NAME = NEW_SERVICE_NAME;