# B-IRIS CSS, Style guide 개선안 (초안)

- [B-IRIS CSS, Style guide 개선안 (초안)](#b-iris-css-style-guide-%EA%B0%9C%EC%84%A0%EC%95%88-%EC%B4%88%EC%95%88)
    - [개요](#%EA%B0%9C%EC%9A%94)
    - [목표](#%EB%AA%A9%ED%91%9C)
    - [현재 상태](#%ED%98%84%EC%9E%AC-%EC%83%81%ED%83%9C)
        - [서버별/언어별로 사용하는 CSS가 다르다](#%EC%84%9C%EB%B2%84%EB%B3%84%EC%96%B8%EC%96%B4%EB%B3%84%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-css%EA%B0%80-%EB%8B%A4%EB%A5%B4%EB%8B%A4)
        - [일관적이지 않은 코드](#%EC%9D%BC%EA%B4%80%EC%A0%81%EC%9D%B4%EC%A7%80-%EC%95%8A%EC%9D%80-%EC%BD%94%EB%93%9C)
        - [요소간 높은 결합도와 mobius CSS의 비확장성](#%EC%9A%94%EC%86%8C%EA%B0%84-%EB%86%92%EC%9D%80-%EA%B2%B0%ED%95%A9%EB%8F%84%EC%99%80-mobius-css%EC%9D%98-%EB%B9%84%ED%99%95%EC%9E%A5%EC%84%B1)
        - [큰 규모의 CSS가 한 파일에 작성되어있다](#%ED%81%B0-%EA%B7%9C%EB%AA%A8%EC%9D%98-css%EA%B0%80-%ED%95%9C-%ED%8C%8C%EC%9D%BC%EC%97%90-%EC%9E%91%EC%84%B1%EB%90%98%EC%96%B4%EC%9E%88%EB%8B%A4)
        - [기타](#%EA%B8%B0%ED%83%80)
    - [학습한것](#%ED%95%99%EC%8A%B5%ED%95%9C%EA%B2%83)
        - [HTML/CSS](#htmlcss)
        - [git](#git)
        - [Sass - CSS Preprocessor](#sass---css-preprocessor)
        - [CSS 방법론](#css-%EB%B0%A9%EB%B2%95%EB%A1%A0)
        - [live style guide, Coding Convention 자료조사](#live-style-guide-coding-convention-%EC%9E%90%EB%A3%8C%EC%A1%B0%EC%82%AC)
    - [개선 방안](#%EA%B0%9C%EC%84%A0-%EB%B0%A9%EC%95%88)
        - [디자인](#%EB%94%94%EC%9E%90%EC%9D%B8)
        - [퍼블리싱](#%ED%8D%BC%EB%B8%94%EB%A6%AC%EC%8B%B1)
        - [기대효과](#%EA%B8%B0%EB%8C%80%ED%9A%A8%EA%B3%BC)
        - [고려사항](#%EA%B3%A0%EB%A0%A4%EC%82%AC%ED%95%AD)
        - [예시](#%EC%98%88%EC%8B%9C)
            - [1. CSS 부분화를 통한 디자인 반영율 향상](#1-css-%EB%B6%80%EB%B6%84%ED%99%94%EB%A5%BC-%ED%86%B5%ED%95%9C-%EB%94%94%EC%9E%90%EC%9D%B8-%EB%B0%98%EC%98%81%EC%9C%A8-%ED%96%A5%EC%83%81)
            - [2. CSS 코드 개선](#2-css-%EC%BD%94%EB%93%9C-%EA%B0%9C%EC%84%A0)
            - [3. Sass를 활용한 공통값 표준화](#3-sass%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B3%B5%ED%86%B5%EA%B0%92-%ED%91%9C%EC%A4%80%ED%99%94)
    - [작업 항목/단계](#%EC%9E%91%EC%97%85-%ED%95%AD%EB%AA%A9%EB%8B%A8%EA%B3%84)
        - [1차](#1%EC%B0%A8)
        - [2차](#2%EC%B0%A8)
    - [참고자료](#%EC%B0%B8%EA%B3%A0%EC%9E%90%EB%A3%8C)

## 개요

* B-IRIS의 CSS와 디자인(Style Guide)을 효율적으로 관리하기 위한 개선안
* 최종 수정일: 18-08-04

## 목표

* 디자인 에셋과 퍼블리싱 코드를 개선해 현재 개발과 향후 유지보수의 효율성을 높인다
* 협업자 `디자이너`, `퍼블리셔`, `개발자`와 협의된 규칙을 만들어 작업시 커뮤니케이션을 용이하게 한다
* 디자인과 코딩 결과물의 차이를 최소화한다

## 현재 상태

### 서버별/언어별로 사용하는 CSS가 다르다

서버 별, 언어별, 퍼블리셔 작업 항목, 개발자 추가 항목으로 분산되어 있다


| 서버명     | 분류   | 위치                                                 | 비고          |
| ------- | ---- | -------------------------------------------------- | ----------- |
| sherman | HTML | sherman\src\main\webapp\WEB-INF\views\ ..          |             |
|         | CSS  | sherman\src\main\resources\static\css\ko\style.css | 퍼블리셔 작업, 국문 |
|         |      | sherman\src\main\resources\static\css\ko\dev.css   | 개발자 추가, 국문  |
|         |      | sherman\src\main\resources\static\css\en\style.css | 퍼블리셔 작업, 영문 |
|         |      | sherman\src\main\resources\static\css\en\dev.css   | 개발자 추가, 영문  |
| Brick   | HTML | Brick\src\server\views\ ..                         |             |
|         | CSS  | Brick\public\lib\mobigen\css\ko\style.css          | 퍼블리셔 작업, 국문 |
|         |      | Brick\public\lib\mobigen\css\en\style.css          | 퍼블리셔 작업, 영문 |
|         |      | Brick\public\css\ko\dev.css                        | 개발자 추가, 국문  |
|         |      | Brick\public\css\en\dev.css                        | 개발자 추가, 영문  |

* 변경된 디자인 스타일을 모든 서버에 일괄 반영할 수 없다
* 공통 요소 수정이 한번에 반영되지 않아 비슷한 내용의 수정 이슈가 중복 발생한다
* **`dev.css`의 필요** 개발자가 필요할 때 코드를 추가할 수 있다
    * 단점: 퍼블리셔가 관리하는 최종 CSS 파일에 추가되지 않을 경우 임시 파일이라 볼 수 있다
    * 개선: dev.css에 추가된 항목을 퍼블리셔가 관리하는 CSS파일에 최종 반영 시킨다
* **`en.css`의 필요** 언어가 변경되어 생기는 레이아웃 오류를 수정할 수 있다
    * 단점: CSS를 두 벌로 관리해야 한다, CSS가 언어에 종속된다
    * 개선: 작은 단위의 요소가 고정적인 width를 가지지 않도록 유의한다

### 일관적이지 않은 코드

* icon구현을 위해 `font-icon` 과 `image-icon`를 혼용하고 있어 유지보수에 비효율적임
* disalbed 상태를 제어하는 방식을 두 가지로 병행 사용중 (Naming Convention이 지켜지지 않음)
    * 애트리뷰트 선택자 `.mu-btn[disabled]`, 
    * 자식 선택자에 클래스명 추가 `mu-btn.disabled`
* 메뉴명, 콘텐츠 이름을 딴 클래스명
    * 구조를 재활용할 때 의미론적 가치가 없어진다
    * 중복 코드가 많이 생긴다

### 요소간 높은 결합도와 mobius CSS의 비확장성

* mobius의 기본 css

    IRIS가 Base로 사용하고있는 mobius의 [CSS Rule](http://mobius.mobigen.com/#/about) 에 따라 `common.css`은 수정이 불가능하다<br/>
    UI 기본 element, color, typograpgy는 1차로 mobius의 `common.css`에 선언, 2차로 `style.css`에서 재선언 하고 있다

    ```css
    /* common.css ui element - button 정의 */
    .mu-btn{display:inline-block;height:30px;line-height:30px;padding:0 8px;background-color:#98a9c4;border:0;font-weight:normal;color:#fff;cursor:pointer}
    .mu-btn.mu-pop-btn{background-color:#75a3e4}
    .mu-btn > *{color:#fff}
    .mu-btn:hover{background-color:#4d88db;color:#fff}
    .mu-btn:active,.mu-btn.active{background-color:#2f5994;outline:0}
    .mu-btn[disabled],.mu-btn[disabled]:hover{background-color:#f5f5f5;cursor:no-drop;color:#bbb}
    .mu-btn[disabled] > *,.mu-btn[disabled]:hover > *{color:#bbb}
    ```

    위 `common.css`에 버튼의 색상, 높이를 정의하고 있다. 이는 디자인에 따라 변경되는 값이다. <br/>
    `style.css`에서 IRIS의 디자인에 맞춰 재정의하고 있는 방식은 아래와 같다

    ```css
    /* style.css button 재설정 */
    .mu-btn{height:26px;border:1px solid #ced3d9;background:#fff;font-weight:500;color:#505050;}
    .mu-btn:hover{background:#f6f6f6;box-shadow:0 1px 1px rgba(0, 0, 0, .2);color:#505050;}
    .mu-btn:active, .mu-btn.active{border:1px solid #ced3d9;background:#e9edf2;box-shadow:inset 0 1px 2px rgba(0, 0, 0, .1);color:#505050;}
    .mu-btn[disabled]{border:1px solid #e5e5e5;background:#f6f6f6;color:#ced3d9;}
    ...
    .pivotSetting .mu-btn{height:26px;padding:0;}
    .pivotSetting .mu-item-group:hover .mu-btn{background:#f6f6f6;}
    .pivotSetting .mu-item-group .mu-btn{float:none;width:auto;min-width:29px;}
    .pivotSetting .mu-formbox .mu-btn-group.btn-w .mu-btn{min-width:34px;}
    ```

    UI elements 외에 디자인의 바탕이 되는 typography도 재선언이 필요하다

    ```css
    /* common.css에서 font 설정 */
    body,h1,h2,h3,h4,h5,h6,input,button,textarea,select{color:#010101;line-height:1.5;font:12px "돋움",Dotum,Verdana,Arial,AppleGothic,sans-serif;}

    /* style.css에서 font 재설정 */
    body, body *, .mu-title, .mu-dialog-head .title, .mu-datepicker input, .mu-pagination li a {font-family: 'notokr', sans-serif;}
    body, h1, h2, h3, h4, h5, h6, input, button, textarea, select, a{font-weight:400;color:#505050;}
    ```

    > 위 코드들은 수정 불가능한 `common.css`에서 고정 값으로 선언된 스타일 때문에 `style.css`에서 재선언하며 비효율적으로 작성되는 예시들이다.  `Sass`의 `Variable`, `mixin` ..을 도입해 공통 요소를 효율적으로 관리할 수 있다

* 계층화된 선택자를 많이 사용해 [명시도(specificity)](https://developer.mozilla.org/ko/docs/Web/CSS/Specificity) 높아 재사용이나 이동이 어렵다
    ```css
    .add-priv-dialog .mu-panel.table-list .mu-panel-head .selectBox .mu-selectbox .mu-list > li{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    ```
    * 선택자의 깊이는 최대 4개까지 권장된다

### 큰 규모의 CSS가 한 파일에 작성되어있다

* 내부 구조 파악이 어렵다
* 수정해야 할 요소를 찾기 어렵다
* 유지보수 내용이 타임라인순으로 overriding 되어 있다

### 기타

* single line으로 작성된 CSS
    * 키클래스, 속성의 가독성이 떨어진다
* [mobius의 Rule Guide](http://mobius.mobigen.com/#/about?scrollTo=sub03)가 지켜지지 않았다
    * 여러 작업자가 참여했기 때문에 작성법이 제각각이다
* overriding, 계속해서 선택자를 깊게하거나 클래스를 추가하는 방식이 아니라 수정하고자 하는 요소의 클래스명에 직접 수정해도 문제가 생기지 않을 정도로 클래스명을 구체화 시켜아한다고 생각한다

## 학습한것

### HTML/CSS

[HTML 자료](hhttps://docs.google.com/document/d/12Sa6S42BY1EwoXNKx2h4tIjQk1fjdPc7NrAbyWdXW-Q/edit?usp=sharing), [CSS 자료](https://docs.google.com/document/d/1q3hsAeha-laZgqNcF4sMJvttBHr2S37jA44D9WHRfUo/edit?usp=sharing)

### git

[git 자료](https://docs.google.com/document/d/1rs8kl_wEHP6o2Ng2iZYEInt-Mx5ZtcmMvSkXxAIne0o/edit?usp=sharing)

### Sass - CSS Preprocessor

[Sass 자료](https://docs.google.com/document/d/1i28g01Qa5F76vhfxsJ9yX5S5v1xhgxqtzZnvz4HhLeY/edit?usp=sharing)바탕으로 내용 정리할 예정

### CSS 방법론

[CSS 방법론 자료](https://docs.google.com/document/d/1jsoRjC291z0Sa1ShdRKAP3IYeKlt1RqW2TXq-88JTEM/edit?usp=sharing)바탕으로 내용 정리할 예정

### live style guide, Coding Convention 자료조사

* [Carborn design system](http://carbondesignsystem.com/) IBM Cloud products를 위한 디자인 시스템
* [Ant design system](https://ant.design/components/button/) 데스크톱 응용 프로그램 개발 효율성을 위한 디자인 시스템
* [Airbnb CSS/Sass Style guide](https://github.com/airbnb/css) Airbnb의 CSS와 Sass에 대한 합리적인 접근법
* [Primer](https://styleguide.github.com/primer/), [git](https://github.com/primer/primer) GitHub의 디자인 시스템
* [Bootstrap](http://getbootstrap.com/docs/4.1/getting-started/introduction/), [git](https://github.com/twbs/bootstrap) Bootstrap
* [Lonely planet style guide](https://rizzo.lonelyplanet.com/styleguide/design-elements/colours), [git](https://github.com/lonelyplanet/rizzo) Lonly planet의 스타일 가이드
* [Code Guide by Mark Otto](http://codeguide.co/) Bootstrap의 창시자 Mark Otto가 작성한 HTML 및 CSS 개발을위한 코드 가이드
* [NHN Coding Convention](http://nuli.navercorp.com/sharing/fe/coding) 마크업 언어(HTML/CSS)를 위헤 작성된 NHN의 코딩 규약

## 개선 방안

### 디자인

* 디자인 스타일 가이드에서 모듈화/변수화 할 수 있는 요소 정리

```md
* Style
    * Color
    * Typography
    * Icons
* Components
    * Button
    * Checkbox
    * ...
* Layout Templates
```

* PSD 파일을 XD 형식으로 변경

    [Adobe XD](https://www.adobe.com/kr/products/xd.html): UX/UI 설계 전문 툴로 lo-fi부터 hi-fi까지 작업 가능한 프로토타이핑 툴

### 퍼블리싱

* 서버별로 분산된 CSS를 통합 및 image, font 등의 asset을 최신 디자인으로 반영한다
* mobius에 정의된 고정값 스타일을 탈피해 유지보수성을 높인다
* CSS파일을 변수화함으로써 기본 스타일을 하나의 Sass파일로 제어하고 디자인 반영율과 완성도를 높인다
* [폰텔로](http://fontello.com/)등 서비스를 활용해 커스텀 아이콘 폰트 제작, 아이콘 에셋의 유지보수성을 높인다
* CSS 가이드 및 개선사항을 문서화해 다른 작업자도 쉽게 커뮤니케이션 할 수 있도록 한다

### 기대효과

* CSS의 부분화 `Sass: partial, import`로 큰 규모의 CSS를 효율적으로 관리
* 의미있는 최소한의 코드와 에셋으로 현재 개발과 향후 유지보수가 용이
* Style guide 문서화로 작업을 예상가능케 함으로써 커뮤니케이션 원활
* 디자인 시안을 프로토타이핑 해 아이디어의 빠른 검증과 결정 기대
* 코딩 결과물 디자인 반영도 향상

### 고려사항

* 현재 사용중인 CSS 에셋의 사용/삭제 여부는 개발자와 논의한다
  * 사용하지 않는 CSS, 에셋 찾아주는 프로그램이 있는가? - Y
    > * 🛠 [UnCSS Online](https://uncss-online.com/)
    > * 🛠 [PurifyCSS](https://github.com/purifycss/purifycss)
    > * 🛠 [Chrome DevTools Coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage)
* 지속적 관리가 가능한가? 혹은 추후 다른 작업자와 협업할 가능성? - Y
  * `HTML`,`CSS`,`Sass`,`Git` 필요
  * 작업 가이드 문서 정리
* 앞으로 같은 스타일의 다른 메뉴/레이아웃이 추가될 가능성? - Y

  * 확장성 고려한 마크업, CSS partials, 네이밍 규칙의 필요
* 분산된 서버마다 각각의 CSS가 필요한가? - Y
  * Brick에 사용하는 네비게이션에 연관된 CSS는 Sherman이나 iris-web-db가 포함할 필요는 없으며, mu-grid, ag-grid또한 마찬가지
  * IRIS의 공통 요소 (예. color, typhogrophy, spacing, reset, normalizer )를 `공통.css`로 관리해 모든 서버에 일관된 규칙을 적용한다
  * 서버마다 특이성을 가지는 요소 (예. Brick의 Navigation, ag-grid, mu-grid )를 `특성명.css`로 관리해 필요한 서버에 import해 사용한다
* Sass파일을 개별 레파지토리로 독립시켜 관리할것인가? -Y

  * https://github.com/onlyeon/B-IRIS-Design-System
* 디자인 파일(xd)를 다른 작업자가 작업할 땐?

  * 디자인 시안의 스펙을 수치화하는 [Zeplin](https://zeplin.io/)으로 협업 가능 (XD와 마찬가지로 [제한적 무료이용](https://zeplin.io/pricing) 가능)
* Sass 도입해 CSS를 개선하면, mobius의 CSS또한 개선이 필요하다 - Y

    * mobius는 2016년 12월 27일 / Ver 0.4.2이후 디자인 및 CSS의 업데이트가 멈춰있으며 추후 업데이트 계획은 불투명한 상황이다<br/>Sass도입시 IRIS가 프레임워크로 사용하고 있는 mobius의 고정적인 CSS가 큰 이슈가 된다<br/>이에, **mobius의 CSS `commom.css`, `layout_top.css`등은 개선안의 `base` 범주에 넣어 IRIS만의 `base`를 설계**한다<br/>1차로 IRIS의 `base`범주에 속한 스타일로 아키텍쳐 변경 <br/>2차로 non-semantic한 네이밍, 중복 코드 등을 개선한다
* Brick에서 iframe으로 불러오는 형식이기 때문에 각각의 서버마다 독립적이고 개별적인 클래스명이 필요하다
    * 네이밍은 개발자가 작업한 서비스명 등을 따른다
    * CSS네이밍 원칙에 어긋나는 Rule은 재정의한다 (예. carmelCase는 CSS에 적합하지 않음)

### 예시

#### 1. CSS 부분화를 통한 디자인 반영율 향상

* `/config` 
    * 공통 스타일과 프로젝트의 기본적인 디자인 설정
    * typography, color, icon 등 IRIS 프로젝트의 디자인을 정의한다. 추후 디자인 컨셉이 변경되면 해당 폴더의 color variable, icon style만 바뀌면 될 정도로 유연해야한다
    * vendor code, helpers, mixins, variables, and general selector styles (body, h1, p, a, etc.) reset 등 기능적인 요소
* `/components` 
    * 재사용 가능하고 모든 레이아웃(컨테이너와 블록)에서 사용 가능한 요소 스타일 설정
* `/layouts`
    * 기본적인 구조와 컨테이너, 블록을 구성하는 스타일 설정
* `/pages`
    * 별도의 스타일이 필요한 페이지를 정의하는 CSS
* `/vendors`
    * IRIS가 사용하고 있는 외부 CSS
* `services/서비스명.scss`
    * 서버, 서비스별 구분하여 각각의 CSS를 포함한다
    * 레이아웃/디자인이 특별한 메뉴로 한정하여 사용한다

추후 서비스 분리 등 고려사항 때문에 각 서버마다 사용하는 CSS를 분리시키고자 한다.
결과적으로 `css/service-name/style.css`는 각자 하나의 scss파일을 `@import`하고 있어 `scss/` 디렉토리의 파일을 수정하면 모든 서비스 CSS에 한번에 반영되는 효과를 볼 수 있다.

```scss
assets/
├── fonts/
└── images/

css/                          // 각 서비스별 CSS 파일
├── brick/
│   ├── style.css             // 컴파일 결과 검토용 CSS
│   ├── style.min.css         // 배포될 최종 minimize 된 CSS
│   └── style.scss            // @import로만 구성된 scss 파일
├── iris-web-cluster/
│   ├── style.css
│   ├── style.min.css
│   └── style.scss
└── ...

scss/
├── config/                    // 폰트, typographical rhythm, color palette 등 디자인 구성을 적용하는 변수와 믹스인 정의
│   ├── _config.scss
│   ├── _typography.scss
│   ├── _color.scss
│   ├── _spacing.scss
│   └── ...
|
├── components/               // 콤포넌트와 관련된 특정 스타일
│   ├── _buttons.scss
│   ├── _dropdown.scss
│   ├── _input.scss
│   └──...  
|
├── layout/                  // 레이아웃, 블록을 구분하는 스타일
│   ├── _header.scss
│   ├── _navigation.scss
│   ├── _tooltip.scss
│   ├── _dialog.scss
│   ├── _modal.scss
│   └── ...
│
├── pages/                    // 별도의 CSS가 필요한 페이지를 정의하는 CSS
|   ├── brick.scss
│   ├── sherman.scss
│   └── ...
│
├── utils/
│   ├── _utils.scss
│   ├── _init.scss            // reset/normalization
│   ├── _mobious.scss         // 공통값 표준화 위해 의존성 줄여 제거할 예정
│   ├── _variables.scss       // Sass Variables
│   ├── _functions.scss       // Sass Functions
│   ├── _mixins.scss          // Sass Mixins
│   ├── _helpers.scss         // Class & placeholders helpers
│   └── ...
│
└── vendors/
    ├── _ag-grid.scss
    ├── _theme-fresh.scss
    └── ...
```

`css/service-name/style.css`은 각각의 화면에 필요한 scss파일을 갖고 있는다

```scss
css/brick/style.css
// -----------------------------------------
// common
// -----------------------------------------
@import '../../scss/config/config';
@import '../../scss/utils/utils';
// -----------------------------------------

/* layouts */
@import '../../scss/layout/header';
@import '../../scss/layout/navigation';

/* components */
@import '../../scss/components/buttons';
@import '../../scss/components/dropdown';
@import '../../scss/components/input';

/* pages */
@import '../../scss/pages/brick.scss';
```

#### 2. CSS 코드 개선

> 협업을 위한 Coding Convention / guide 필요

* Single-line을 Multi-line 방식으로 변경하여 코드 가독성을 높인다
    * 키 선택자를 확인하기 유용하다
    * 선언된 속성과 값을 읽기 편리하다
    * Sass 적용시 Nesting 기능을 적용하여 반복되는 선택자를 생략할 수 있다

    ```css
    /* before */
    .mu-selectbox .mu-value{background:#fff;border:1px solid #ced3d9;height:26px;padding:0 30px 0 8px;color:#505050;}
    .mu-selectbox .mu-value:hover, .mu-selectbox .mu-value:active{border:1px solid #ced3d9;color:#505050;}
    .mu-selectbox.disabled > .mu-value, .mu-selectbox.disabled > .mu-value:hover{background:#e9e9e9;border:1px solid #d9d9d9;color:#cacaca;}
    ```
    ```css
    /* after: multi-line으로 개선 */
    .mu-selectbox .mu-value {
        background: #fff;
        border: 1px solid #ced3d9;
        height: 26px;
        padding: 0 30px 0 8px;
        color: #505050;
    }
    .mu-selectbox.disabled>.mu-value,
    .mu-selectbox.disabled>.mu-value:hover {
        background: #e9e9e9;
        border: 1px solid #d9d9d9;
        color: #cacaca;
    }
    ```
    ```scss
    /* after: Sass로 개선 (컴파일 결과는 위 multi-line과 같음) */
    .mu-selectbox{
        .mu-value {
            height: 26px;
            padding: 0 30px 0 8px;
            background: #fff;
            border: 1px solid #ced3d9;
            color: #505050;
        }
        &.disabled>.mu-value,
        &.disabled>.mu-value:hover {
            background: #e9e9e9;
            border: 1px solid #d9d9d9;
            color: #cacaca;
        }
    }
    ```

* 상태 `status`를 제어하는 방식은 class로 `is-` prefix를 활용한다
    * 클래스는 CSS 외에도 javascript에서도 사용한다. 특히 상태를 표현할 때 주로 쓰는데, 요소에 클래스를 toggle하여 보여주거나 숨기는 기능을 구현하면서 `.is-active` 클래스명을 쓰는 것을 예로 들 수 있다.
    * SMACSS 참고

    ```css
    /* before: 애트리뷰트 선택자와 클래스명 disabled가 혼용되고 있다 */
    .mu-btn[disabled], .mu-btn[disabled]:hover{
        background:#384250;
        color:#536783;
    }
    .anomalySetting .mu-btn.disabled{
        background:#384250;
        color:#7b90ad;
    }
    ```
    ```css
    /* after: is- prefix 사용한 클래스명으로 구분한다 */
    .mu-btn.is-disabled, .mu-btn.is-disabled:hover{
        background:#384250;
        color:#536783;
    }
    .anomalySetting .mu-btn.is-disabled{
        background:#384250;
        color:#7b90ad;
    }
    ```

#### 3. Sass를 활용한 공통값 표준화

* Variable
* Mixin

## 작업 항목/단계

### 1차

**목표: Sass 도입해 공통요소를 효과적으로 관리하고 현재 적용 수준 유지**

* 콤포넌트, 기본 디자인 스타일 PSD에서 XD로 변경 작업 [현재 작업중인 XD파일 공유](https://xd.adobe.com/view/6dd01531-72da-44b1-6a20-fc28d1247865-1be1/?fullscreen) (비밀번호 문의는 [강희연](hykang@mobigen.com)에게)
* mobius 스타일 의존성 (점진적) 제거 / IRIS만의 유동성 있는 `common.css` 재정의
* CSS 부분화(partial)와 변수화(variable)로 공통요소를 정의한다
    * 디자인 공통요소 : 프로덕트의 Skin과 Look and Feel을 제어한다. 추후 디자인 컨셉 변경시 해당 요소의 변수만 제어할 수 있다
    * 코드 공통요소 : reset, nomalizer, mixins, helper 및 외부 라이브러리의 css 등
* 불필요한 CSS 파일 제거, 서버별로 분리된 CSS 통합
* File Structure에 따라 파편화하며 중복/불필요한 코드 제거
* B-IRIS icon font 제작

### 2차

**목표: CSS양을 줄이고 지속적으로 관리되는 Coding Convention으로 유지보수 효율성 향상**

* Sass의 mixin 등 활용한 CSS 개선(성능향상)
  * [Compass](http://compass-style.org/examples/), [Burbon](https://www.bourbon.io/docs/latest/) 참고
* Components(`input`, `layout`, `page layout` 등)의 재사용성 향상
    * 여러 페이지에서 재사용되는 기본 Components에 대해 정의 및 부분화
        * button
        * alret
        * input
        * serch
        * ...
* IRIS 퍼블리셔 작업자가 참고할 수 있는 Coding convention 수립
  * 협업을 위해 디자이너/개발자들도 충분히 납득 가능한 수준으로 정리한다
* Design/CSS 문서화로 유지보수성 향상
  * 1차, 2차 작업하며 동시에 진행한다
  * live style guide 구현?

## 참고자료

> [Maintainable CSS](https://maintainablecss.com/chapters/introduction/) 모듈화되고 확장 가능하며 유지 보수가 가능한 CSS를 작성하는 방식
> [CSS Guideline](https://cssguidelin.es/)
> [The Nine Principles Of Design Implementation](https://www.smashingmagazine.com/2017/08/nine-principles-design-implementation/)
> [Sass: Directory Structures That Help You Maintain Your Code](http://vanseodesign.com/css/sass-directory-structures/)
> [Jump Start Sass: Architecture in Sass](https://www.sitepoint.com/architecture-in-sass/) | [[번역]]()