# 📖 Thoughtful CSS Architecture

>Nathan provides an introduction to CSS architecture that will help you design a structure for your code so your projects and teams can grow without becoming an unmanageable mess.

Nathan은 코드 구조를 설계하는 데 도움이되는 CSS 아키텍처에 대한 소개를 제공하므로 관리하기 어려운 문제가되지 않고도 프로젝트와 팀이 성장할 수 있습니다.

>architecture: the complex or carefully designed structure of something

아키텍처 : 복잡하거나 신중하게 설계된 구조

>Have you ever worked on a CSS project that gradually became a hot, sticky mess? It’s difficult to keep track of what styles affect what HTML: minor changes fix one problem but create three more and can require ugly hacks, and small CSS changes can break JavaScript functionality. We’ve all been there, but these are problems that can be largely avoided by careful planning at the beginning of our projects. Let’s talk about CSS architecture.

점차적으로 엉망이된 CSS 프로젝트에서 일해 본 적이 있습니까? 어떤 스타일이 HTML에 영향을 미치는지 추적하는 것은 어렵습니다. 사소한 변경으로 인해 하나의 문제가 해결되지만 세 가지 문제를 추가로 생성하고 추한 해킹이 필요할 수 있으며 작은 CSS로 인해 JavaScript 기능이 중단 될 수 있습니다. 이것들은 프로젝트 초기에주의 깊게 계획함으로써 피할 수있는 문제입니다. CSS 아키텍처에 대해 이야기 해 봅시다.

## Benefits of Thoughtful Architecture

사려 깊은 아키텍처의 이점

>The primary benefit of a thoughtful CSS architecture is scalability. Scalability becomes a challenge for any development project when either the scope grows or the team size increases, and CSS is no exception to this rule. The cascading and global nature of CSS makes it a powerful, but also fragile, development medium. If you’ve written CSS for any length of time, you’ve found yourself pounding your head against the desk when changing one line of CSS fixes one thing but breaks a handful of other things. Careful planning can provide the following benefits:
> * Fewer styling rules
> * Fewer styling collisions
> * Long-term maintainability
> * Faster ramp-up for new team members
> * Easier collaboration between team members
> * Smoother project handoffs

사려 깊은 CSS 아키텍처의 주요 이점은 확장성입니다. 스코프가 커지거나 팀 크기가 커질 때 확장 성은 모든 개발 프로젝트의 과제가되며 CSS는 이 규칙에 대한 예외는 아닙니다. CSS의 계단식 및 전역적 특성으로 인해 강력하지만 취약한 개발 매체가됩니다. 어느 정도의 시간 동안 CSS를 작성했다면, 한 줄의 CSS 수정을 할 때 책상을 상대로 머리를 두드리ㄱㅔㅆ지만, 다른 것들은 거의 없애 버립니다. 주의 깊게 계획하면 다음과 같은 이점이 있습니다.

* 스타일 규칙이 적다
* 스타일링 충돌 감소
* 장기적인 유지 보수성
* 새로운 팀원을위한 신속한 진입
* 팀 구성원 간의 손쉬운 공동 작업
* 원활한 프로젝트 전달

## Types of CSS Rules

>Jonathan Snook popularized the concept of grouping CSS rules into categories in his book Scalable and Modular Architecture for CSS (SMACSS). Structuring our rules into these well-defined categories helps us and our team better understand the purpose of each of our styles. I use seven categories for rulesets based mostly on those recommended in SMACSS, making sure every style fits neatly into one of these categories.
>* Base styles
>* Objects
>* Components
>* State
>* Themes
>* Utilities
>* Javascript hooks
>Understanding these categories and their purpose will help give high-level meaning to the styles you write.

