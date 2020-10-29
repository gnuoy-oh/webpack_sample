const rm = require("rimraf"),
      path = require("path"),
      chalk = require("chalk"),
      ncp = require("ncp").ncp;


// ******************************************************************
// ** Default Theme === iris **
// ** assets/images-projects 에서 사용할 폴더명을 입력하세요.
// ******************************************************************
const serviceFolderName = "iris";

const assetsPath = path.resolve(__dirname, "./assets");
const destPath = path.resolve(__dirname, "./dist");

// Favicon 이미지 이동 
function moveProjectFaviconImages(){
  ncp(path.join(assetsPath, "images-projects", serviceFolderName, "/images/favicon.ico"), path.join(assetsPath, "images"), (err) => {
    if (err) {
      console.log(chalk.red(err));
      throw err;
    }

    console.log(chalk.yellow("  Third, Success copying favicon.ico files ...\n"));
  })
}

// projects 전체 이미지 이동 
function moveProjectImages(){
  ncp(path.join(assetsPath, "images-projects", serviceFolderName), assetsPath, (err) => {
    if (err) {
      console.log(chalk.red(err));
      throw err;
    }

    console.log(chalk.cyan("  Second, Success copying theme ** " + serviceFolderName + " ** files... \n"));

    moveProjectFaviconImages();
  })

  // if (serviceFolderName !== "kdn-m" || serviceFolderName !== "kdn-v") {
  //   // Copy "original/themes/login/images" to "original/images/login"
  //   ncp(path.join(assetsPath, "images-projects", serviceFolderName, "images"), path.join(assetsPath, "images"), (err) => {
  //     if (err) {
  //       console.log(chalk.red(err));
  //       throw err;
  //     }

  //     console.log(chalk.magenta("  Success copying theme " + serviceFolderName + " files ...\n"));

  //     moveProjectFaviconImages();
  //   })

  // } else {
  //   ncp(path.join(assetsPath, "images-projects", serviceFolderName), assetsPath, (err) => {
  //     if (err) {
  //       console.log(chalk.red(err));
  //       throw err;
  //     }

  //     console.log(chalk.bgCyan("   Success copying theme" + serviceFolderName + " files... \n"));

  //     moveProjectFaviconImages();
  //   })
  // }
  
}


// dist 폴더 삭제 
function deleteDistFolder(){
  rm(path.join(destPath, "*"), (err) => {
    if (err) {
      console.log(chalk.red(err));
      throw err;
    }

    console.log(chalk.gray("  First, Clean static folder...\n"));

    moveProjectImages();
  });
}


function init(){
  deleteDistFolder();
}

init();
