# Coding Convention

마크업과 스타일링을 위한 코딩 컨벤션 입니다.

기본적으로 [Code Guide](https://codeguide.co/)의 규칙과 [BEM](http://getbem.com/)의 네이밍 규칙을 따릅니다.

## HTML

### 기본 규칙

- 애트리뷰트 값은 큰따옴표(`""`)로 묶습니다.
- 닫는 태그가 선택적이어도 생략하지 마세요 (e.g. `</li>` or `<body>`)
- 아이디와 클래스의 속성 값은 숫자, 대문자, 특수문자로 시작할 수 없습니다.
- HTML 표준과 의미론을 유지하기 위해 노력하되 실용성을 고려하세요.
- 가능한 복잡하지 않은 최소한의 마크업을 사용하세요.

### 아이디

스타일링을 위해 사용하지 않으며, 개발단에서 DOM 조작 혹은 QA등을 위해 사용합니다.

### 클래스

- 하이픈 표기법을 사용합니다.
- 숫자, 대문자, 특수문자로 시작할 수 없습니다.

```html
<div class="slide-label n-3 back-swiper">
  <div class="swiper-wrapper">...</div>
</div>
```

### 들여쓰기

모든 엘리먼트는 중첩 깊이에 따라 2개의 공백 문자(소프트 탭)으로 들여 씁니다.

```html
<body>
  <div class="dynamic-form-wrap">
    <ul class="dynamic-form">
      <li class="dynamic-form-item">...</li>
    </ul>
  </div>
</body>
```

### 주석

주석 기호와 내용 사이에는 반드시 공백이 한 칸 있어야 합니다. 시작 주석과 끝 주석 모두 작성하는 것을 권장합니다.

```html
<!-- 상단 메뉴바 -->
<div class="report-menubar">
  <div class="mu-selectbox width150">
    <button class="mu-value">전체</button>
    <ul class="mu-list">
      <li>전체</li>
      ...
</div>
<!-- // 상단 메뉴바 -->
```

### 종료 태그

Doctypes 선언에 따라 종료 태그가 없는 요소(self-closing elements)에 닫는 기호(`/`)를 생략할 수 있습니다. HTML5를 사용한다면 닫는 기호를 생략해서 문서를 작성하고 XHTML을 사용한 경우는 닫는 기호를 반드시 사용합니다.

```html
<!-- HTML -->
<input type="text" />

<!-- XHTML -->
<input type="text" />
```

종료 태그가 없는 요소는 다음과 같습니다.

> area, base, br, col, commend, embed, hr, img, input, keygen, link, meta, param, source

### HTML5 doctype

보통 DTD라고 표현 하며, HTML 문서를 작성할 때 가장 먼저 선언하게 됩니다.

- HTML5를 기본으로 사용합니다.
- IE9 이하 브라우저가 포함된다면 조건부 주석을 사용하여 'Shim' 처리합니다.

```HTML
<!DOCTYPE html>
```

#### html5 및 반응형 shim 처리 방법

```html
<!--[if lt IE 9]>
    <script src="../js/lib/html5shiv.js"></script>
    <script src="../js/lib/respond.min.js></script>
<![endif]-->
```

- [html5shiv.js 다운로드](https://github.com/aFarkas/html5shiv)
- [IE6 ~ IE8 반응형 구현](https://github.com/scottjehl/Respond)

### HEAD

`<head>`요소는 `<html>` 태그와 `<body>` 태그 사이에 위치합니다. 일반적으로 `<title>`, `<style>`, `<meta>`, `<link>`, `<script>`를 정의합니다.

#### Character encoding

문서의 기본 인코딩은 uft-8로 설정합니다.

```html
<meta charset="utf-8" />
```

#### IE 호환성 모드

IE 브라우저에서 가장 최신 표준모드로 보이도록 설정합니다.

```html
<meta http-equiv="x-ua-compatible" content="ie=edge" />
```

#### 제목

본문 제목을 작성합니다.

```html
<title></title>
```

#### CSS와 JavaScript 선언

- HTML5 규격에 따르면, 일반적으로 CSS와 JavaScript 파일은 `text/css`, `text/javascript`가 각각 기본값이기 때문에 `type` 을 지정할 필요가 없습니다.
- CSS는 외부 파일에 작성하는 External Type 방식으로 작성합니다.
- 동적으로 변하는 속성의 경우 개발팀과 협의하여 Inline Style 방식으로 작성할 수 있습니다 (e.g. 다이얼로그의 높이 등)

```html
<!-- External CSS -->
<link rel="stylesheet" href="code-guide.css" />

<!-- JavaScript -->
<script src="code-guide.js"></script>
```

- [Using link](https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element)
- [Using style](https://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element)
- [Using script](https://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element)

### 특수기호

특수 기호는 문자 엔티티를 참조하여 작성합니다.

- [HTML 4 Entity Names](https://www.w3schools.com/charsets/ref_html_entities_4.asp)
- [Character Entity Reference Chart](https://dev.w3.org/html5/html-author/charref)

### 속성 선언 순서

HTML 코드를 보다 쉽게 읽을 수 있도록 선언 순서 규칙을 일관되게 작성 해주세요.

- `class`
- `id`, `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value`
- `title`, `alt`
- `role`, `aria-*`

클래스는 공통으로 재사용하기 위한 컴포넌트를 특정해주기 때문에 제일 먼저 작성하며, ID는 좀더 구체적이고 책갈피 기능 등 예비적으로 사용하기 때문에 후순위가 됩니다.

```html
<a class="..." id="..." data-toggle="modal" href="#"> Example link </a>

<input class="form-control" type="text" />

<img src="..." alt="..." />
```

### 불린(Boolean) 속성

XHTML은 부울린 속성을 선언해줘야 했지만 HTML5는 필수로 선언하지 않아도 문제가 없습니다.
필요한 경우, 아래 예시와 같이 작성하여 스타일을 표현합니다.

```html
<input type="text" disabled />

<input type="checkbox" value="1" checked />

<select>
  <option value="1" selected>1</option>
</select>
```

## CSS

### 기본 규칙

- 들여쓰기는 2개의 공백 문자(소프트 탭)를 사용합니다.
- 선택자를 그룹화 할 때 각 선택자가 한줄에 오도록 작성하세요.
- 가독성을 위해 선언 블록의 시작 중괄호 옆에 1개의 공백 문자를 사용합니다.
- 스타일 선언 블록의 닫는 중괄호는 새 줄에 작성하세요.
- 각 선언의 `:` 뒤에 1개의 공백을 포함합니다.
- 각 선언은 각각 한 줄에 작성되어야합니다.
- 모든 선언은 세미콜론으로 종료합니다.
- 콤마(`,`)로 구분되는 속성 값에는 각 콤마 뒤에 공백이 포함되어야 합니다 (e.g. `box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;`)
- `rgb()`, `rgba()`, `hsl()`, `hsla()`, `rect()` 값에는 콤마 뒤에 공백을 포함하지 않습니다.
- 모든 hex 값은 `#fff` 와 같이 소문자로 작성합니다. 소문자 알파벳은 더 독특한 모양을 가지고 있기 때문에 문서를 읽을 때 더 구분이 쉽습니다.
- hex 값은 가능한 `#ffffff` 대신 `#fff` 와 같이 축약형을 사용합니다.
- 0 값을 선언할 때 단위를 지정하지 않습니다. `margin: 0px;` 대신 `margin: 0;` 으로 작성합니다.
- 방향에 따라 속성을 지정해야 하는 경우 top, right, bottom, left 순으로 작성합니다.

```css
/* Bad CSS */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* Good CSS */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

### 선택자 구분

웹 엔진은 다음 4개의 카테고리로 스타일 규칙을 분류합니다.

1. ID 규칙
2. Class 규칙
3. Tag 규칙
4. Universal 규칙

이 4개의 규칙들은 스타일 규칙을 적용하는데 기본적인 역할을 합니다.

#### 키 선택자
선택자의 마지막 선택자를 의미합니다. 아래 코드에서 키 선택자는 `img`, `p`, `[title]`이 됩니다. 따라 마지막 작성된 키 선택을 기준으로 규칙을 분류할 수 있습니다.
```css
a img,
div > p,
h1 + [title] {
  ...;
}
```

### 선택자 작성 규칙
스타일 엔진은 키 선택자로부터 시작하여 왼쪽으로 이동하면서 선택자가 규칙에 적합한 엘리먼트를 확인하게 됩니다. 만약 엘리먼트가 이 규칙에 적합하거나 적합하지 않다는 게 확인되면 멈추게 됩니다.

위에서 소개한 4개의 규칙 카테고리는 관계없는 규칙을 제거하기 위함입니다. 성능을 비약적으로 향상시키는 방법은 바로 매칭을 줄이는 것입니다. 주어진 엘리먼트가 적합한지 확인하는데 고려해야 할 규칙의 수가 적을수록 성능이 좋아지게 됩니다.

- 최적의 렌더링 성능을 위해 일반 태그 선택자 대신 클래스 선택자를 사용하세요.
- 선택자는 상위 선택자를 포함하여 3개 이상 작성되지 않게 합니다.


  ```css
  /* Bad example */
  span {
    ...;
  }
  .page-container #stream .stream-item .tweet .tweet-header .username {
    ...;
  }
  .avatar {
    ...;
  }

  /* Good example */
  .avatar {
    ...;
  }
  .tweet-header .username {
    ...;
  }
  .tweet .avatar {
    ...;
  }
  ```

- 전체 선택자(`*`)를 사용하지 않습니다.
  
  전체 선택자는 한 번에 모든 요소에 대응됩니다. 브라우저는 선택자를 오른쪽에서 왼쪽으로 읽기 때문에 마지막에 전체 선택자를 사용한 경우 최초 문서 내의 모든 요소에 대응하고 그 이후 상위 클래스로 해당 요소를 선택하는지 확인하는 과정을 거치게 됩니다. 따라서 요소를 선택하는 CSS 규칙이 깊어지는 경우와 전체 선택자를 마지막 부분에 작성하는 경우 브라우저의 성능 저하가 발생하기 때문에 사용을 지양해야 합니다.

  ```css
  /* Bad example */
  * {...}
  .selector * {...}

  /* Better example */
  .selector * th {...}
  ```

- 정규 표현식과 유사한 애트리뷰트 선택자 사용을 지양하며, 부적합한 애트리뷰트 선택자 사용을 지양합니다.

  키 선택자로 애트리뷰트 선택자를 사용한 경우는 최초 문서 내의 모든 태그에 해당 애트리뷰와 속성 값이 있는지를 확인하여, 브라우저의 성능 저하가 발생하게 되므로 사용하지 않습니다.
  ```css
  /* Bad example */
  [type="text"] {...}
  .label [type="checkbox"] {...}

  /* Better example */
  input[type="text"] {...}
  .layer-pop[data-role="popup"] .header {...}
  ```

  CSS3는 정규 표현식처럼 속성 값에 따라 대응되는 선택자가 추가되었습니다. 그러나 성능적인 측면으로 살펴보면, 클래스를 기반으로 하는 방식 보다 속도가 떨어지게 되므로 사용하지 않습니다.

  다만, 클래스 선택자에 속성 선택자를 조합할 경우 성능에 영향을 미치지 않습니다.

  ```css
  /* Bad example */
  /* 지정한 문자열이 속성값에 포함하는 요소에 대응 */
  .regex-selector[type*="value"] {...}

  /* 지정한 문자열이 속성 값으로 시작하는 요소에 대응 */
  .regex-selector[type^="value"] {...}

  /* 지정한 문자열이 속성값으로 끝나는 요소에 대응 */
  .regex-selector[type$="value"] {...}

  /* 지정한 문자열이 공백으로 나누어진 속성값을 포함하는 요소에 대응 */
  .regex-selector[type~="value"] {...}

  /* 지정한 문자열이 '-'로 나누어진 속성값을 포함하는 요소에 대응 */
  .regex-selector[type|="value"] {...}

  /* Better example */
  /* 지정한 문자열이 속성값에 일치하는 요소에 대응 */
  .regex-selector[type="value"] {...}

  /* 지정한 속성명에 일치하는 요소에 대응 */
  .regex-selector[type] {...}
  ``` 

### 속성 선언 순서

CSS 속성 선언은 다음 순서에 따라 그룹화합니다.

1. Positioning
2. Box model
3. Typographic
4. Visual
5. Misc

일반적인 흐름에서 엘리먼트를 제거하고 박스 모델 관련 스타일을 무시할 수 있기 때문에 position 속성을 제일 먼저 작성합니다. 그 다음은 Box model로, 엘리먼트의 치수와 배치를 정의합니다.
다른 모든 것은 엘리먼트 내부 에서 발생 하거나 앞의 항목에 영향을 미치지 않으므로 마지막에옵니다.

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```

속성 및 속성 순서의 전체 목록은 아래 문서에서 더 자세히 확인할 수 있습니다.

- [Bootstrap property order](https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/master/css/index.js)
- [csscomb](https://github.com/csscomb/csscomb.js/blob/dev/config/csscomb.json)

### 미디어 쿼리 위치

가능하면 미디어 쿼리를 관련 규칙 집합에 가깝게 배치하세요. 별도의 스타일시트나 문서 끝에 묶는 경우 미래에 사람들이 내용을 놓치기에 더 쉽게 만듭니다. 아래와 같이 사용하면 좋습니다.

```css
.element {
  ...;
}
.element-avatar {
  ...;
}
.element-selected {
  ...;
}

@media (min-width: 480px) {
  .element {
    ...;
  }
  .element-avatar {
    ...;
  }
  .element-selected {
    ...;
  }
}
```

### 속기법(Shorthand notation)

사용할 수 있는 모든 값을 명시적으로 설정해야 하는 속기형 작성을 제한합니다.

속기형을 과도하게 사용하면 불필요한 재선언이나 의도하지 않은 부작용이 발생할 수 있기 때문입니다.

자주 사용되는 속기 속성은 아래와 같습니다.

- `padding`
- `margin`
- `font`
- `background`
- `border`
- `border-radius`

모질라 개발자 네트워크의 [Shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) 문서를 더 읽어 보는것도 도움이 됩니다.

### 중첩

너무 많은 선택자의 중첩을 주의하며, 3단계 이상 중첩하지 않습니다.

Sass에서 중첩을 사용하기 좋은 예시는 [Nesting in Sass and Less](https://markdotto.com/2015/07/20/css-nesting/) 문서를 참조하세요.

### 클래스 이름

- 클래스를 소문자로 작성하고 대시(`-`) 를 사용하세요.
- 지나친 속기 표기를 피하세요. (e.g. `.btn` 은 `button` 을 유용하게 줄여주지만 `.b` 는 아무 의미도 없습니다.)
- 클래스는 가능한 짧고 간결하게 작성합니다.
- 가능한 의미 있는 이름을 사용합니다. 구조 또는 목적을 표현하는 이름이 좋습니다.

#### 축약해서 사용할 수 있는 클래스

| 설명        | 원형        | 축약어 |
| :---------- | :---------- | :----- |
| 감싸는 영역 | wrapper     | wrap   |
| 버튼        | button      | btn    |
| 정보        | information | info   |

IBP를 제외한 나머지 프로젝트의 클래스 네이밍은 BEM을 사용합니다.

서서히 BEM으로 통합하기 위해 추후 문서 보강 예정입니다.

### 코드 조직화

- 코드 섹션을 컴포넌트 기준으로 조직화합니다.
- 길이가 긴 코드를 살펴볼 때 코드 섹션에 일정한 공백을 사용해 가독성을 높입니다.

```css
/*
 * Component section heading
 */

.element {
  ...;
}

/*
 * Component section heading
 *
 * 컴포넌트에 대해 설명을 추가해야 할 경우, 충분히 필요한 내용이라는 전제하에 이와 같이 작성할 수 있습니다.
 */

.element {
  ...;
}

/* Contextual sub-component or modifer */
.element-heading {
  ...;
}
```

# 📖 참고 자료
- [mobius](http://mobius.mobigen.com/) : 코딩 컨벤션 및 기본 HTML, CSS 참고
- [IRIS Design System Guide](https://docs.google.com/spreadsheets/d/1ju85dy3KAyuxAU307VY_7Aa2rtruNNz2PUS0X2ymJmo/edit#gid=0) : IRIS에 사용하는 컬러 변수 정리
- [BEM 설계 템플릿](https://docs.google.com/spreadsheets/d/1ElghZ-jbFCFIvD2IO27a40736nTUZ0y5NODrOPcUCns/edit#gid=0): BEM 방식으로 컴포넌트를 설계하기 위한 템플릿