[조나단 스눅 (Jonathan Snook)](https://snook.ca/)은 CSS 규칙을 [SMACSS (Scalable and Modular Architecture for CSS)](https://smacss.com/)에서 범주로 그룹화하는 개념을 대중화했습니다. 규칙을 이러한 잘 정의 된 범주로 구성하면 팀이 각 스타일의 목적을 더 잘 이해할 수 있습니다. 필자는 SMACSS에서 권장하는 규칙 세트를 기반으로하는 7가지 카테고리를 사용하여 모든 스타일이이 카테고리 중 하나에 깔끔하게 맞는지 확인합니다.

* Base styles
* Objects
* Components
* State
* Themes
* Utilities
* Javascript hooks

이러한 범주와 목적을 이해하면 작성하는 스타일에 높은 수준의 의미를 부여하는 데 도움이됩니다.

### Base Styles

>Base styles are rules created for bare elements. They are the default styles you want globally across the site. Typically, these cover things like typography, box-sizing, and elements you might want to normalize across all browsers. A common mistake when styling base elements is to be too heavy-handed and create defaults that you don’t really want. Do you really want to remove the standard bulleted list style from unordered lists globally or just in certain circumstances?

기본 스타일은 노출된 요소에 대해 만들어진 규칙입니다. 그것들은 당신이 전 세계적으로 원하는 기본 스타일입니다. 일반적으로 이들은 타이포그래피, 상자 크기 및 모든 브라우저에서 표준화하려는 요소를 포함합니다. 기본 요소의 스타일을 지정할 때 흔히 저지르는 실수는 너무 무겁고, 실제 원하지 않는 기본값을 만드는 것입니다. 당신은 글로벌하게 ul list들의 기본 불릿 기호를 제거하길 원합니까? 아니면 일부 상황에서만 제거하는것을 원합니까?

### Objects

> Objects are rules that focus only on structure and layout. No decorative styles allowed. The concept of object classes was popularized by Nicole Sullivan with the purpose of re-using commonly used structural or layout patterns. Look for structural patterns in your designs and create object classes that can be used across multiple components or sections of the site. By putting these styles into object classes you’ll be able to avoid redundancy, shrinking the size of your CSS. Grid systems, whether hand-rolled or borrowed from a framework, fit into the Objects category.

객체는 구조와 레이아웃에만 초점을 둔 규칙입니다. 장식 스타일은 허용되지 않습니다. 객체 클래스의 개념은 일반적으로 사용되는 구조 또는 레이아웃 패턴을 다시 사용하는 목적으로 [Nicole Sullivan](https://www.slideshare.net/stubbornella/object-oriented-css)에 의해 대중화되었습니다. 디자인에서 구조 패턴을 찾고 사이트의 여러 구성 요소 또는 섹션에서 사용할 수있는 객체 클래스를 만듭니다. 이러한 스타일을 객체 클래스에 넣으면 중복을 피하면서 CSS의 크기를 줄일 수 있습니다. 골격 시스템은 수동식이든 프레임 워크에서 가져온 것이 든 상관없이 Objects 범주에 적합합니다.

### Components

>Components are discrete, self-contained pieces of UI. They are the bread and butter of atomic design and will make up the bulk of your styling. A component can be as small as a button or as large as a carousel. The key to creating robust components is to make them independent from any other parts of the page and self-contained. You should be able to drop a component anywhere on any page and it will maintain its structure and design.

구성 요소는 개별적이고 독립적 인 UI 요소입니다. 그것들은 원자력 디자인의 빵과 버터이며 당신의 스타일을 대량으로 만들어 줄 것입니다. 구성 요소는 버튼만큼 작거나 회전 목마만큼 클 수 있습니다. 견고한 구성 요소를 만드는 핵심은 페이지의 다른 부분과 독립적으로 구성하고 자체 포함하는 것입니다. 어떤 페이지에서든 구성 요소를 삭제할 수 있어야하며 구조와 디자인을 유지 관리해야합니다.

### State

>State classes are helpers that modify the state of a component. Think of accordions that are open or collapsed, links that are active or inactive, or elements that are hidden or visible. It’s common to add/remove state classes with JavaScript. Rather than manipulating styles with JavaScript, you can just update a state class and allow the stylesheet to determine what each state looks like.

상태 클래스는 구성 요소의 상태를 수정하는 도우미입니다. 아코디언이 열려 있거나 접힌 것을 생각하고, 활성 또는 비활성 인 링크 또는 숨거나 볼 수있는 요소를 생각해보십시오. JavaScript로 상태 클래스를 추가 / 제거하는 것은 일반적입니다. 자바 스크립트로 스타일을 조작하는 대신 상태 클래스를 업데이트하고 스타일 시트가 각 상태의 모습을 결정하도록 할 수 있습니다.

### Themes

>Theme classes simply alter a component to use unique colors, fonts, or other decorations. Theme classes can be used to modify an entire page or just a single component. Themes aren’t used on every project but can be useful when you need them.

테마 클래스는 구성 요소를 변경하여 고유 한 색상, 글꼴 또는 기타 장식을 사용합니다. 테마 클래스는 전체 페이지 또는 단일 구성 요소를 수정하는 데 사용할 수 있습니다. 테마는 모든 프로젝트에서 사용되지는 않지만 필요할 때 유용 할 수 있습니다.

### Utilities

>Utility classes are single-purpose helpers that apply one specific styling rule. They can be used to tweak spacing, increase font size, center text, add clear fixes, hide things, etc. Utilities can help you with minor layout adjustments like adding space between components or clearing floats. They can also be used to make minor changes to existing components without the need to create a new component variant.

유틸리티 클래스는 특정 스타일 규칙을 적용하는 단일 목적 도우미입니다. 공간을 조정할 수 있고, 글꼴 크기를 늘리고, 텍스트를 가운데 맞추고, 수정 사항을 추가하고, 물건을 숨길 수 있습니다. 유틸리티는 구성 요소 사이에 공간을 추가하거나 수레를 지우는 것과 같은 사소한 레이아웃 조정을 도와줍니다. 또한 새 구성 요소 변형을 만들 필요없이 기존 구성 요소를 사소하게 변경하는 데에도 사용할 수 있습니다.

```css
.u-sp {
  margin-bottom: 1em !important;
}
.u-clearfix:after {
  content: " ";
  display: block; clear: both; visibility: hidden;
  height: 0; font-size: 0;
}
.u-txt-center {
  text-align: center !important;
}
.u-txt-larger {
  font-size: 130% !important;
}
```

```html
<div class="promo u-sp"></div>
<div class="promo u-sp"></div>
<div class="promo"></div>
```

### Javascript Hooks

>Whenever possible, decouple any dependencies between your JavaScript and styling. Using class names that are used for both styling and DOM selection with JavaScript can cause issues later down the road when the CSS is refactored and the JavaScript dependency is not clearly evident. Instead, use classes that are completely dedicated as JavaScript hooks.

가능한 경우 JavaScript와 스타일 사이의 종속성을 분리하십시오. 자바 스크립트에서 스타일 지정과 DOM 선택 모두에 사용되는 클래스 이름을 사용하면 나중에 CSS가 리팩토링되고 JavaScript 의존성이 명확하지 않은 문제가 발생할 수 있습니다. 대신 JavaScript 훅으로 완전히 전용 된 클래스를 사용하십시오.

```html
<button class="btn btn--buy js-buy-now">
```

## Naming Classes

클래스 이름을 지정할 때 이름이 분별력 (.pq가 아닌 .pq)이 충분해야하지만 (예 : .nav가 아니라 .navigation) 충분히 길어야합니다. 클래스 이름의 가독성은 현재와 미래의 팀 구성원이 프레젠테이션의 논리를 이해하는 데 큰 도움이됩니다.

설명적이고 의미있는 이름을 만드는 것은 CSS를 작성하는 데있어서 가장 힘든 문제 중 하나이지만 신중하게 수행하면 도움이됩니다. 공간은 이름 짓기에 대한 심층적 인 처리를 허용하지 않지만 자세한 내용은 Ethan Muller의 CSS 항목 이름 지정에 대한 매우 유명한 게시물을 참조하십시오.

## BEM Naming Convention

>A very popular and super-helpful convention for naming CSS components is BEM (Block Element Modifier), developed by the Yandex, the popular Russian search engine. The naming convention is very simple:

CSS 구성 요소의 이름을 지정하는 매우 인기 있고 유용한 도움말은 인기있는 러시아어 검색 엔진 인 Yandex에서 개발 한 BEM (Block Element Modifier)입니다. 명명 규칙은 매우 간단합니다.

```
[BLOCK]__[ELEMENT]–[MODIFIER]
```

>You might struggle with using such verbose class names, but the value added by using BEM on your projects will quickly supercede such concerns. Here is an example component that uses BEM class names.

이러한 자세한 클래스 이름을 사용하는 데 어려움을 겪을 수 있지만 프로젝트에서 BEM을 사용하여 추가 된 가치는 이러한 우려를 빠르게 대체합니다. 다음은 BEM 클래스 이름을 사용하는 구성 요소의 예입니다.

```html
<div class="alert alert--warning">
  <h1 class="alert__title">
    <span class="alert__icon"></span>
    Alert Title
  </h1>
  <p class="alert__description">The password you entered is invalid.</p>
</div>
```

>BEM naming provides three primary benefits to your project:

BEM 명명은 프로젝트에 다음 세 가지 주요 이점을 제공합니다.

>* Readability: Using clearly described class names for most of your elements will make it much easier for someone else reading through your HTML or CSS files.
>* Self-description: Using hierarchical names for your classes makes it very clear which elements belong to which base components.
>* Specificity: It may seem excessive to add a class to every element in your component but, by doing this, you can keep the specificity of each of your selectors low, making overrides much more straight-forward.

* 가독성 : 대부분의 요소에 명확하게 설명 된 클래스 이름을 사용하면 다른 사람이 HTML 또는 CSS 파일을 읽는 것이 훨씬 쉬워집니다.
* 자체 설명 : 클래스에 계층 적 이름을 사용하면 어떤 요소가 어떤 기본 구성 요소에 속하는지 명확하게 알 수 있습니다.
* 특이성 : 구성 요소의 모든 요소에 클래스를 추가하는 것은 과도한 것처럼 보일 수 있지만 이렇게하면 각 선택 자의 구체성을 낮게 유지할 수 있으므로 재정의가 훨씬 간단 해집니다.

## Namespacing

>Another best practice when naming your classes is to use prefixes for namespacing the class categories we described previously. These prefixes add a couple characters to your names, but the value of being able to immediately identify the purpose of each class name you see in your HTML or stylesheets is invaluable. Here are the namespaces I use:

클래스 이름을 지정할 때 가장 좋은 또 다른 방법은 앞에서 설명한 클래스 범주의 네임 스페이스에 접두사를 사용하는 것입니다. 이 접두어는 이름에 몇 가지 문자를 추가하지만 HTML 또는 스타일 시트에 표시되는 각 클래스 이름의 용도를 즉시 식별 할 수 있다는 점은 매우 중요합니다. 내가 사용하는 네임 스페이스는 다음과 같습니다.

* Objects: `.o-`
* Components: `.c-`
* State: `.is-` OR `.has-`
* Theme: `.t-`
* Utilities: `.u-`
* Javascript hooks: `.js-`

```html
<footer class="c-footer">
  <div class="o-container-wide">
    <a class="c-footer__logo" href="/">The Assist</a>
    <div class="c-social c-social--follow">
      <div class="c-social__label u-txt-center">Join the conversation</div>
      <ul class="c-social__list">
        <li class="c-social__item"></li>
        <li class="c-social__item is-active"></li>
        <li class="c-social__item"></li>
      </ul>
    </div>
    <p class="c-footer__credit"></p>
  </div>
</footer>
```

>For more information on the value of namespacing, check out Harry Roberts’s [post on the subject](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).

네임 스페이스의 가치에 대한 자세한 내용은 해당 주제에 대한 해리 로버트의 게시물을 확인하십시오.

## Code Style

>Like any code, it’s important that your CSS project make use of a consistent coding style. This includes guidelines around white-space, indentation, naming conventions, comments, etc. You can find some reasonable guidelines from Google, Github or Nicolas Gallagher. Use theirs or create your own similar set of guidelines.

어떤 코드와 마찬가지로, CSS 프로젝트가 일관된 코딩 스타일을 사용하는 것이 중요합니다. 여기에는 공백, 들여 쓰기, 이름 지정 규칙, 주석 등의 지침이 포함됩니다. [Google](https://google.github.io/styleguide/htmlcssguide.html), Github 또는 [Nicolas Gallagher](https://github.com/necolas/idiomatic-css)의 합리적인 지침을 찾을 수 있습니다. 그것들을 사용하거나 자신 만의 유사한 지침을 만드십시오.

## Code Organization

>For optimal code organization you should be using either a pre-processing tool (Sass, Less, Stylus) or a post-processing tool (PostCSS) to compile your code. The advantages are many, including features such as variables, functions, mixins, imports, and nesting. These features will enable you to implement a more organized architecture than what you can do with CSS alone.

>Using imports, you can divide your styles into meaningful files.

최적의 코드 구성을 위해 사전 처리 도구 (Sass, Less, Stylus) 또는 사후 처리 도구 (PostCSS)를 사용하여 코드를 컴파일해야합니다. 변수, 함수, 믹스 인, 가져 오기 및 중첩과 같은 기능을 포함하여 많은 이점이 있습니다. 이러한 기능을 사용하면 CSS만으로 할 수있는 것보다 체계적인 아키텍처를 구현할 수 있습니다.

가져 오기를 사용하여 스타일을 의미있는 파일로 나눌 수 있습니다.

```scss
@import "variables";
@import "mixins";
@import "normalize";
@import "typography";
@import "headings";
@import "headings";
@import "layout";
@import "carousel";
```

>Use variables when any value needs to be used more than once. Prefix your variable names to help identify their purpose and also to make code-completion more useful.

값을 두 번 이상 사용해야하는 경우 변수를 사용하십시오. 목적을 식별하고 코드 완성을보다 유용하게 만들기 위해 변수 이름 앞에 접두사를 붙입니다.

```scss
// Colors
$c-warning: Red;
$c-primary: Blue;
$c-background: White;
```

>Some variables are global in nature and should be stored in dedicated variables files, but other variables are only used within a single component and should be defined within the file that uses them. In Sass, variables can be contained to a localized scope within a nested ruleset structure.

일부 변수는 본질적으로 전역 변수이며 전용 변수 파일에 저장해야하지만 다른 변수는 단일 구성 요소에서만 사용되며이를 사용하는 파일 내에서 정의해야합니다. Sass에서 변수는 중첩 된 룰 세트 구조 내에서 지역화 된 범위에 포함될 수 있습니다.

```scss
.alert {
  $background-color: Red;
  $foreground-color: Cream;
  background-color: $background-color;
  color: $foreground-color;
}
```

## Source Order

>Because of the nature of the CSS cascade, the order of your styles matter. If you are not purposeful about how you order your imports, you will find yourself constantly fighting against the cascade.

>Recently, Harry Roberts published a sensible method for ordering your styles that he calls ITCSS (Inverted Triangle CSS), with a goal of preventing namespace collisions, specificity issues, leaky styles, and inadvertent regressions (see his in-depth slides). The concept is very simple: order your settings and rules starting with those with the broadest reach and lowest specificity and end with those that have the most narrow reach and highest specificity. This means that your variable definitions and bare element rules will always be at the beginning, while your utility classes and IE hacks will go at the end.

>Harry defines seven groups that our files should fit into and sorted in the following order:

CSS 캐스캐이드의 특성 때문에 스타일 순서가 중요합니다. 불러오기 방법에 대해 의도적이지 않은 경우, 지속적으로 캐스케이드와 싸우는 것을 발견하게 될 것입니다.

최근 해리 로버츠 (Harry Roberts)는 네임 스페이스 충돌, 특수성 문제, 새는 스타일 및 부주의 한 회귀를 방지하기 위해 ITCSS (Inverted Triangle CSS)라고 부르는 [스타일을 주문할 수있는 합리적인 방법](https://www.creativebloq.com/web-design/manage-large-scale-web-projects-new-css-architecture-itcss-41514731)을 발표했습니다. 개념은 매우 간단합니다 : 가장 광범위한 도달 범위와 가장 낮은 특이성을 가진 사람들부터 시작하여 가장 좁은 도달 범위와 가장 높은 특이성을 갖는 것으로 끝나는 설정 및 규칙을 순서화하십시오. 즉, 변수 정의와 베어 요소 규칙은 항상 처음에, 유틸리티 클래스와 IE 해킹은 결국 끝납니다. (그의 [in-depth 슬라이드](https://speakerdeck.com/dafed/managing-css-projects-with-itcss)를 보세요)

Harry는 우리 파일이 다음 순서로 맞추어 져야하는 7 개의 그룹을 정의합니다.

>* Settings: Variables and other settings
>* Tools: Custom functions and mixins
>* Generic: Font-face, box-sizing, normalize, etc.
>* Elements: Bare element defaults like headings and links
>* Objects: Layout and structure classes
>* Components: Individual components
>* Trumps: Utilities and other rules meant to be a final trump over everything else

* 설정 : 변수 및 기타 설정
* 도구 : 사용자 정의 함수 및 믹스 틴
* 일반 : 글꼴 -면, 상자 크기, 표준화 등
* 요소 : 제목 및 링크와 같은 기본 요소 기본값
* 개체 : 레이아웃 및 구조 클래스
* 구성 요소 : 개별 구성 요소
* 트럼프 : 다른 모든 것보다 마지막 트럼프가되는 유틸리티 및 기타 규칙

```scss
@import "settings.global";
@import "settings.colors";
@import "tools.functions";
@import "tools.mixins";
@import "generic.box-sizing";
@import "generic.normalize";
@import "elements.headings";
@import "elements.links";
@import "objects.wrappers";
@import "objects.grid";
@import "components.nav";
@import "components.buttons";
@import "components.promos";
@import "trumps.utilities";
@import "trumps.ie8";
```

## Digging Deeper

>This write-up is just an introduction to a vast topic that goes deep and wide, but hopefully it inspires you to think more thoughtfully about how your CSS projects are structured and designed. If you want to dig into this topic further, follow the many links embedded into this post, and check out the following resources and thought leaders in this space.

이 글은 깊이 있고 폭 넓은 주제에 대한 소개 일 뿐이지 만 CSS 프로젝트가 어떻게 구조화되고 디자인되었는지에 대해 더 신중하게 생각하게 해 주길 바랍니다. 이 주제를 더 깊이 파고 싶다면이 게시물에 포함 된 많은 링크를 따라 가면서이 공간에서 다음 리소스와 사고 리더를 확인하십시오.

>* Harry Roberts - One of the most prolific thought leaders in this area currently. Follow him on Twitter, subscribe to his blog, and read through his CSS Guidelines document.
>* Jonathan Snook - Popularized the idea of CSS architecture with his paper and online book, Scalable and Modular Architecture for CSS.
>* Nicole Sullivan - Introduced the concept of Object Oriented CSS currently documented in a [Github wiki](https://github.com/stubbornella/oocss/wiki).


* 해리 로버츠 (Harry Roberts) - 현재이 분야에서 가장 많은 생각을 가진 지도자 중 한 사람. [트위터](https://twitter.com/csswizardry)에서 그를 따라 다니고, 그의 [블로그](https://csswizardry.com/)에 가입하고,[ CSS 가이드 라인 문서](https://cssguidelin.es/)를 읽으십시오.
* Jonathan Snook - 자신의 논문과 온라인 서적 인 CSS 아키텍처의 아이디어와 CSS 용 확장 성 및 모듈 형 아키텍처를 대중화했습니다.
* Nicole Sullivan - Github wiki에 현재 문서화 된 Object Oriented CSS의 개념을 도입했습니다.

>This post is based on my recent presentation on the same topic. Checkout the [slides for the presentation](https://nrambeck.github.io/css-architecture/) or watch the video below.

이 게시물은 동일한 주제에 대한 최근 발표 내용을 기반으로합니다. [프레젠테이션을위한 슬라이드](https://nrambeck.github.io/css-architecture/)를 체크하거나 아래 비디오를보십시오.