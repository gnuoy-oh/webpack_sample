# B-IRIS-Design-System

IRIS Bigdata Platform 서비스들에 필요한 퍼블리싱 리소스 저장소입니다.

## 📂 폴더 구조

- CSS와 HTML은 각각의 서비스명을 기준으로 분리되어 있습니다.
- 각 서비스에 일관된 디자인 경험을 위해 기본 스타일과 컴포넌트는 `config`, `components`에서 정의하며 모든 서비스에 일괄 적용 됩니다.
- `scss` 폴더에 작성된 원본 코드가 `css` 폴더의 `<서비스명>/style.scss` 파일에서 최종 결합하여 컴파일 되는 구조입니다.

```
assets/
│
├── css/                                       // 각 서비스별 CSS 파일
│   ├── brick/
│   │   ├── style.css                          // 컴파일 결과 검토용 CSS
│   │   ├── style.min.css                      // 배포될 최종 minimize 된 CSS
│   │   └── style.scss                         // @import로만 구성된 scss 파일
│   │
│   ├── ...
│   │
│   ├── styleguide/                            // 스타일 가이드용 CSS
│   │   ├── style.css
│   │   ├── style.min.css
│   │   └── style.scss
│   │
│   ├── fontawesome-all.css                    // 폰트어썸이 필요한 프로젝트에 추가 할 CSS
│   └── guide.css                              // 가이드 html용 CSS
│
├── fonts/                                     // 폰트 파일
├── images/                                    // 이미지 파일
├── lib/                                       // 개발에 사용된 라이브러리 CSS
│
├── projects/                                  // 납품 프로젝트용 CSS
│   ├── kdn-m/
│   │   ├── css/
│   │   │   ├── brick/
│   │   │   │   ├── _kdn-m_brick.scss          // 해당 프로젝트 override용 scss
│   │   │   │   ├── style.css                  // 컴파일 결과 검토용 CSS
│   │   │   │   ├── style.min.css              // 배포될 최종 minimize 된 CSS
│   │   │   │   └── style.scss                 // @import로만 구성된 scss
│   │   │   └── sherman/
│   │   │       ├── _kdn-m_sherman.scss        // 해당 프로젝트 override용 scss
│   │   │       ├── ...
│   │   │       └── style.scss                 // @import로만 구성된 scss
│   │   └── images/                            // favicon 등 이미지 파일
│   ├── ...
│   └── vlu-bis/
│       ├── css/
│       └── images/
│
├── scss/
│   ├── components/                            // 공통 컴포넌트 스타일 정의
│   │   ├── _accordion.scss
│   │   ├──  ...
│   │   ├── _tooltip.scss
│   │   ├── _vendors--ag-theme-default.scss    // 외부 라이브러리 CSS 재정의용
│   │   └── _vendors--codemirror.scss          // 외부 라이브러리 CSS 재정의용
│   │
│   ├── config/                                // 디자인 기본 스타일 정의
│   │   ├── theme/                             // 납품 프로젝트 스타일 재정의용 파일
│   │   │   ├── _kdn-m.scss
│   │   │   └── _kdn-v.scss
│   │   ├── _colors.scss
│   │   ├── _css--body.scss
│   │   ├── _css--font-face.scss
│   │   ├── _css--typography.scss
│   │   ├── _layer.scss
│   │   ├── _spacing.scss
│   │   ├── _typography.scss
│   │   └── _vars.scss                         // IRIS 기본 테마 및 기본 변수가 정의된 파일
│   |
│   ├── layout/                                // 레이아웃 관련 스타일
│   │   ├── menu/                              // 상단 메뉴바 스타일 (IWP로 통합되며 미사용)
│   │   ├── _form-layout.scss
│   │   ├── _grid.scss
│   │   ├── _guide.scss
│   │   ├── _header.scss
│   │   ├── _layout_brick.scss
│   │   ├── _layout_top.scss
│   │   ├── _layout.scss
│   │   └── _search-table.scss
│   |
│   ├── pages/                                 // 각 서비스별 별도의 CSS가 필요한 페이지를 정의
│   │   ├── _brick.scss
│   │   ├── ...
│   │   └── _styleguide.scss
│   │
│   └── utils/
│       ├── _css--reset.scss                   // 브라우저 기본 스타일 리셋
│       ├── _helper-classes.scss               // 공통으로 자주 사용하는 클래스
│       ├── _helper-mixins.scss                // 공통으로 자주 사용하는 믹스인
│       └── _import-once.scss                  // CSS 유출 방지를 위한 믹스인
│
└── views/                                     // 각 서비스별 HTML
    ├── brick/                                 // 브릭 서비스
    │   ├── alarm_history.html
    │   ├── ...
    │   └── personal_setting-display.html
    │
    ├── ...
    │
    ├── studio/                                // 스튜디오 서비스
    │   ├── edit_area-data.html
    │   ├── ...
    │   └── studio-index.html
    │
    ├── fontawesome-example.html               // 폰트어썸이 예제
    ├── popup_guide_add.html                   // 팝업 가이드
    ├── styleguide.html                        // 스타일 가이드
    └── tooltip_guide_add.html                 // 툴팁 가이드
```

