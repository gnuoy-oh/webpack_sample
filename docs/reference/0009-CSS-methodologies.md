# CSS 방법론 스터디
- [CSS 방법론 스터디](#css-%EB%B0%A9%EB%B2%95%EB%A1%A0-%EC%8A%A4%ED%84%B0%EB%94%94)
  - [OOCSS](#oocss)
    - [핵심개념](#%ED%95%B5%EC%8B%AC%EA%B0%9C%EB%85%90)
    - [장점](#%EC%9E%A5%EC%A0%90)
    - [단점](#%EB%8B%A8%EC%A0%90)
  - [SMACSS](#smacss)
    - [핵심개념](#%ED%95%B5%EC%8B%AC%EA%B0%9C%EB%85%90)
  - [BEM(Block-Element-Modifier)](#bemblock-element-modifier)
    - [핵심 개념](#%ED%95%B5%EC%8B%AC-%EA%B0%9C%EB%85%90)
    - [예시](#%EC%98%88%EC%8B%9C)
    - [파일 구조](#%ED%8C%8C%EC%9D%BC-%EA%B5%AC%EC%A1%B0)
    - [장점](#%EC%9E%A5%EC%A0%90)
    - [단점](#%EB%8B%A8%EC%A0%90)
  - [7-1 Pattern](#7-1-pattern)
    - [핵심 개념](#%ED%95%B5%EC%8B%AC-%EA%B0%9C%EB%85%90)
    - [파일 구조](#%ED%8C%8C%EC%9D%BC-%EA%B5%AC%EC%A1%B0)
  - [ITCSS](#itcss)
    - [핵심 개념](#%ED%95%B5%EC%8B%AC-%EA%B0%9C%EB%85%90)
    - [파일 구조](#%ED%8C%8C%EC%9D%BC-%EA%B5%AC%EC%A1%B0)
  - [Atom Design](#atom-design)
    - [핵심 개념](#%ED%95%B5%EC%8B%AC-%EA%B0%9C%EB%85%90)
    - [파일 구조](#%ED%8C%8C%EC%9D%BC-%EA%B5%AC%EC%A1%B0)
  - [종합](#%EC%A2%85%ED%95%A9)


## [OOCSS](https://en.bem.info/methodology/key-concepts/)

[OOCSS (Object Oriented CSS)](https://en.bem.info/methodology/key-concepts/)의 목적은 코드 재사용성을 높이고, 궁극적으로는 더 빠르고 효율적이며 유지보수하기 용이한 스타일시트를 만드는 것이다. **결합도 낮추기(decoupling)**, **단일 책임의 원칙(single responsibility principle)**, **캡슐화(encapsulation)** 를 강조하는 방법론이다.

OOCSS는 스타일의 특징(feature)에 따라 범주를 분리하여 구조적으로 선택자들을 적용할 수 있게한다.

### 핵심개념

* **Separation of structure from skin - 스킨으로부터 구조 분리**
  구조용 오브젝트와 혼합 및 매치 할 수있는 여러 디자인 스킨 (색상, 배경, 테두리 등)을 사용하므로써 적은 코드로 시각적 다양성을 얻을 수 있습니다. 실제로 이것은 HTML 태그의 기본 의미와 스타일을 분리하는 것을 의미합니다. 태그 (h2) 대신 클래스 (.primary-header)로 스타일을 지정하면 HTML을 의미있게 유지하면서 적절한 위치에 일관된 스타일을 적용 할 수있는 유연성이 향상됩니다.
  * 구조: 요소 크기 및 위치 지정, 레이아웃 배치에 대한 지침. (예. `height`, `width`, `overflow`)
  * 스킨: 요소의 시각적 속성, 레이아웃 모양의 정의 (예. `colors`, `fonts`, `shadows`, `gradients`)
* **Separation of containers and content - 컨테이너와 콘텐츠의 분리**
  OCSS 객체는 위치나 컨텍스트에 의존해서는 안되며, 재사용 가능하고 주어진 컨테이너를 채울 수 있어야합니다. 이렇게하면 개발자가 각기 다른 상황에서 주어진 요소나 클래스가 무엇을 할 것인지 추측 할 필요없이 객체가 어떤 상황에서도 똑같이 보일 것입니다.
  * 컨테이너: 레이아웃의 구역 및 구획
  * 콘텐트: 이미지, 단락, div와 같은 태그요소
  * 주의사항: 스타일의 범위를 특정 컨테이너로 지정하면, 재정의 없이는 재사용할 수 없다.

### 장점

* DRY - 반복되는 코드를 줄여 CSS파일을 작아지고 빠르게 다운로드할 수 있다
* 확장성(Scalability) - 다양한 요소에 대해 클래스를 자유롭게 혼합하고 재사용할 수 있다
* 능률성(Efficiency) - 적은 CSS 수정으로 많은 디자인 업데이트가 가능하다
* 가독성(Readability) - 다른 작업자가 CSS 구조를 빠르게 이해한다

### 단점

* HTML 마크업에 추가된 클래스의 수를 늘린다
* 적용된 코드를 이해하기 위한 학습곡선이 필요하다
* HTML과 CSS를 긴밀하게 묶는 단일용도의 클래스(예. `.pl10`, `fl`)를 남겨둔다
* 의미론적 코드에서 얻을 수 있는 유지보수성을 제거할 수 있다

## [SMACSS](https://smacss.com/)

### 핵심개념

[SMACSS (Scalable and Modular Architecture for CSS)](https://smacss.com/)는 [Jonathan Snook](https://twitter.com/snookca)이 발표한 책이자 개념이다. 엄격한 프레임워크 보다는 스타일 가이드에 초점을 맞추며, 디자인 프로세스 진단과 기존의 경직된 프레임워크를좀 더 유연하게 만드는 것을 목표로 한다.

CSS를 5개 범주로 분류한다. 각 범주는 엄격한 분리는 아니고 느슨한 분리이므로 공통 범위가 있을 수 있다

* [Base rules](https://smacss.com/book/type-base)
  * 요소 선택자(element selector)에 적용하는 스타일
  * vendor code, helpers, mixins, variables 및 기본 요소 (html, body, ul, p 등)에 대한 스타일
* [Layout rules](https://smacss.com/book/type-layout)
  * 페이지를 섹션으로 구조적으로 나누는 것
  * 레이아웃은 하나 이상의 모듈을 포함한다
  * prefix `l-`를 붙인다
* [Module rules](https://smacss.com/book/type-module)
  * 모듈 관련 스타일로 재사용을 위한 요소
  * table, icon, box같이 재사용성 높은 요소를 정의한다
  * 재사용을 위해 id 선택자와 element를 사용하지 않는다
* [State rules](https://smacss.com/book/type-state)
  * 요소의 상태 전환을 표현하기 위한 스타일
  * prefix `is-`나 `s-`를 붙인다
* [Theme rules](https://smacss.com/book/type-theme)
  * 전반적인 Look and feel을 정의한다
  * 색상, 배경, 글꼴, 테두리 등을 불변하는 스타일과 분리
  * prefix `theme-`을 붙이거나 `theme/`과 같은 디렉토리로 계층 분리

SMACSS는 CSS및 HTML 모듈을 작고 이동성 있는 상토래 유지하기 위해  _적용 가능성 의 깊이(depth of applicability)_ 라 부르는 것에 대해 특별히주의를 기울인다. Sass에서 세개 이상의 선택자 중첩을 금지하는 것과 비슷하지만, 레이어 수를 세는 대신 첫 번째 레이어와 마지막 레이어 사이의 총 DOM 거리를 계산합니다.

간단한 예로 `.mammalia > .primates > .hominidae > .sapiens > .rollsman > .erin`은 6의 깊이를 갖는다. `.mammalia .sapiens .erin`과 같이 선택하더라도 DOM은여전히 6의 깊이를 갖는다. 셀렉터를 줄임으로써 우리는 특이성을 낮출 수 있지만, 여전히 큰  _적용 가능성 의 깊이(depth of applicability)_ 를 가지게 된다. 너무 많은 선택자 깊이의 문제는 CSS가 특정 HTML 구조에 더 의존하게 만든다는 것이다. **이것은 HTML 및 CSS 구성 요소를 컨테이너에서 작고 독립적으로 유지함으로써 해결 가능하다.**

## [BEM(Block-Element-Modifier)](https://en.bem.info/methodology/key-concepts/)

[BEM](https://en.bem.info/methodology/key-concepts/)은 [Yandex](https://www.yandex.com/)팀이 개발한 시스템으로 웹페이지를 컴포넌트들의 조합으로 바라보고 접근한 방법론이다.

### 핵심 개념

BEM CSS 구조는 제목에있는 세가지 아이디어를 기반으로한다. **블록(Blocks)**은 모든 크기의 구성 요소이며 서로 내부에 중첩 될 수 있다. `header` 블록은 `logo` 블록, `navigation` 블록 및 `search` 블록을 포함 할 수 있다. 블록은 재사용 가능하고, 독립적이며, 이동이 쉽다(mobile)—그러므로 페이지의 어느 곳에나 배치할 수 있으며 필요한만큼 자주 반복 할 수 있다. **요소(Elements)**는 특정 블록(Blocks)에 속하는 구성 요소이다. `menu` 블록은 4 개의 `tab` 요소로 구성 될 수 있다. **모디파이어(Modifiers)**는 블록(blocks)이나 요소(elements)의 모양, 동작 또는 상태를 변경하는 플래그이다.

* [Block](https://en.bem.info/methodology/key-concepts/#block)
  재사용이 가능하며 기능적으로 독립적인 페이지 컴포넌트
  * [블록(Block) 이름](https://en.bem.info/methodology/naming-convention/#block-name)은 `상태`가 아닌 `목적` "어떤 것인가?" (`menu` 또는 `button`)를 설명한다
  * 블록은 외부 여백`margin`이나 `position`을 설정할 수 없다
  * `ID 선택자` 사용을 금지한다
* [Element](https://en.bem.info/methodology/key-concepts/#element)
  블록 안에서 특정 기능을 수행하는 컴포넌트. 외부에서 혹은 독립적으로 사용할 수 없다
  * [요소(Element) 이름](https://en.bem.info/methodology/naming-convention/#element-name)은 `상태`가 아닌 `용도` "어떤것인가?" (`item`, `text` 등)를 설명한다
  * 요소 이름은 블록 이름과 duble underscore (`__`)로 구분된다
   `block-name__element-name`
  * 요소는 항상 블록의 일부이며 블록과 분리될 수 없으며, 요소끼리 중첩될 수 있다
* [Modifier](https://en.bem.info/methodology/key-concepts/#modifier)
  Block, Element의 모양(외관)과 동작(상태)을 정의한다
  * [modifier 이름](https://en.bem.info/methodology/naming-convention/#block-modifier-name)은 `외관` "어떤 크기인가?", "어떤 디자인 테마인가?" (`size_s` 또는 `theme_islands`), `상태` "다른 것과 어떻게 다른가?" (`disabled`, `focused` 등)  그리고 `행동` "동작은 어떠한가?"또는 "사용자에게 어떻게 반응하는가?" (`directions_left-top` 등)을 정의한다
  * modifier의 이름은 요소 이름과 single underscore(`_`)로 구분한다
  * 수정자는 수정 된 블록 또는 요소와 분리하여 사용할 수 없다.

### 예시

다음은 `_login` boolean 수정자(modifier) , `_theme_forest` key-value 수정자(modifier) 및 두 요소가 있는 `form` 블록을 정의하는 BEM 문서의 예제입니다.

```html
<form class="form form_login form_theme_forest">
  <input class="form__input">
  <input class="form__submit form__submit_disabled">
</form>
```

관련된 Sass partial는 다음과 같다

```scss
.form {}
.form_theme_forest {}
.form_login {}
.form__input {}
.form__submit {}
.form__submit_disabled {}
```

BEM 네이밍이 인기를 얻었을 때 사람들은 Sass 부모 선택자 (&)를 사용하여 코드에서 반복이 적은 BEM 클래스 이름을 자동으로 생성하기 시작했다.

```scss
.form {
  border: 1px solid black;

  &__submit {
    background-color: green;

    &_disabled {
      background-color: gray;
    }
  }
}
```
```css
.form {
  border: 1px solid black;
}
.form__submit {
  background-color: green;
}
.form__submit_disabled {
  background-color: gray;
}
```

### 파일 구조

BEM 파일 구조는 CSS 및 Sass를 넘어 JavaScript, CSS, 이미지 등을 블록별로 구성한다. 요소와 수정자는 동일한 밑줄(underscore) 중심 명명 규칙을 사용하여 자체 하위 디렉토리를 갖는다.

```md
blocks/
|- input/
|  |- _type/
|  |  |- input_type_search.css
|  |
|  |- __box/
|  |  |- input__box.css
|  |
|  |- input.css
|  |- input.js
|
|- button/
|  |- button.css
|  |- button.js
|  |- button.png
```

### 장점

* 가독성 : 대부분의 요소에 명확하게 설명 된 클래스 이름을 사용하면 다른 사람이 HTML 또는 CSS 파일을 읽기 쉬워진다
* 자체 설명 : 클래스에 계층적 이름을 사용하면 어떤 요소가 어떤 기본 구성 요소에 속하는지 명확하게 알 수 있다
* 특이성 : 구성 요소의 모든 요소에 클래스를 추가하는 것은 과도한 것처럼 보일 수 있지만 이렇게하면 각 선택 자의 구체성을 낮게 유지할 수 있어 재정의가 훨씬 간단해진다

### 단점

* 독특하고 설명적인 네이밍에 HTML 문서가 지저분해질 수 있다

## 7-1 Pattern

인터페이스를 구성 요소의 모음으로 생각하고, 의미있는 폴더 범주화를 강조하는 방법이다. 기본적으로 7개의 다른 폴더에 모든 파트를 채우고 root레벨에 있는 하나의 파일(일반적으로 main.css)에 모든 파일을 가져와 CSS로 컴파일한다.

### 핵심 개념

* **BASE**
  `base/` 폴더에는 프로젝트의 상용구 코드가 들어간다. 리셋 파일, 일부 타이포그라피 규칙 및 일반적으로 사용되는 HTML 요소에 대한 표준 스타일을 정의하는 스타일 시트 (`_base.scss`이라고 명명한다)를 정의한다.
  * _base.scss
  * _reset.scss
  * _typography.scss
  외에도 많은 CSS 애니메이션을 사용할 경우 모든 애니메이션의  `@keyframes` 정의를 포함하는 `\ _animations.scss` 파일을 추가할 수 있다
* **LAYOUT**
  `layout/` 폴더에는 사이트 또는 응용 프로그램 레이아웃에 참여하는 모든 것이 포함되어 있다. 이 폴더는 사이트의 주요 부분 (header, footer, navigation, sidebar…), 그리드 시스템 또는 모든 양식의 CSS 스타일에 대한 스타일 시트를 가진다.
  * _grid.scss
  * _header.scss
  * _footer.scss
  * _sidebar.scss
  * _forms.scss
  * _navigation.scss
  `layout/` 폴더는 선호에 따라 `partials/`라고 불릴 수 있다
* **COMPONENTS**
  작은 구성 요소를 정의하는 `components/` 폴더가 있다. `layout/` 은 매크로 (전역 와이어 프레임 정의) 인 반면, `components/`는 위젯에 더 초점을 맞추고 있다. 슬라이더, 로더, 위젯과 같은 모든 종류의 특정 모듈을 포함한다. 전체 사이트 / 애플리케이션은 대부분 작은 모듈로 구성되어야하기 때문에 일반적으로 `components/`에는 많은 파일이 있다.
  * _media.scss
  * _carousel.scss
  * _thumbnails.scss
  `components/` 폴더는 사용자가 선호하는 것에 따라 `modules/`라고 부를 수 있다
* **PAGES FOLDER**
  페이지별 특정 스타일이 있는 경우 페이지의 이름을 따서 명명 된 파일을 `pages/` 폴더에 배치한다. 배포 프로세스에 따라 이러한 파일을 불러 와서 결과 스타일시트에서 다른 파일과 병합하지 않도록 할 수 있다
* **THEMES FOLDER**
  대규모 사이트 및 응용 프로그램에서는 다른 테마를 사용하는 것이 일반적이다. 테마를 다루는 방법은 분명히 다르지만 개인적으로 `themes/` 폴더에서 관리한다
  * _theme.scss
  * _admin.scss
  이것은 프로젝트마다 매우 다르게 사용될 수 있으며 대다수 프로젝트에 존재하지 않을 수 있다
* **ABSTRACTS FOLDER**
  `abstracts/` 폴더는 프로젝트 전체에서 사용되는 모든 Sass 도구와 도우미를 수집한다. 모든 전역 변수, 함수, 믹스 인 및 플레이스 홀더가 여기에 입력된다.
  이 폴더는 Sass의 helper일 뿐, CSS 결과로 컴파일되지 않는다.
  * _variables.scss
  * _mixins.scss
  * _functions.scss
  * _placeholders.scss
  `abstracts/` 폴더는 당신이 선호하는 것에 따라 `utilities/` 또는 `helpers/`라고 불릴 수 있다
* **VENDORS FOLDER**
  마지막으로, 외부 라이브러리 및 프레임 워크의 CSS 파일(정규화, 부트 스트랩, jQueryUI, FancyCarouselSliderjQueryPowered 등)을 포함하는 `vendors/` 폴더가 있다.
  * _normalize.scss
  * _bootstrap.scss
  * _jquery-ui.scss
  * _select2.scss
  어떤 벤더를 덮어쓰기 해야한다면 `vendors-extensions / _bootstrap.scss`과 같이 8번째 폴더를 만들어 해당 CSS 중 일부를 다시 선언한다. 이는 벤더 코드 자체를 편집하지 않으려 하나의 방안이다.
* **MAIN FILE**
  주 파일 (일반적으로 `main.scss`라고 함)은 밑줄`_`로 시작하지 않는 유일한 Sass 파일이어야한다. 이 파일은 @import와 주석 이외의 것을 포함하지 않는다.
  파일은 폴더에 따라 다음 순서로 차례로 불러온다.
  1. abstracts/
  2. vendors/
  3. base/
  4. layout/
  5. components/
  6. pages/
  7. themes/
* **유의사항**
  * 구성요소(Components)의 조건
    * 한가지 일만 한다
    * 프로젝트 전체에서 재사용할 수 있다
    * 독립적이다
  * 구성 요소를 외부에서 테마로 지정할 수있게하려면 (예 : `themes/` 폴더 내부의 테마) 치수(width/height), padding, margins, alignment 등과 같은 **구조 스타일로만 선언을 제한**하라고 한다. colors, shadows, font rules, background rules 등과 같은 스타일은 사용을 제한한다.

### 파일 구조

```scss
sass/
|
|– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
|
|– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Main Sass file
```

가독성을 유지하기 위해 메인 파일은 다음 지침을 따른다

* `@import` 당 하나의 파일
* 한 줄당 하나의 `@import`;
* 동일한 폴더에서 두 개 파일을 불러올 경우 라인을 추가하지 않는다
* 폴더로부터 마지막으로 불러오는 파일 다음에 새 라인을 한줄 추가한다
* 파일 확장자(`scss`)와 맨 앞의 밑줄(`_`)을 생략한다

```scss
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
@import 'abstracts/placeholders';

@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
```

## ITCSS

Inverted Triangle Cascading Style Sheet 목적에 따라 스타일을 할당하고 그룹화하며 특수성 및 영향 범위의 순서로 정렬한다. 일반적으로 다음과 같은 방식으로 구조화하고 정렬된다.

![](https://www.silverstripe.org/assets/Uploads/image04.png)

### 핵심 개념

1. **설정(Settings)** : 브랜드 색상, 구성 등의 전역 변수
2. **도구(Tools)** : 믹스 인 및 도우미 기능
3. **일반(Generic)** : Ground zero 스타일, normalize.css와 같은 스타일 재설정
4. **요소(Elements)** : a.k.a. 기본이 아닌 html 요소 (예 : 표제, 목록, 표, 이것은 태그 선택기를 스타일링하는 마지막 계층입니다.)
5. **객체(Objects)** : 외관 디자인 패턴이 없습니다. 클래스는 여기부터 스타일을 지정합니다. 여기서 클래스는 대략적인 이름으로 OOCSS를 시작합니다 (예 : .button, .list-item, 그리드 시스템 등).
6. **구성 요소(Components)** : 풍부한 디자인의 UI 스타일링. 여기서 클래스 이름은보다 구체적입니다. 이 레이어는 대개 가장 큰 볼륨을가집니다.
7. **테마(Themes)** : 해당되는 경우 주제 스타일이 여기에 배치됩니다 (예 : 계절 크리스마스 테마).
8. **트럼프(Trumps)** : 유틸리티, 헬퍼 및 오버라이드. `!important`가 자주 사용됩니다.

거꾸로 된 삼각형 은유를 다시 언급하면 상위 계층은 더 넓은 범위의 영향력을 갖는다. 설정에서 선언 된 색상과 같은 변수는 적용되는 요소에만 영향을주는 .is-red와 같은 트럼프 클래스와 달리 전체 사이트에서 잠재적인 영향을 미친다.
삼각형을 아래로 내려감에 따라 특이성이 높아진다. 예를 들어, 일반적인 `h1` 글꼴 크기는 Elements 레이어에서 선언된다. 디자인에 hero 배너의 제목 크기가 다른 경우에는 후자의 Hero Banner Component에서 쉽게 덮어 씁니다.

![](https://www.silverstripe.org/assets/Uploads/_resampled/ResizedImageWzYwMCwzODFd-image03.png)

### 파일 구조

![](https://www.silverstripe.org/assets/Uploads/image05.png)

## Atom Design

### 핵심 개념

Atomic Design은 설계 시스템을 구성하는 기본 원리이다. Atomic CSS와 혼동하지 말고 디자인의 원리에 대해 논할 수 있다. 반응형 웹 디자인의 세계에서 전통적인 페이지 충실적 설계 과정을 넘어 기본적인 원자 요소를 설계하고 상향 구축하는 사고방식을 사용할 수 있다. 'Atomic Design'은 구성요소를 융합시키는 가장 작은 원자요소를 시작으로 중요한 페이지 레이아웃을 구성하는 레이어로 디자인을 분해하는 은유이다.

Atomic Design은 5개의 레이어를 가진다

* **Atoms (원자)**
  color palettes, fonts, typographic scales과 같은 추상 정보와 `a`, `button`, `p`와 같은 태그의 기본 스타일과 같은 가장 작은 개별 요소
  "구성(configuration)"또는 "설정(settings)"(그 자체로 출력이 없음)과 후자의 "기본(base)"또는 "초기(initial)"스타일을 언급합니다 (출력 됨).
* **Molecules (분자)**
  위 Atoms의 그룹에 의해 형성된다. `text input`, 레이블 및 버튼이있는 검색 UI와 같이 하나의 과제를 수행하는 작은 구성 요소
* **Organisms (유기체)**
  화면의 섹션을 구성하는 보다 큰 그룹화된 구성요소. 웹 사이트 `header`, `navigation`, `serch form`로 "패턴(patterns)"이라 볼 수 있다.
* **Templates**
  분자(molecules)와 유기체(organisms)를 실제 레이아웃 구조로 결합 (예 : 홈페이지 페이지 유형)
* **Pages**
  모든 기능, 실제 콘텐츠 및 미디어가 포함 된 웹 페이지 디자인. 홈페이지, 연락처 페이지.

### 파일 구조

표준 Atomic Design 디렉토리는 다음과 같은 5 개의 스테이지 기반 폴더로 구성된다.

```scss
sass/
|
|– atoms/
|   |– _colors.scss
|   |– _buttons.scss
|   …
|
|– molecules/
|   |– _navigation.scss
|   |– _search.scss
|   …
|
|– organisms/
|   |– _banner.scss
|   |– _gallery.scss
|   …
|
|– templates/
|   |– _list.scss
|   |– _detail.scss
|   …
|
|– pages/
|   |– _home.scss
|   |– _archive.scss
|   …
|
|- main.scss
```

## 종합
