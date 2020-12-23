# 📖 ITCSS (Scalable and Maintainable CSS Architecture)

[원문 보러가기](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [📖 ITCSS (Scalable and Maintainable CSS Architecture)](#%F0%9F%93%96-itcss-scalable-and-maintainable-css-architecture)
  - [What is ITCSS?](#what-is-itcss)
  - [Documentation](#documentation)
  - [Resources](#resources)
  - [Key metrics](#key-metrics)
    - [01. Generic to explicit](#01-generic-to-explicit)
    - [02. Low specificity to high specificity](#02-low-specificity-to-high-specificity)
    - [3. Far-reaching to localised (현지화에 집중)](#3-far-reaching-to-localised-%ED%98%84%EC%A7%80%ED%99%94%EC%97%90-%EC%A7%91%EC%A4%91)
  - [Layers](#layers)
    - [01. Settings](#01-settings)
    - [02. Tools](#02-tools)
    - [03. Generic](#03-generic)
    - [04. Elements](#04-elements)
    - [05. Objects](#05-objects)
    - [06. Components](#06-components)
    - [07. Trumps](#07-trumps)
  - [Partials](#partials)
  - [The result](#the-result)
> How do I make my CSS scalable and maintainable? It’s a concern for every front-end developer. ITCSS has an answer.
> 
>Last year when we started to plan our HEROized redesign and new Xfive.co website, I was looking for a CSS architecture which would allow for easy website development and further maintenance.
>
>CSS Modules were quite young and exotic at that time and I’ve always considered the Atomic Design chemistry analogy to be a bit artificial. Then I came across Harry Roberts’s ITCSS in the June 2015 issue of the net magazine and immediately fell in love with this simple, down to earth CSS approach.

작년에 HEROized 재 설계 및 새로운 Xfive.co 웹 사이트를 계획하기 시작했을 때 웹 사이트 개발 및 유지 관리가 쉬운 CSS 아키텍처를 찾고있었습니다.

CSS 모듈은 그 당시 꽤 젊고 이국적이었고 원자 디자인의 화학적 유추를 항상 인공적이라고 생각했습니다. 그런 다음 2015 년 6 월호의 Net Magazine에서 해리 로버츠 (Harry Roberts)의 ITCSS를 만나게되었고, 바로이 간단한 CSS 방식으로 사랑에 빠졌습니다.

## What is ITCSS?

> ITCSS stands for Inverted Triangle CSS and it helps you to organize your project CSS files in such way that you can better deal with (not always easy-to-deal with) CSS specifics like global namespace, cascade and selectors specificity.
> 
> ITCSS can be used with preprocessors or without them and is compatible with CSS methodologies like BEM, SMACSS or OOCSS.
> 
> One of the key principles of ITCSS is that it separates your CSS codebase to several sections (called layers), which take form of the inverted triangle:

ITCSS는 Inverted Triangle CSS의 약자로, 글로벌 네임 스페이스, 계단식 및 선택기 특수성과 같은 CSS 특성을 더 잘 다룰 수있는 방식으로 프로젝트 CSS 파일을 구성하는 데 도움이됩니다.

ITCSS는 전처리 기와 함께 사용하거나 사용하지 않고 BEM, SMACSS 또는 OOCSS와 같은 CSS 방법론과 호환됩니다.

ITCSS의 핵심 원리 중 하나는 CSS 코드베이스를 역 삼각형 형태의 여러 섹션 (레이어라고 함)으로 구분한다는 것입니다.

![](https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/01083650/itcss-layers2.svg)

> Those layers are as follows:

이러한 계층은 다음과 같습니다.

> * Settings – used with preprocessors and contain font, colors definitions, etc.
> * Tools – globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
> * Generic – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
> * Elements – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.
> * Objects – class-based selectors which define undecorated design patterns, for example media object known from OOCSS
> * Components – specific UI components. This is where majority of our work takes place and our UI components are often composed of Objects and Components
> * Utilities – utilities and helper classes with ability to override anything which goes before in the triangle, eg. hide helper class

* 설정(Settings) - 전처리 기와 함께 사용되며 글꼴, 색상 정의 등을 포함합니다.
* 도구(Tools) - 전 세계적으로 사용되는 믹스 인 및 기능. 처음 2 개의 레이어에 CSS를 출력하지 않는 것이 중요합니다.
* Generic - 스타일, 상자 크기 설정 등을 리셋 및 / 또는 정규화합니다. 이것은 실제 CSS를 생성하는 첫 번째 레이어입니다.
* 요소(Elements) - 노출 된 HTML요소 (예 : H1, A 등)의 스타일을 선언합니다. 여기에는 브라우저의 기본 스타일이 있으므로 여기에서 다시 정의 할 수 있습니다.
* 객체(Objects) -  class 선택자를 기반으로 하며 장식되지 않은 디자인 패턴을 정의합니다. (예 : OOCSS에서 알려진 미디어 객체)
* 구성 요소(Components) - 특정 UI 구성 요소. 이것은 대부분의 작업이 이루어지는 곳이며 UI 구성 요소는 종종 객체 및 구성 요소로 구성됩니다
* 유틸리티(Utilities) - 삼각형에서 이전에 있었던 것을 무효화 할 수있는 유틸리티 및 헬퍼 클래스. 도우미 클래스 숨기기

> The triangle also shows how styles represented by selectors are ordered in the resulting CSS: from generic styles to explicit ones, from low-specificity selectors to more specific ones (but still not too specific, IDs are not allowed) and from far reaching to localized ones.

삼각형은 선택기가 나타내는 스타일이 결과 CSS에서 정렬되는 방식을 보여줍니다. 일반 스타일에서 명시적인 스타일로, 특이성이 낮은 선택기부터 더 구체적인 스타일로 (그러나 너무 구체적이지는 않지만 ID는 허용되지 않음) 사람.

![](https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/10154630/itcss-key-metrics.svg)

> Such CSS organization should help you avoid Specificity Wars and is represented by a healthy specificity graph.

이러한 CSS 조직은 구체성 전쟁을 피하는 데 도움이되며 [건강한 특수성 그래프](https://jonassebastianohlsson.com/specificity-graph/)로 표현됩니다.

## Documentation

> Update 10/27/2016: The net magazine has just republished the original article from the print version (see the resources below).
> 
> Normally, at this point I would refer you to the ITCSS webpage for further study. However, nothing like open source documentation exists.
> 
> ITCSS remains partially proprietary and if you want to fully utilize it, you should study the original introduction in the net magazine. I’m not here to judge author’s intentions (I’m thankful to him for sharing his knowledge), but I think this prevents ITCSS wider adoption (which might be the intention, after all).
> 
> The partially proprietary character of ITCSS prevents its wider adoption.
> 
> This shouldn’t prevent you from start to use it in your projects, though, if you are really interested in doing so. Get that particular issue of the net magazine to learn ITCSS fundamentals, and then study available online resources and examples to help you with its adoption in real-life projects.

업데이트 10/27/2016 : net 잡지가 인쇄본에서 원본 기사를 방금 다시 게시했습니다 (아래 자료 참조).

일반적으로이 시점에서 나는 더 많은 연구를 위해 ITCSS 웹 페이지를 참조 할 것입니다. 그러나 오픈 소스 문서와 같은 것은 존재하지 않습니다.

ITCSS는 부분적으로 독점적이며, 완전히 활용하려면 넷 잡지의 원본 소개를 연구해야합니다. 나는 저자의 의도를 판단하기 위해 여기에 온 것은 아니지만 (나는 그의 지식을 공유해 준 것에 대하여 그에게 감사하고있다.) 그러나 이것은 ITCSS의 더 광범위한 채택을 막을 것이라고 생각한다.

부분적으로 독점적 인 ITCSS의 특성 때문에 ITCSS는 더 널리 채택되지 않습니다.

그렇다고해서 실제로 프로젝트에 사용하는 것을 막지는 못합니다. ITCSS 기본 사항을 배우기 위해 넷 잡지의 특정 호를 얻은 다음 실전 프로젝트에서 채택하는 데 도움이되는 온라인 리소스와 예제를 검토하십시오.

## Resources

> I’ve used ITCSS on 4 projects so far (including Xfive.co) and the following resources helped me to get better understanding of it:

ITCSS를 지금까지 4 개 프로젝트 (Xfive.co 포함)에 사용했으며 다음 리소스를 통해 ITCSS를 더 잘 이해할 수있었습니다.

* [Manage large CSS projects with ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) – ITCSS introduction by Harry Roberts (the original article republished from the print version, missing are shorter columns on the specificity graph and preprocessors)
* [Manage large-scale web projects with new CSS architecture ITCSS](https://www.creativebloq.com/web-design/manage-large-scale-web-projects-new-css-architecture-itcss-41514731) –  ITCSS introduction and interview with Harry Roberts
* [BEMIT: Taking the BEM Naming Convention a Step Further](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

## Key metrics

>ITCSS is a fully managed architecture, which means it tells you how to construct your entire CSS project. It doesn't just tell you how to build your components, for example, but helps you manage everything from Sass architecture to source order, low-level typographical styles to theming, and lots more besides.

ITCSS는 완전히 관리되는 아키텍처이므로 전체 CSS 프로젝트를 구성하는 방법을 알려줍니다. 예를 들어 구성 요소를 작성하는 방법 만 알려주는 것이 아니라 Sass 아키텍처에서 소스 순서, 낮은 수준의 인쇄 스타일에서부터 테마 및 기타 사항까지 모든 것을 관리하는 데 도움이됩니다.

>ITCSS works by ordering your entire CSS project by three key metrics. We'll look at these now.

ITCSS는 세 가지 주요 지표를 통해 전체 CSS 프로젝트를 주문함으로써 작동합니다. 우리는 지금 이것들을 볼 것입니다.

### 01. Generic to explicit

>We start out with the most generic, low-level, catch-all, unremarkable styles, and eventually progress to more explicit and specific rules as we move through the project. We might start with our reset, then progress to slightly more scoped rules like h1–6 {}, right through to extremely explicit rules such as .text-center {}.

우리는 가장 일반적인, 저수준의, 포괄적 인, 눈에 띄는 스타일을 가지고 시작하며, 결국 프로젝트를 진행하면서보다 명확하고 구체적인 규칙으로 진행합니다. 재설정을 시작한 후 h1-6 {}과 같이 좀 더 범위가 지정된 규칙으로 진행하고 .text-center {}와 같은 매우 명시적인 규칙을 진행할 수 있습니다.

### 02. Low specificity to high specificity

>The lowest-specificity selectors appear towards the beginning, with specificity steadily increasing as we progress through the project. We want to ensure that we avoid as much of the Specificity Wars as we can, so we try and refrain from writing higher-specificity selectors before lower-specificity ones. We're always adding specificity in the same direction, thus avoiding conflicts.

가장 낮은 특이성 선별자는 처음부터 나타나며, 프로젝트가 진행됨에 따라 특이성이 꾸준히 증가합니다. 우리는 가능한 한 특이성 전쟁을 피하기 위해보다 특이성이 낮은 선택자를 쓰기 전에 시도합니다. 우리는 항상 같은 방향으로 특이성을 추가하여 갈등을 피합니다.

### 3. Far-reaching to localised (현지화에 집중)

>Selectors towards the beginning of the project affect a lot of the DOM, with that reach being progressively lessened as we go through the codebase. We want to make 'passes' over the DOM by writing rules that affect progressively less and less of it.

프로젝트 시작 단계의 셀렉터는 많은 DOM에 영향을 미치며, 코드베이스를 통과하면서 도달 범위가 점차 줄어들고 있습니다. 점차적으로 점차적으로 영향을 미치는 규칙을 작성하여 DOM에 '통과'를 만들고 싶습니다.

>We might start by wiping the margins and paddings off everything, then we might style every type of element, then narrow that down to every type of element with a certain class applied to it, and so on. It is this gradual narrowing of reach that gives us the triangle shape.

먼저 마진과 패딩을 모두 지우는 것으로 시작한 다음 모든 유형의 요소를 스타일링 한 다음 해당 클래스에 적용된 모든 유형의 요소까지 축소하는 등의 작업을 수행 할 수 있습니다. 우리가 삼각형 모양을주는 것은 점차적으로 범위를 좁히는 것입니다.

>Ordering our projects according to these key metrics has several benefits. We can begin to share global and far-reaching styles much more effectively and efficiently, we vastly reduce the likelihood of specificity issues, and we write CSS in a logical and progressive order. This means greater extensibility and less redundancy, which in turn means less waste and much smaller file sizes.

이러한 주요 지표에 따라 프로젝트를 주문하면 몇 가지 이점이 있습니다. 우리는 글로벌 스타일과 멀리있는 스타일을 훨씬 더 효과적이고 효율적으로 공유하기 시작할 수 있으며, 특수성 문제의 가능성을 크게 줄이고 논리적이고 진보적 인 순서로 CSS를 작성합니다. 즉, 확장 성이 뛰어나고 중복성이 적어 지므로 낭비가 적고 파일 크기가 훨씬 작아집니다.

## Layers

![](https://cdn.mos.cms.futurecdn.net/7ae01832414aa9e829a92c87eb862f95-650-80.jpg)

>We can stick to these metrics by breaking our CSS up into several sections, or 'layers'. Each layer must be introduced in a location that honours each of the criteria. Most people (and architectures) attempt to split CSS projects up into thematic groups: here are our typographical styles, here are our form styles, here are our image gallery styles. The downside to this is that it isn't very sympathetic to how CSS actually works, and doesn't order CSS in a way that best utilises, tames or takes advantage of the cascade, inheritance or specificity.

CSS를 여러 섹션 또는 '레이어'로 분리하여 이러한 측정 항목을 고수 할 수 있습니다. 각 계층은 각 기준을 존중하는 위치에 도입되어야합니다. 대부분의 사람들 (및 아키텍처)은 CSS 프로젝트를 주제별 그룹으로 나누려고합니다. 여기에는 활자체 스타일이 있으며 여기에는 양식 스타일이 있으며 여기에는 이미지 갤러리 스타일이 있습니다. 이 단점은 CSS가 실제로 작동하는 방식에 매우 호의적이지 않으며 캐스케이드, 상속 또는 특이성을 최대한 활용하거나 테스팅하거나 활용하는 방식으로 CSS를 주문하지 않는다는 것입니다.

>In ITCSS, each layer is a logical progression from the last. It increases in specificity, it gets more explicit and intentioned, and it narrows the reach of the selectors used. This means our CSS is inherently easier to scale, as we're writing it in an order that only ever adds to what was written previously. We don't waste time undoing or overriding overly opinionated CSS that was written earlier on.

ITCSS에서 각 계층은 마지막 계층부터 논리적으로 진행됩니다. 특이성이 높아지면 더 명확하고 의도적으로 표현되며 사용 된 선택자의 범위가 좁아집니다. 이것은 CSS가 본질적으로 확장이 더 쉽다는 것을 의미합니다. 이전에 작성된 순서 만 추가하면됩니다. 앞에서 작성된 지나치게 독창적 인 CSS를 취소하거나 무시하는 시간을 낭비하지 않아도됩니다.

>It also means that every thing, and every type of thing, has its own consistent, predictable place to live. This makes both finding and adding styles much simpler, which is particularly useful when you have a number of developers contributing to the codebase.

또한 모든 사물과 모든 유형의 사물은 일관되고 예측 가능한 곳이 있습니다. 이렇게하면 스타일을 찾고 추가하는 작업이 훨씬 간단 해지며, 코드베이스에 기여하는 개발자가 많은 경우 특히 유용합니다.

>ITCSS, by default, has seven layers. We'll take a look at each of these in turn now.

ITCSS는 기본적으로 7 개의 레이어를 가지고 있습니다. 우리는 차례 차례로 이것들 각각을 살펴볼 것입니다.

### 01. Settings

>If you are using a preprocessor, start here. This holds any global settings for your project. I'd like to stress the word global – this layer should only house settings that need to be accessed from anywhere. Settings like $heading-size-1 should be defined in the Headings partial. This ensures this layer stays nice and slim, and means that most settings can be found alongside the code that uses them, making finding things far simpler.

전처리기를 사용하는 경우 여기에서 시작하십시오. 프로젝트의 모든 전역 설정을 유지합니다. 글로벌이라는 단어를 강조하고 싶습니다.이 레이어는 어느 곳에서나 액세스해야하는 설정 만 포함해야합니다. $ heading-size-1과 같은 설정은 제목 부분에 정의되어야합니다. 이렇게하면이 레이어가 멋지고 슬림하게 유지되며, 대부분의 설정을 사용하는 코드와 함께 찾을 수 있으므로 훨씬 간단하게 찾을 수 있습니다.

>Examples of global settings might be things like the base font size, colour palettes, config (for example, $environment: dev;) and so on.

전역 설정의 예로는 기본 글꼴 크기, 색상 표, config (예 : $ environment : dev;) 등이 있습니다.

### 02. Tools

>The next layer houses your globally available tooling – namely mixins and functions. Any mixin or function that does not need accessing globally should belong in the partial to which it relates. The Tools layer comes after the Settings layer because a mixin may require one of the global settings as a default parameter. Examples of global tools might be gradient mixins, font-sizing mixins and so on.

다음 레이어에는 믹스 인 및 기능과 같이 전역에서 사용 가능한 툴링이 있습니다. 전 세계적으로 액세스 할 필요가없는 믹스 인 또는 기능은 관련된 부분에 속해야합니다. Mixin은 글로벌 설정 중 하나를 기본 매개 변수로 요구하기 때문에 Tools 레이어는 Settings 레이어 뒤에옵니다. 전역 도구의 예로는 그라데이션 믹스, 글꼴 크기 믹스 등이 있습니다.

### 03. Generic

>The Generic layer is the first one that actually produces any CSS. It houses very high-level, far reaching styles. This layer is seldom modified, and is usually the same across any projects you work on. It contains things like Normalize.css, global box-sizing rules, CSS resets and so on. The Generic layer affects a lot of the DOM, hence it being nice and wide in the Triangle model, and occurring very early on.

일반 레이어는 실제로 CSS를 생성하는 첫 번째 레이어입니다. 그것은 매우 높은 수준, 멀리 도달 스타일을 갖추고 있습니다. 이 레이어는 거의 수정되지 않으며 일반적으로 작업하는 모든 프로젝트에서 동일합니다. Normalize.css, 글로벌 상자 크기 조정 규칙, CSS 재설정 등과 같은 것들이 포함되어 있습니다. Generic 레이어는 많은 DOM에 영향을 미치므로 Triangle 모델에서 멋지고 넓으며 초기에 발생합니다.

### 04. Elements

>These are bare, unclassed HTML elements. What does an h1 look like without a class on it? What does an a look like without a class on it? The Elements layer binds onto bare HTML element (or 'type') selectors only. It is slightly more explicit than the previous layer in that we are now saying 'make every h1 this big', or 'make every a be a certain colour'. It is still a very low-specificity layer, but affects slightly less of the DOM, and is slightly more opinionated, hence its location in the Triangle.

>The Elements layer is typically the last one in which we'd find bare, element-based selectors, and is very rarely added to or changed after initial setup. Once we have defined element-level styles, all additions and deviations should be implemented using classes.

이것들은 unclassed 한 HTML 엘리먼트입니다. h1은 수업을 듣지 않고 어떻게 생겼습니까? 그것에 수업이없는 것처럼 보이는 것은 무엇입니까? Elements 레이어는 노출 된 HTML 요소 (또는 '유형') 선택기에만 바인딩됩니다. 그것은 우리가 이제는 '모든 h1을 이렇게 크게 만들라', 또는 '모든 것을 하나의 특정한 색으로 만들어라'는 점에서 이전 계층보다 약간 더 명백합니다. 그것은 여전히 매우 특이성이 낮은 층이지만, DOM의 영향이 약간 적으며, 약간 더 독단적이며 따라서 Triangle에 위치합니다.

Elements 레이어는 일반적으로 맨 처음 엘리먼트 기반 선택기를 찾을 수있는 마지막 레이어이며, 초기 설정 이후에 추가되거나 변경된 경우는 거의 없습니다. 요소 수준 스타일을 정의한 후에는 클래스를 사용하여 모든 추가 및 편차를 구현해야합니다.

### 05. Objects

>Users of OOCSS will be familiar with the concept of objects. This is the first layer in which we find class-based selectors. These are concerned with styling non-cosmetic design patterns, or 'objects'. Objects can range from something as simple as a .wrapper element, to layout systems, through to things like the OOCSS poster child – the Media Object. This layer affects less of the DOM than the last layer, has a higher specificity, and is slightly more explicit in that we are now targeting sections of the DOM with classes.

OOCSS 사용자는 객체 개념에 익숙합니다. 이 클래스는 클래스 기반 선택기를 찾는 첫 번째 계층입니다. 이들은 비 - 코스메틱 디자인 패턴 또는 '오브젝트'의 스타일링과 관련됩니다. 객체는 .wrapper 요소처럼 간단한 것부터 레이아웃 시스템에 이르기까지 OOCSS 포스터 하위 - Media Object와 같은 것에 이르기까지 다양합니다. 이 레이어는 마지막 레이어보다 DOM에 덜 영향을 미치고 더 높은 특이성을 가지며 이제 클래스의 DOM 섹션을 대상으로한다는 점에서 약간 더 명확합니다.

### 06. Components

>The Components layer is where we begin to style recognisable pieces of UI. We're still binding onto classes here, so our specificity hasn't yet increased. However, this layer is more explicit than the last one in that we are now styling explicit, designed pieces of the DOM.

Components 레이어는 인식 가능한 UI 부분을 스타일링하기 시작하는 곳입니다. 우리는 여전히 여기 수업에 묶여있어, 우리의 특이성은 아직 증가하지 않았습니다. 그러나이 레이어는 DOM의 명시 적으로 디자인 된 부분을 스타일링하고 있다는 점에서 마지막 레이어보다 더 분명합니다.

>We shouldn't find any selectors with a lower specificity than one class in this layer. This is where the majority of your work will happen after initial project set-up. Adding new components and features usually makes up the vast majority of development.

우리는이 계층에서 하나의 클래스보다 낮은 특이성을 가진 선택자를 발견해서는 안됩니다. 이것은 초기 프로젝트 설정 후 대부분의 작업이 일어날 곳입니다. 새로운 구성 요소와 기능을 추가하면 대개 개발의 대부분을 차지하게됩니다.

### 07. Trumps

>This layer beats – or 'trumps' – all other layers, and has the power to override anything at all that has gone before it. It is inelegant and heavy-handed, and contains utility and helper classes, hacks and overrides.

이 레이어는 다른 모든 레이어보다 먼저 뛰거나 '넘어져'있습니다. 이전의 모든 레이어를 재정의 할 수있는 기능이 있습니다. 그것은 우아하고 강압적이며 유틸리티 및 헬퍼 클래스, 해킹 및 재정의를 포함합니다.

>A lot of the declarations in this layer will carry !important (e.g. .text-center { text-align: centre !important; }). This is the highest specificity layer – it includes the most explicit types of rule, with the most narrow focus. This layer forms the point of the Triangle.

이 레이어의 많은 선언은 중요합니다 (예 : 텍스트 중심 {텍스트 맞춤 : 중심! 중요;}). 가장 높은 특이성 계층입니다. 가장 명확한 유형의 규칙을 포함하며 가장 좁은 초점을 갖습니다. 이 레이어는 삼각형의 포인트를 형성합니다.

![Following this layered, key metrics-based, ITCSS source order approach gives us a sane application of styles across our project](https://cdn.mos.cms.futurecdn.net/2f32642979cdc091770496a811ea5416-650-80.jpg)

>So instead of grouping things into 'typographic styles' , or 'form styles' , we are breaking them into groups based around specificity, reach and explicitness. This format allows us to write our CSS in an order that only ever adds to and inherits from what came previously.

따라서 '인쇄 스타일'또는 '양식 스타일'로 항목을 그룹화하는 대신 구체성, 도달 범위 및 명확성을 기반으로 그룹으로 구분합니다. 이 형식을 사용하면 이전에 추가되거나 상속 된 순서로 CSS를 작성할 수 있습니다.

>We spend very little time undoing things, because our cascade and specificity are all pointing in the same direction. We drastically reduce the amount of collisions, leaks and redefinitions.

우리의 계단식과 특이성은 모두 같은 방향을 가리키고 있기 때문에 우리는 일을하는 데 거의 시간을 할애하지 않습니다. 우리는 충돌, 누수 및 재정의 양을 크게 줄입니다.

## Partials

>Each layer contains a series of partials. I recommend the naming convention _<layer>.<partial>.scss (for example: _settings.colors.scss, _elements.headings.scss, _components.tabs.scss).

각 레이어에는 일련의 부분이 있습니다. 명명 규칙 인 <layer>. <partial> .scss (예 : _settings.colors.scss, _elements.headings.scss, _components.tabs.scss)를 사용하는 것이 좋습니다.

>These partials should be kept as small and granular as possible, with each one containing only as much CSS as it needs to fulfil its role. So _elements.headings.scss would contain only the rules h1 to h6 and nothing more. If you have, for example, a Page Title component that makes a main heading (e.g. h1) and a subheading (e.g. h2) look a certain way, you would create a _components.page-title.scss partial in the Components layer and bind onto classes (e.g. .page-title, .page-title-sub), not onto HTML elements.

이 부분은 가능한 한 작고 세분화 된 상태로 유지되어야하며 각 부분에는 CSS의 역할 만 수행하면됩니다. 따라서 _elements.headings.scss에는 h1에서 h6까지의 규칙 만 포함됩니다. 예를 들어 메인 제목 (예 : h1)과 부제목 (예 : h2)을 특정 방식으로 보이게하는 페이지 제목 구성 요소가있는 경우 구성 요소 레이어에 _components.page-title.scss 부분을 작성하고 바인딩합니다 HTML 요소가 아닌 클래스 (예 : .page-title, .page-title-sub)에 추가하십시오.

>This is how ITCSS works: we do not place all of our heading-related styles together. Instead, we place all of our element-based rules together, and all of our class-based rules together. We're now ordering the project based on useful CSS metrics, and not creating awkward specificity and cascade groupings by ordering the project in thematic chunks.

이것이 ITCSS가 작동하는 방식입니다. 우리는 모든 제목 관련 스타일을 함께 배치하지 않습니다. 대신 모든 요소 기반 규칙과 모든 클래스 기반 규칙을 함께 배치합니다. 이제 유용한 CSS 메트릭을 기반으로 프로젝트를 주문하고 프로젝트를 주제별 청크로 정렬하여 어색한 특수성 및 계단식 그룹을 만들지 않습니다.

## The result

>When this all comes together, it could look something like this:

이 모든 것이 모이면 다음과 같이 보일 수 있습니다.

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

@import "components.site-nav";
@import "components.buttons";
@import "components.carousel";
@import "trumps.clearfix";
@import "trumps.utilities";
@import "trumps.ie8";
```

>Even in this tiny example, you can see how each layer can contain any number of partials, and these partials can theoretically sit in any @import order you wish. The only requirement is that the layers themselves always remain in this formation.

이 작은 예제에서조차도 각 레이어에 몇 개의 부분이 포함될 수 있는지를 볼 수 있으며 이러한 부분은 이론적으로 원하는 모든 @yport 순서로 놓을 수 있습니다. 유일한 요구 사항은 레이어 자체가 항상이 형성에 남아 있다는 것입니다.

>We ensure each layer contains CSS of:

각 레이어에 다음 CSS가 포함되도록합니다.

>* A similar specificity: All element-based selectors, or all class-based selectors, or utility classes carrying !important
>* A similar explicitness: Styling all your bare HTML elements, or styling UI components, or styling specific helper classes
>* A similar reach: Ability to affect all of the DOM (e.g. * {}), a subset of the DOM (e.g. a {}), a section of the DOM (e.g. .carousel {}) or a specific DOM node (e.g. .clearfix {})

* 비슷한 특이성 : 모든 요소 기반 선택자 또는 모든 클래스 기반 선택자 또는 유틸리티 클래스가 중요!
* 비슷한 설명 : 모든 숨겨진 HTML 요소 스타일링 또는 UI 구성 요소 스타일 지정 또는 특정 도우미 클래스 스타일 지정
* 비슷한 도달 범위 : DOM (예 : * {}), DOM의 하위 집합 (예 : {}), DOM의 섹션 (예 : 회전식 {}) 또는 특정 DOM 노드 (예 : clearfix {})

>This drill-down approach gives us a much more manageable CSS architecture. Now we know that everything we add should be an addition to whatever has gone before it. We know where each type of rule will live and where to put any new styles, and we have the confidence that all our different selectors will play nicely alongside each other.

이 드릴 다운 접근 방식은 훨씬 더 관리가 용이 ​​한 CSS 아키텍처를 제공합니다. 이제 우리는 우리가 추가 한 모든 것이 그 전에 무엇이 되었든지에 추가되어야 함을 안다. 우리는 각 유형의 규칙이 어디에 살고 새로운 스타일을 어디에 둘 것인지 알고 있으며, 우리는 모든 다른 선택자가 서로 나란히 멋지게 놀 수 있다는 확신을 가지고 있습니다.