## ⚙️ 환경 설정

_환경 설정은 Visual Studio Code 사용을 전제합니다._

1. Git [다운로드](https://git-scm.com/downloads) 및 설치
2. Git config 설정

   `.gitconfig` 파일 설정을 변경하여 더욱 편리하게 이용할 수 있습니다.

   ```bash
   [alias]
   stat = status
   co = checkout
   vd = difftool
   vdiff = difftool
   up = fetch upstream
   rb = rebase origin/master
   ss = stash
   sp = stash pop
   bh = branch
   lg = log --abbrev-commit --color --date=relative --graph --pretty=format:'%C(red)%h%Creset -%C(blue)%d%Creset %s %Cgreen[%C(bold blue)<%an>%Creset'
   lg2 = log --graph --all --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset) %C(bold yellow)%d%C(reset)%n'' %C(white)%s%C(reset) %C(bold white)— %an%C(reset)' --abbrev-commit
   lg3 = log --graph --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(yollow)%d%C(reset)%n'' %C(white)%s%C(reset) %C(bold white)— %an%C(reset)' --abbrev-commit
   ll = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat
   [format]
   pretty = format:%C(red)%h%Creset %Cgreen[%cr] %C(bold blue)<%an>%Creset %n %C(blue)%d%Creset %s
   [diff]
   tool = vimdiff
   [difftool]
   prompt = false
   [color]
   diff = auto
   interactive = auto
   status = auto
   branch = auto
   [core]
   autocrlf = input
   eol = lf
   [user]
    name = 이름
    email = 이메일주소
   [filter "lfs"]
   clean = git-lfs clean -- %f
   smudge = git-lfs smudge -- %f
   process = git-lfs filter-process
   required = true
   ```

3. VSCode [다운로드](https://code.visualstudio.com/) 및 설치
4. VSCode Extension 설치
   - Live Server
   - Live Sass Compiler
   - Prettier - Code formatter
   - Auto Close Tag
   - Auto Rename Tag
   - htmltagwrap
5. Live Sass Compiler 설정

   `setting.json` 에 아래 옵션을 추가합니다.

   ```json
   "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": null
        },
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": null
        }
    ],
    "liveSassCompile.settings.generateMap": false,
    "liveSassCompile.settings.includeItems": [
        "assets/css/sherman/style.scss"
    ],
   ```

   `liveSassCompile.settings.includeItems` 옵션에 컴파일 할 scss를 **추가, 제거** 하며 컴파일 시간을 단축할 수 있습니다.
6. Prettier 설정
   
   Setting 에서 `Editor: Default Formatter` 항목을 `null` 에서 `vscode.configuration-editing` 으로 설정 해 줍니다.
   혹은, `settings.json` 파일에 아래와 같이 설정합니다.
   ```json
   {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
   }
   ```

## 코딩 컨벤션
[코딩 컨벤션](https://github.com/onlyeon/B-IRIS-Design-System/blob/master/docs/guide/coding-convention.md) 문서를 참조하세요.

## 🐙 Git Flow

[IRIS Design System 작업자를 위한 Git 사용법](https://github.com/onlyeon/B-IRIS-Design-System/blob/master/docs/guide/git-usage.md) 문서를 참조하세요.

## 📖 참고 자료

- [IRIS Design System Guide](https://docs.google.com/spreadsheets/d/1ju85dy3KAyuxAU307VY_7Aa2rtruNNz2PUS0X2ymJmo/edit#gid=0)
- [Component 설계서 Template](https://docs.google.com/spreadsheets/d/1ElghZ-jbFCFIvD2IO27a40736nTUZ0y5NODrOPcUCns/edit#gid=0)
