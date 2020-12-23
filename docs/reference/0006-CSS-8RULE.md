# 📖 견고하고 확장 가능한 CSS 아키텍처를위한 8가지 간단한 규칙

[원문 보러가기](https://github.com/jareware/css-architecture)

## Translations

- [Português (Brasil)](https://medium.com/tableless/8-regras-simples-para-uma-arquitetura-css-robusta-e-escal%C3%A1vel-545c6dade170)
- [Chinese](http://www.jianshu.com/p/acb4b9d8ff4f)

이것은 지난 수년간 전문 웹 개발에서 대규모의 복잡한 Web 프로젝트에서 CSS 관리에 대해 배운 목록입니다. 나는 이 일에 대해 충분한 시간을 가지기를 요청 받았지만, 좋은 생각처럼 들리도록 하는 문서를 가지고 있었습니다.

나는 설명을 짧게 하려고 노력했지만 이것은 근본적으로 tl;dr입니다 (Too Long; Didn't Read.):

1. [**calsses를 선호한다 (Always prefer classes)**](#1-always-prefer-classes)
2. [**구성 요소 코드의 동일 위치 지정 Co-locate component code**](#2-co-locate-component-code)
3. [**일관된 클래스 네임 스페이스 Use consistent class namespacing**](#3-use-consistent-class-namespacing)
4. [**네임 스페이스와 파일 이름 사이의 엄격하게 대응시킨다 Maintain a strict mapping between namespaces and filenames**](#4-maintain-a-strict-mapping-between-namespaces-and-filenames)
5. [**구성 요소 외부의 스타일 유출 방지 Prevent leaking styles outside the component**](#5-prevent-leaking-styles-outside-the-component)
6. [**구성 요소 내부의 유출 스타일 방지 Prevent leaking styles inside the component**](#6-prevent-leaking-styles-inside-the-component)
7. [**구성 요소 경계 존중 Respect component boundaries**](#7-respect-component-boundaries)
8. [**외부 스타일을 느슨하게 통합 Integrate external styles loosely**](#8-integrate-external-styles-loosely)

## Introduction

> If you're working with frontend applications, eventually you'll need to style things. And even though the state-of-the-art of frontend applications keeps blazing ahead, CSS is still the only way to style anything on the web (and lately, in some cases, [native applications too](https://facebook.github.io/react-native/)). There's two broad categories of styling solutions out there, namely:

프론트 엔드 응용 프로그램으로 작업하는 경우 궁극적으로 스타일을 지정해야합니다. 프론트 엔드 애플리케이션의 최첨단 기술이 계속 앞서고 있지만, CSS는 여전히 스타일을 꾸미는 유일한 방법입니다.

> * CSS preprocessors, which have been around for ages (such as [SASS](http://sass-lang.com/), [LESS](http://lesscss.org/), and others)
> * CSS-in-JS libraries, which are a relatively new approach to styling (such as [free-style](https://github.com/blakeembrey/free-style), and [many others](https://github.com/MicheleBertoli/css-in-js))

* 전처리 기는 여러 세대에 걸쳐 사용되어 왔습니다.
* CSS-in-JS 라이브러리는 비교적 새로운 스타일링 접근 방식입니다.

>The choice between the two approaches is a topic for a separate article, and as usual, both have their pros and cons. That said, I'll be focusing on the former approach, and if you've chosen to go with the latter, this article will probably be a bit less interesting.

두 가지 접근법 중 하나를 선택하는 것은 별도의 기사를위한 주제이며 두 가지 모두 장단점이 있습니다. 즉, 전 접근 방식에 초점을 맞출 것이며, 후자를 선택했다면이 기사는 다소 덜 재미있을 것입니다.

## High-level goals

>So we're after a robust, scalable CSS architecture. But what properties does that call for, specifically?

따라서 우리는 견고하고 확장 가능한 CSS 아키텍처를 따르고 있습니다. 그 속성은 아래와 같습니다.

>* **Component oriented** - The best way to deal with UI complexity is to split the UI into smaller components. If you're using a sensible framework, the JavaScript side of this will come naturally. [React](https://facebook.github.io/react/), for instance, encourages a high-level of componentization and compartmentalization. We want a CSS architecture to match.
>* **Sandboxed** - Splitting the UI into components won't help our cognitive load if touching the styles of one component can have unwanted and unpredictable effects on another. Fundamental CSS features such as the [cascade](https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Cascading_and_inheritance), and a single, global namespace for identifiers actively work against you in this regard. If you're familiar with the [Web Components spec](https://developer.mozilla.org/en-US/docs/Web/Web_Components), think of this as getting the [style isolation benefits of the Shadow DOM](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201/) without having to care about browser support (or whether or not the spec ever gets serious traction).
>* **Convenient** - We want all the nice things, and we don't want to work for them. That is, we don't want to make our developer experience any worse by adopting this architecture. If possible, we want to make it better.
>* **Err on the side of safety** - Somewhat related to the previous point, we want everything to be *local by default*, and global only as an exception. We engineers are lazy people, and the path of least resistance always needs to point to the correct solution.

* **Component oriented** - UI 복잡성을 처리하는 가장 좋은 방법은 UI를 더 작은 구성 요소로 분할하는 것입니다. 합리적인 프레임 워크를 사용하고 있다면 JavaScript 측면이 자연스럽게 나옵니다. 예를 들어, [React](https://facebook.github.io/react/)는 높은 수준의 구성 요소 화 및 구획화를 권장합니다. CSS 아키텍처가 일치하기를 바랍니다.
* **Sandboxed 샌드 박스 처리** - UI를 구성 요소로 나누는 것은 한 구성 요소의 스타일을 만지면 다른 구성 요소에 원하지 않고 예측할 수없는 영향을 미칠 수 있으므로 인지 부하에 도움이되지 않습니다. [cascade](https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Cascading_and_inheritance)와 같은 기본적인 CSS 기능과 식별자에 대한 단일 전역 네임 스페이스는 이와 관련하여 적극적으로 작동합니다. [웹 구성 요소 사양](https://developer.mozilla.org/en-US/docs/Web/Web_Components)에 익숙한 사용자는 [그림자 DOM의 스타일 격리 이점](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201/)을 얻는 것으로 생각하십시오. 브라우저 지원 (또는 사양이 심각한 견인력을 얻었는지 여부)에 신경을 쓰지 않아도됩니다.
* **Convenient 편리** - 우리는 모든 멋진 것들을 원하며 우리는 그들을 위해 일하기를 원하지 않습니다. 즉, 우리는이 아키텍처를 채택함으로써 개발자의 경험을 악화 시키려하지 않습니다. 가능하다면 더 좋게 만들고 싶습니다.
* **Err on the side of safety안전 측면에서의 오류** - 이전 점과 다소 관련이 있습니다. 기본적으로 모든 것이 *로컬이고* 전역은 예외로만 사용되기를 원합니다. 우리 기술자는 게으른 사람들이며, 최소한의 저항의 길은 언제나 올바른 해결책을 지적해야합니다.

## Concrete rules: 구체적 규칙

### 1. Always prefer classes

>This is just to get the obvious out of the way.

이것은 방해가되지 않도록하는 것입니다.

>Do not target ID's (e.g. `#header`), because whenever you think there can be only one instance of something, [on an infinite timescale](https://twitter.com/stedwick/status/525777867146539009), you'll be proven wrong. One past example of this was when we wanted to weed out any data-binding bugs on a large application we were working on. We started two instances of our UI code, side-by-side in the same DOM, both bound to a *shared* instance of our data model. This was to make sure that all changes in the data model were correctly reflected in both UI's. Any components that you might have assumed to always be unique, such as a header bar, no longer are. This is a great benchmark for surfacing other subtle bugs related to assumptions about uniqueness too, by the way. I digress, but the moral of the story is: there's no situation where targeting an ID would be a *better* idea than targeting a class, so let's just not, ever.

ID의 대상을 지정하지 마십시오 (예 :`# header`). 무언가의 인스턴스가 하나만있을 수 있다고 생각할 때마다 [ infinite timescale에서](https://twitter.com/stedwick/status/525777867146539009), 당신은 틀린 것으로 입증된다. 과거의 한 가지 예는 우리가 작업하고있는 대형 응용 프로그램에서 데이터 바인딩 버그를 제거하려는 경우였습니다. 우리는 동일한 DOM에서 나란히 배치 된 두 개의 UI 코드 인스턴스를 데이터 모델의 *공유* 인스턴스에 바인딩하기 시작했습니다. 이는 데이터 모델의 모든 변경 사항이 두 UI에 모두 올바르게 반영되었는지 확인하기위한 것입니다. 머리글 막대와 같이 항상 고유하다고 가정했을 수도있는 구성 요소는 더 이상 존재하지 않습니다. 이는 고유성에 대한 가정과 관련된 다른 미묘한 버그를 표면적으로 나타낼 수있는 훌륭한 벤치 마크입니다. 나는 빗 나간다. 그러나 이야기의 도덕은 ID를 표적으로하는 것이 수업을 목표로하는 것보다 더 좋은 생각이 될 수는 없다.

>Neither should you target elements (e.g. `p`) directly. It's often OK to target elements that *belong to a component* (see below), but on their own, eventually you'll end up having to [undo those styles](http://csswizardry.com/2012/11/code-smells-in-css/) for a component that doesn't want them. Recalling our high-level goals, this also goes against just about all of them (component-orientedness, avoiding the cascade like the plague, and being local by default). Setting things like fonts, line-heights and colors (a.k.a [inherited properties](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance)) on `body` *can* be the exception to this rule if you so choose, but if you're serious about component isolation, it's completely feasible to forgo even these (see below about [working with external styles]

또한 요소를 직접 대상으로해서는 안됩니다. *콤포넌트에 속한* 요소를 대상으로하는 것은 가끔 가능하지만 (아래 참조), 결국에는 이러한 [스타일을 취소해야합니다](http://csswizardry.com/2012/11/code-smells-in-css/). 우리의 고수준 목표를 상기해보면 이는 또 그 모든것에 반대한다는걸 알 수 있습니다.(구성 요소 지향성(component-orientedness), 전염병과 같은 계단식 피하기(avoiding the cascade like the plague), 기본적으로 지역화 됨).
`body`에 fonts, line-heights와 colors와 같은 설정값 (a.k.a [상속되는 속성들](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance))을 설정하는 것은 당신이 그렇게 선택한다면 이 규칙에서 예외가 될 수 있습니다. 하지만 당신이 컴포넌트 분리에 대해 진지하게 생각하고 있다면, 이것들을 버리는 것은 완전히 가능합니다. ([외부 스타일로 작업하기](#8-integrate-external-styles-loosely)를 확인하세요)

>So with very few exceptions, your styles should always target a class.

따라서 꼭 필요한 경우를 제외하고, 스타일은 항상 클래스를 대상으로 해야합니다.

### 2. 구성 요소 코드의 동일 위치 지정 Co-locate component code

>When working on a component, it helps tremendously if everything related to that component — its JavaScript, styles, tests, documentation, etc — live very close to each other:

구성 요소(components)를 사용하여 작업 할 때, JavaScript, 스타일, 테스트 문서화 등 그 구성 요소에 대한 모든이 서로 매우 가깝게 있으면 매우 도움이됩니다.

```
ui/
├── layout/
|   ├── Header.js              // component code
|   ├── Header.scss            // component styles
|   ├── Header.spec.js         // component-specific unit tests
|   └── Header.fixtures.json   // any mock data the component tests might need
├── utils/
|   ├── Button.md              // usage documentation for the component
|   ├── Button.js              // ...and so on, you get the idea
|   └── Button.scss
```

>When you're working in the code, simply open your project browser, and all other aspects of the component are at your fingertips. There's a natural coupling between the styles and the JavaScript that produces your DOM, and it's a fair bet you'll be touching one soon after touching the other. The same applies to a component and its tests, for example. Think of this as the [locality of reference principle](https://en.wikipedia.org/wiki/Locality_of_reference) for UI components. I, too, used to meticulously maintain separate mirrors of my source tree under `styles/`, `tests/`, `docs/` etc, until I realized that literally the only reason I kept doing that was because that's how I'd always done it.

코드에서 작업하는 경우에는 단순히 프로젝트 브라우저를 열고 구성 요소(compotnents)의 다른 모든 측면을 빠르게 사용할 수 있습니다. 스타일과 DOM을 생성하는 JavaScript 사이에는 자연스러운 연결 고리가 있습니다. 다른 것을 만진 후 바로 다른 것을 만지는 것은 공정한 흐름입니다. 예를 들어, 구성 요소 및 테스트에도 마찬가지입니다. 이것을 UI 구성 요소가 가지는 [참조 원칙의 지역성](https://en.wikipedia.org/wiki/Locality_of_reference)이라고 생각하세요. 나도 마찬가지로 `styles/`, `tests/`, `docs/`등의 소스트리 아래에 분리된 미러들을 신중하게 관리하곤 했다. 내가 문자 그대로 그 일을 계속하는 유일한 이유가 내가 항상 그래왔기 때문이라고 깨닫기 전까지.

### 3. 일관된 클래스 네임 스페이스 사용 Use consistent class namespacing

>CSS has a single, flat namespace for class names and other identifiers (such as ID's, animation names, etc). Just like in the PHP days of old, the community has dealt with this by simply using longer, structured names, thus emulating namespaces ([BEM](http://getbem.com/) is an example). We'll want to choose a namespacing convention, and stick with it.

CSS에는 클래스 이름과 ID (예 : ID, 애니메이션 이름 등)에 대한 단일 네임 스페이스가 있습니다. PHP의 시대처럼 커뮤니티는 더 길고 구조화 된 이름을 사용하는 것으로 네임 스페이스를 에뮬레이트 하여 이를 처리했습니다 ([BEM](http://getbem.com/)). 우리는 네임 스페이스 규칙을 선택하고이를 준수 할 것입니다.

>For instance, let's say we use `myapp-Header-link` as a class name. Each of its 3 parts have a specific function:

예를 들어 클래스 이름으로`myapp-Header-link`를 사용한다고합시다. 세 부분은 각각 특정 기능을 가지고 있습니다.

>* `myapp` to first isolate our app from other apps possibly running on the same DOM
>* `Header` to isolate the component from other components in the app
>* `link` to reserve a local name (within the component's namespace) for our local styling purposes

* `myapp`은 먼저 동일한 DOM에서 실행되는 다른 응용 프로그램에서 우리의 응용 프로그램을 격리합니다
* `Header`는 앱에서 다른 구성 요소와 구성 요소를 분리합니다
* `link`는 우리의 로컬 스타일링 목적을 위해 (컴포넌트 네임 스페이스 내에서) 로컬 이름을 예약합니다

>As a special case, the root element of the `Header` component can be simply marked with the `myapp-Header` class. For a very simple component, that might be all you need.

특별한 경우에, `Header`구성 요소(component)의 루트 엘리먼트는 단순히 `myapp-Header` 클래스로 표시 될 수 있습니다. 아주 간단한 구성 요소의 경우 당신이 원하는대로 할 수도 있습니다.

>Whatever namespacing convention we choose, we'll want to be consistent about it. In addition to each of the 3 parts having a specific *function*, they'll also have a specific *meaning*. Just by looking at a class, you'll know where it belongs. The namespacing will be the map by which we navigate the styles of our project.

우리가 선택하는 네임 스페이스 규칙이 무엇이든 관계없이 일관성을 유지하고자합니다. 특정 *기능*을 갖는 3가지 파트 각각에 더하여, 그들은 또한 *특별한 의미*를 갖습니다. 수업을 들으면 어디 있는지 알 수 있습니다. 네임 스페이스는 프로젝트의 스타일을 탐색하는 지도의 역할을 합니다.

>From now on I'll assume the namespacing scheme of `app-Component-class`, which I've personally found to work really well, but you can of course also come up with your own.

이제부터는`app-Component-class`의 네임 스페이스 스키마를 생각해 볼 것입니다. 이 클래스는 실제로 잘 작동한다는 것을 개인적으로 발견했습니다.하지만 물론 자신 만의 클래스를 만들 수도 있습니다.

### 4. 네임 스페이스와 파일 이름 사이의 엄격한 매핑 유지 Maintain a strict mapping between namespaces and filenames

>This is just the logical combination of the preceding two rules (co-locating component code, and class namespacing): all styles affecting a specific component should go to a file named after the component. No exceptions.

이것은 앞의 두 규칙 (구성 요소 코드와 클래스 네임 스페이스 지정)의 논리적 결합입니다. 특정 구성 요소에 영향을주는 모든 스타일은 구성 요소 이름을 딴 파일로 이동해야합니다. 예외는 없습니다.

>If you're working in the browser, and you spot a component that's misbehaving, you can right-click-Inspect it, and you'll see for instance:

브라우저에서 작업하면서 오작동하는 구성 요소를 발견하면 마우스 오른쪽 버튼으로 클릭하여 검사 할 수 있습니다. 예를 들어 다음과 같이 표시됩니다.

```html
<div class="myapp-Header">...</div>
```

>Noting the name of the component you switch to your editor, hit the key combo for "Quick open file", start typing "head", and there you go:

편집기로 전환하는 구성 요소의 이름을 기억하면 "빠른 열기 파일"에 대한 키 조합을 누르고 "머리글"을 입력하면 거기에 다음과 같이 표시됩니다.

![Quick open file](https://github.com/jareware/css-architecture/raw/master/quick-open-file.png)

>This strict mapping from UI components to the corresponding source files is doubly useful if you're new on the team and don't know the architecture by heart yet: you don't need to, to be able to find the guts of the thing you're supposed to work on.

UI 구성 요소에서 해당 소스 파일로의 엄격한 매핑은 팀에 새로 입문하고 아직 아키텍처를 모른다면 두 배로 유용합니다. 필요하지 않거나, 사물을 발견 할 수 있어야합니다. 너는 일하기로되어있어.

>There's a natural (but perhaps not immediately obvious) corollary to this: a single style file should only contain styles belonging to a single namespace. Why? Say we have a login form, that's only used within the `Header` component. On the JavaScript side, it's defined as a helper component within `Header.js`, and not exported anywhere. It might be tempting to declare a class name `myapp-LoginForm`, and sneak that into both `Header.js` and `Header.scss`. But let's say the new guy on the team is be tasked to fix a small layout issue in the login form, and inspects the element to figure out where to start. There is no `LoginForm.js` or `LoginForm.scss` to be found, and he has to resort to `grep` or guesswork to find the relevant source files. That is to say, if the login form warrants a separate namespace, split it into a separate component. Consistency is worth its weight in gold in projects of non-trivial size.

자연 스럽지만 (아마도 즉시 명백하지는 않음), 단일 스타일 파일은 단일 네임 스페이스에 속하는 스타일 만 포함해야합니다. 왜? 우리가 로그인 폼을 가지고 있다고 가정하면, 이것은 `Header` 컴포넌트 내에서만 사용됩니다. 자바 스크립트 측면에서는 'Header.js'내에 도우미 구성 요소로 정의되어 있으며 어디에도 내 보내지 않습니다. 클래스 이름 `myapp-LoginForm` 을 선언하고, 그것을 `Header.js` 와 `Header.scss` 모두에 몰래 넣을 수 있습니다. 그러나 팀의 새 직원이 로그인 양식에서 작은 레이아웃 문제를 해결하도록 임무를 부여 받았고 요소를 검사하여 시작할 곳을 파악했다고합시다. 찾을 수있는 `LoginForm.js` 또는 `LoginForm.scss` 가 없으며 관련 소스 파일을 찾기 위해 `grep` 이나 추측을해야합니다. 즉, 로그인 양식이 별도의 네임 스페이스를 보증하는 경우 별도의 구성 요소로 분할하십시오. 일관성은 중요하지 않은 규모의 프로젝트에서 황금으로 비중을 차지할만한 가치가 있습니다.

### 5. 구성 요소 외부의 스타일 유출 방지 Prevent leaking styles outside the component

>So we've established our namespacing conventions, and now want to use them to sandbox our UI components. If every component only uses class names prefixed with their unique namespace, we can be sure that their styles never leak to their neighbors. This is very effective (see below for the caveats), but having to type the namespace over and over again also gets rather tedious.

그래서 우리는 네임 스페이스 규약을 확립했습니다. 이제는이를 사용하여 UI 구성 요소를 샌드 박스에 넣고 싶습니다. 모든 구성 요소가 고유 네임 스페이스가 접두어로 붙은 클래스 이름 만 사용하는 경우 해당 스타일이 이웃 사람에게 누출되지 않도록 할 수 있습니다. 이것은 매우 효과적입니다 (아래주의 사항을보십시오).하지만 네임 스페이스를 반복해서 입력해야하는 것은 다소 지루합니다.

> A robust, yet still tremendously simple solution to this is to wrap the entire style file into a prefix block. Note how we only have to repeat the app and component names once:

견고하면서도 여전히 대단히 간단한 해결책은 전체 스타일 파일을 접두어 블록으로 묶는 것입니다. 앱과 컴포넌트 이름을 한 번만 반복하면됩니다.

```scss
.myapp-Header {
  background: black;
  color: white;

  &-link {
    color: blue;
  }

  &-signup {
    border: 1px solid gray;
  }
}
```

>The above example is in SASS, but the `&` symbol — perhaps shockingly — works the same across all relevant CSS preprocessors ([SASS](http://sass-lang.com/), [PostCSS](https://github.com/postcss/postcss-nested), [LESS](http://lesscss.org/) and [Stylus](http://stylus-lang.com/)). For completeness, this is what the above SASS compiles to:

위 예제는 SASS에 있지만, 관련된 모든 CSS 전처리기 ([SASS](http://sass-lang.com/), [PostCSS](https://github.com/postcss/postcss-nested), [LESS](http://lesscss.or)). 완전성을 위해, 위의 SASS는 다음과 같이 컴파일됩니다.

```css
.myapp-Header {
  background: black;
  color: white;
}

.myapp-Header-link {
  color: blue;
}

.myapp-Header-signup {
  border: 1px solid gray;
}
```

>All the usual patterns play well with this, e.g. having different styles for different component states (think [Modifier in BEM terms](http://getbem.com/naming/)):

일반적인 패턴이 모두 잘 작동합니다 (예 : 다른 구성 요소 상태에 대해 다른 스타일을 가짐 [BEM 용어로 수정](http://getbem.com/naming/)) :

```scss
.myapp-Header {

  &-signup {
    display: block;
  }

  &-isScrolledDown &-signup {
    display: none;
  }
}
```

Which compiles to:

```css
.myapp-Header-signup {
  display: block;
}

.myapp-Header-isScrolledDown .myapp-Header-signup {
  display: none;
}
```

>Even media queries work conveniently, as long as your preprocessor supports bubbling (SASS, LESS, PostCSS and Stylus all do):

전처리 기가 버블링을 지원하는 한 미디어 쿼리조차도 편리합니다. (SASS, LESS, PostCSS 및 Stylus 모두 지원)

```scss
.myapp-Header {

  &-signup {
    display: block;

    @media (max-width: 500px) {
      display: none;
    }
  }
}
```

Which becomes:

```css
.myapp-Header-signup {
  display: block;
}

@media (max-width: 500px) {
  .myapp-Header-signup {
    display: none;
  }
}
```

>The above pattern makes it very convenient to use long, unique class names without having to keep typing them over and over again. Convenience is mandatory, because without convenience, we will cut corners.

위의 패턴은 길고 독특한 클래스 이름을 반복적으로 타이핑하지 않고도 사용하는 것이 매우 편리합니다. 편리함 없이는 모퉁이를 자르므로 편의성은 필수적입니다.

### JS 측면에서 빠르게 곁에 Quick aside on the JS side of things

This document is about styling conventions, but the styles don't exist in a vacuum: our JS side will need to produce the same namespaced class names, and convenience is mandatory there as well.

이 문서는 스타일 규칙에 관한 내용이지만 스타일은 홀로 고립된 상태로 존재하지 않습니다. 우리 JS 사이드는 동일한 이름 공간 클래스 이름을 생성해야하며 편의는 필수입니다.

>As a shameless plug, I have created a very simple, 0-dependency JS library for exactly this, called [`css-ns`](https://github.com/jareware/css-ns). When combined at the framework level ([with e.g. React](https://github.com/jareware/css-ns#use-with-react)), it allows you to **enforce** a specific namespace within a specific file:

뻔뻔한 플러그로서, 저는 매우 간단하고 의존성이 0인 JS 라이브러리 [`css-ns`](https://github.com/jareware/css-ns)를 만들었습니다. 프레임 워크 레벨로 결합될 때 ([예를 들어 React](https://github.com/jareware/css-ns#use-with-react)) 특정 파일 내에서 특정 네임 스페이스를 적용할 수 있습니다.:

```js
// Create a namespace-bound local copy of React:
var { React } = require('./config/css-ns')('Header');

// Create some elements:
<div className="signup">
  <div className="intro">...</div>
  <div className="link">...</div>
</div>
```

Will render into the DOM as:

```html
<div class="myapp-Header-signup">
  <div class="myapp-Header-intro">...</div>
  <div class="myapp-Header-link">...</div>
</div>
```

>This is very convenient, and above all makes the JS side *local by default*.

이것은 매우 편리하며, 특히 JS 측이 local로 기본 설정됩니다.

>But again, I digress. Back to the CSS side of things.

그러나 다시, CSS 측면으로 돌아오겠습니다.

### 6. 구성 요소 내부의 유출 스타일 방지 Prevent leaking styles inside the component

>Remember when I said prefixing each class name with the component namespace was a "very effective" way of sandboxing styles? Remember when I said there were "caveats"?

각 클래스 이름의 접두사에 컴포넌트 네임 스페이스를 사용하는 것이 스타일을 샌드 박스 화하는 "매우 효과적인"방법이라는 것을 기억하십니까? 내가 "주의 사항"이 있다고 말했던 때를 기억 하는가?

>Consider the following styles:

다음 스타일을 고려하십시오.

```scss
.myapp-Header {
  a {
    color: blue;
  }
}
```

And the following component hierarchy:


```
+-------------------------+
| Header                  |
|                         |
| [home] [blog] [kittens] | <-- these are <a> elements
+-------------------------+
```

>We're cool, right? Only the `<a>` elements inside `Header` get [blued](https://www.youtube.com/watch?v=axHe_BVY_9c), because the rule we generate is:

`Header` 안에있는`<a>`요소들만이 청색을 띠게됩니다. 우리가 생성하는 규칙은 다음과 같습니다 :

```css
.myapp-Header a { color: blue; }
```

>But consider the layout is later changed to:

그러나 레이아웃이 나중에 변경될 것을 고려하세요.

```
+-----------------------------------------+
| Header                    +-----------+ |
|                           | LoginForm | |
|                           |           | |
| [home] [blog] [kittens]   | [info]    | | <-- these are <a> elements
|                           +-----------+ |
+-----------------------------------------+
```

>The selector `.myapp-Header a` **also matches** the `<a>` element inside `LoginForm`, and we've blown our style isolation. As it turns out, wrapping all styles in a namespace block is an effective way for isolating a component from its neighbors, **but not always from its children**.

선택자 `.myapp-Header a`는 `LoginForm` 안에있는 `<a>` **요소와 일치**합니다. 우리는 스타일 분리를 날려 버렸습니다. 결론적으로 네임 스페이스 블록의 모든 스타일을 배치하는 것은 이웃과 구성 요소(component)를 분리하는 데 효과적인 방법이지만, **그 자손 요소**에는 그렇지 않습니다.

>This can be fixed in two ways:

두 가지 방법으로 해결 될 수 있습니다:

>1. Never target element names in stylesheets. If every `<a>` element in `Header` is `<a class="myapp-Header-link">` instead, we'll never have to deal with this issue. Then again, sometimes you have the perfectly semantic markup set up, with the `<article>`s and `<aside>`s and `<th>`s in all the right places, and you don't want to clutter them with extra classes. In that case:
>2. Only target things outside your namespace with [the `>` combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors).

1. 스타일 시트에서 요소 이름을 대상으로 삼지 마십시오. `Header`의 모든 `<a>` 요소가`<a class="myapp-Header-link">`인 경우 이 이슈는 해결할 필요가 없습니다. 그리고, 때로는 완벽하게 올바른 의미론적 마크업을 사용하고, `<article>`및`<aside>`와`<th>`를 모든 적절한 위치에 두고 클래스로 그들을 혼란스럽게 하고 싶지 않은 경우가 있습니다. 이럴 경우에는 :
2. [the `>` 결합자(combinator)](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors)를 사용하여 네임 스페이스 외부의 객체 만 대상으로 지정하십시오.

>Adjusted for the latter approach, our styles can be rewritten as:

후자의 접근 방식에 맞게 조정하면 다음과 같이 스타일을 다시 작성할 수 있습니다.

```scss
.myapp-Header {
  > a {
    color: blue;
  }
}
```

>Which will ensure our isolation also works depth-wise in the component tree, as the generated selector becomes `.myapp-Header > a`.

컴파일된 선택자는 `.myapp-Header> a` 이므로 분리화가 콤포넌트 트리에서 깊이 있게 작동하도록 보장합니다.

>If this sounds controversial, let me further bring up your blood pressure by claiming that this is also fine:

이것이 논란의 여지가있는 것으로 들리면,이 또한 괜찮다고 주장하여 혈압을 높이십시오.

```scss
.myapp-Header {
  > nav > p > a {
    color: blue;
  }
}
```

>We've been trained to avoid selector nesting (including this stronger form with `>`) like the plague, by [many years' worth of credible advice](http://lmgtfy.com/?q=css+nesting+harmful). But why? The cited reasons boil down to these three:

우리는 [수년간의 신뢰할 수 있는 조언](http://lmgtfy.com/?q=css+nesting+harmful)을 통해 역병과 같은 선택 자 중첩 (`>`이 강한 형태 포함)을 피하기 위해 훈련을 받았습니다. 
하지만 왜? 인용 된 이유는이 세 가지로 요약됩니다.

>1. Cascading styles will ruin your day, eventually. The more you nest selectors, the higher the chances of accidentally finding an element which matches the selectors of *more than one component*. If you've read this far, you know we've already eliminated this possibility (with strict namespace prefixing, and using strong child selectors where needed).
>2. Too much specificity will reduce reusability. The styles written for `nav p a` won't be reusable anywhere else except in that very specific environment. But we specifically *never want this anyway*, in fact, we go out of our way to forbid this method of reusability, as it doesn't play well with our goal of components being isolated from each other.
>3. Too much specificity will make refactorings harder. This has some basis in reality, in that if you only had `.myapp-Header-link a`, you could freely move the `<a>` around in your component's HTML, and the same styles will always apply. Whereas with `> nav > p > a` you will need to update the selector to match the link's new location within the component's HTML. But given how we want to assemble our UI from small, well-isolated components, this argument is also rather moot. Sure, if you had to consider the HTML & CSS of your entire application when doing a refactoring, this might be scary. But you're operating in a small sandbox which has some tens of lines of styles, and knowing that nothing outside that sandbox needs to be considered, these types of changes become a non-issue.
1. 캐스케이딩 스타일은 궁극적으로 당신의 하루를 망칠것입니다. 선택자를 중첩하면할수록 실수로 *하나 이상의 구성 요소* 선택자와 일치하는 요소를 찾는 확률이 높아집니다. 지금까지이 글을 읽었다면, 우리는 이미 네임 스페이스 접두사를 엄격하게 사용하고 필요할 경우 강력한 자식 선택기를 사용하여이 가능성을 제거했다는 것을 알았을 것입니다.
2. 너무 많은 특이성은 재사용 가능성을 감소시킵니다. `nav p a`를 위해 작성된 스타일은 매우 특정한 환경을 제외하고는 어디에서도 재사용 할 수 없습니다. 그러나 우리는 결코 이것을 절대 원하지 않습니다. 사실, 우리는 구성 요소가 서로 고립되어 있다는 우리의 목표를 잘 수행하지 못하기 때문에 이러한 재사용 방법을 금지하기 위해 노력하고 있습니다.
3. 너무 많은 구체성은 리팩토링을 더 어렵게 만들 것입니다. `.myapp-Header-link a` 만 가지고 있다면 컴포넌트의 HTML에서 자유롭게`<a>`를 움직일 수 있고, 같은 스타일이 항상 적용된다는 점에서 이것은 실제로 기본을 가지고 있습니다. `> nav> p> a`를 사용하면 구성 요소의 HTML 내에서 링크의 새 위치와 일치하도록 선택 도구를 업데이트해야합니다. 그러나 작고 잘 격리 된 구성 요소에서 UI를 구성하려는 방식을 고려할 때 이 논의도 의의가 있습니다. 물론 리팩토링을 할 때 전체 애플리케이션의 HTML과 CSS를 고려해야 만한다면 이것은 무서울 수도 있습니다. 그러나 수십 라인의 스타일을 가진 작은 샌드 박스에서 작업하고 있으며 샌드 박스 외부의 어떤 것도 고려해야 할 필요가 없다는 것을 알고 있으므로 이러한 유형의 변경은 문제가되지 않습니다.

>This is a good example of understanding the rules, so you know when to break them. In our architecture, selector nesting is not only OK, it's sometimes the right thing to do. Go crazy with it.

이것은 규칙을 이해하는 좋은 예이기 때문에 언제 규칙을 깰지 그 여부를 알 수 있습니다. 우리의 아키텍처는 선택기 중첩에 대해 괜찮을 뿐 아니라 때로는 올바른 것입니다. 그래서 미쳐 버린다.

### 호기심을위한 제쳐두고 : 구성 요소에 스타일 * 누출 방지 An aside for the curious: Prevent leaking styles *into* the component

>So have we achieved perfect sandboxing of our styles, so that each component can live in total isolation from the rest of the page? As a quick recap:

그래서 스타일의 완벽한 샌드 박스화를 달성하여 각 컴포넌트가 나머지 페이지와 완전히 분리되어 살 수있게 되었습니까? 요약하자면 다음과 같습니다.

>* We've prevented leaks **out of our components** by prefixing each class name with the component namespace:

* 우리는 각 클래스 이름 앞에 구성 요소 네임 스페이스를 추가하여 **구성 요소 밖으로** 누출을 방지했습니다.

        +-------+
        |       |
        |    -----X--->
        |       |
        +-------+

>* By extension, this means we've prevented leaks **between our components**
* 확장하면, 이는 **구성 요소간**에 누출 을 방지했음을 의미합니다.

        +-------+     +-------+
        |       |     |       |
        |    ------X------>   |
        |       |     |       |
        +-------+     +-------+

>* And we've prevented leaks **into child components** by minding our child selectors:
* 그리고 우리는 자손 선택자를 신경 써서 **자손 구성 요소에** 누출을 막았습니다.

        +---------------------+
        |           +-------+ |
        |           |       | |
        |    ----X------>   | |
        |           |       | |
        |           +-------+ |
        +---------------------+

>* But crucially, **external styles can still leak into components**:

* 하지만 결정적으로 **외부 스타일은 여전히 구성 요소로 누출 될 수 있습니다** :

              +-------+
              |       |
        ---------->   |
              |       |
              +-------+

>For example, say we have styled our component with:

예를 들어 다음과 같이 구성 요소의 스타일을 지정했다고 가정 해 보겠습니다.

```scss
.myapp-Header {
  > a {
    color: blue;
  }
}
```

But then we include an ill-behaving 3rd party library which introduces the following CSS:

그리고, 다음의 CSS와 같이 잘 작동하지 않는 타사 라이브러리를 포함시킵니다.

```css
a {
  font-family: "Comic Sans";
}
```

>**There is no simple way to protect your components from such external abuse**, and this is where we often need to just:

이러한 **외부 악용 사례로부터 구성 요소를 보호 할 수있는 간단한 방법은 없습니다**, 그리고 그때 우리는 이런 선택을 하죠:

![Give up](https://github.com/jareware/css-architecture/raw/master/give-up.gif)

>Luckily, you often have some control over the dependencies you use, and can simply look for a more well-behaved alternative.

다행히도, 자주 사용하는 의존성을 어느 정도 제어 할 수 있으며,보다 잘 작동하는 대안을 찾을 수 있습니다.

>Also, I said there's no *simple* way to protect your components from this. That doesn't mean there aren't ways. [There are ways, dude](https://www.youtube.com/watch?v=20wUS_bbOHY), they just come with various trade-offs:

또한, 나는 이것으로부터 구성 요소를 보호 할 *간단한* 방법이 없다고 말했습니다. 그것이 방법이 없다는 것을 의미하지는 않습니다. [방법이 있습니다.](https://www.youtube.com/watch?v=20wUS_bbOHY), 그들은 여러 가지 장단점이 있습니다.

>* Just brute-forcing it: if you include a [CSS reset](http://cssreset.com/what-is-a-css-reset/) *for every element of every component*, and attach it to a selector that always wins over the 3rd party ones, you're golden. But unless your application is tiny (say, a "Share" button 3rd parties can embed onto their sites), this approach quickly spirals out of control. This is rarely a good idea, it's just listed here for completeness.
>* [`all: initial`](https://developer.mozilla.org/en/docs/Web/CSS/all) is a less-known new CSS property designed for exactly this. It can [stop inherited properties from flowing in](https://jsfiddle.net/0d9htatc/), and also work as a local reset, [as long as it wins the specificity war](https://jsfiddle.net/e7rw4L8L/) (and as long as you repeat it for each element you want to protect). Its implementation includes [some intricacies](https://speakerdeck.com/csswizardry/refactoring-css-without-losing-your-mind?slide=39) and [isn't yet supported](http://caniuse.com/#feat=css-all) everywhere, but `all: initial` might eventually become a useful tool for style isolation.
>* Shadow DOM has already been mentioned, and it's exactly the tool you would want for this job, as it allows declaring clear component boundaries for both JS and CSS. Despite [some recent glimmers of hope](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html), the Web Components spec hasn't made great progress in recent years, and unless you're working with a known set of browsers you can't really count on the Shadow DOM.
>* Finally, there's the `<iframe>`. It offers the strongest form of isolation the web runtime can offer (both for JS and CSS), but also carries steep penalties in startup cost (latency) and maintenance cost (retained memory). Still, oftentimes the trade-off is worth it, and most prominent web embeds (Facebook, Twitter, Disqus, etc) are in fact implemented with iframes. For the purposes of this document however — isolating hundreds or thousands of small components from each other — this approach would blow our performance budget a 100 times over.

* 단지 짐승처럼 사용 : 만약 *모든 구성 요소의 모든 요소에 대해* [CSS 재설정](http://cssreset.com/what-is-a-css-reset/) 을 포함시키고, 선택기에 연결하면 제 3자를 항상이기는 ​​당신은 황금이에요. 그러나 애플리케이션이 작지 않은 경우 (제 3자가 사이트에 삽입 할 수있는 "공유"버튼)이 접근법은 통제 불능 상태로 빠르게 바뀝니다. 이것은 거의 좋은 아이디어는 아니며, 여기에 완전성을 위해 나열되어 있습니다.
* [`all: initial`](https://developer.mozilla.org/en/docs/Web/CSS/all)은 딱 이 문제를위해 디자인 된, 잘 알려지지 않은 새로운 CSS 속성입니다. 이것은 [상속 된 속성이 흘러 들지 않도록](https://jsfiddle.net/0d9htatc/) 할 수 있으며 로컬 리셋으로 [특정 전쟁에서 승리할 수 있습니다](https://jsfiddle.net/e7rw4L8L/) (보호하려는 각 요소에 대해 반복하는 한). 그 구현에는 [일부 복잡성](https://speakerdeck.com/csswizardry/refactoring-css-without-losing-your-mind?slide=39)과 [아직 어디에서나 지원되지 않지만](http://caniuse.com) `all: initial` 은 결국 스타일 격리를 위한 유용한 도구가 될 것입니다.
* 그림자 DOM은 JS와 CSS 모두에 대해 명확한 구성 요소 경계를 선언 할 수 있으므로이 작업에 대해 원하는 도구라고 할 수 있습니다. 최근 [희망의 일부 희미한 빛](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html)에도 불구하고 Web Components 스펙은 최근 몇 년 동안 큰 발전을 이루지 못했습니다. 알려진 브라우저 세트로 작업하지 않는다면 그림자 DOM을 사용할 수 없습니다.
* 마지막으로, `<iframe>`이 있습니다. 웹 런타임이 JS 및 CSS 모두에서 제공 할 수있는 가장 강력한 격리 형태를 제공하지만 시작 비용 (대기 시간) 및 유지 비용 (보존 된 메모리)에서 가파른 벌칙이 적용됩니다. 여전히 트레이드 오프는 가치가 있으며, 가장 유명한 웹 퍼가기 (Facebook, Twitter, Disqus 등)는 실제로 iframe으로 구현됩니다. 그러나이 문서의 목적 상 수백 또는 수천 개의 작은 구성 요소를 서로 격리하는 경우이 방법을 사용하면 성능 예산을 100 배 이상 줄일 수 있습니다.

>Anyway, this aside is running long, back to our list of CSS rules.

어쨌든,이 부분을 제외하고는 CSS 규칙 목록으로 돌아가고 있습니다.

### 7. 구성 요소 경계 존중 Respect component boundaries

>Exactly like we styled `.myapp-Header > a`, when we nest components, we may need to apply some styles to child components (the Web Component analogy is again perfect, as then there'd truly be no distinction between how `> a` and `> my-custom-a` work). Consider this layout:

`.myapp-Header> a` 스타일과 같이 구성 요소를 중첩하면 자손 구성 요소에 스타일을 적용 할 필요가 있을지도 모릅니다 (Web Components 비유는 `> a`와`>my-custom-a` 동작의 구분이없을 때 다시 완벽해집니다). 
이 레이아웃을 생각해 봅시다 :
```
+---------------------------------+
| Header           +------------+ |
|                  | LoginForm  | |
|                  |            | |
|                  | +--------+ | |
| +--------+       | | Button | | |
| | Button |       | +--------+ | |
| +--------+       +------------+ |
+---------------------------------+
```

>We immediately see that styling `.myapp-Header .myapp-Button` would be a bad idea, and we'd obviously want `.myapp-Header > .myapp-Button` instead. But what styles would we ever want to apply to child components?

우리는`.myapp-Header.myapp-Button` 스타일이 좋지 않다는 것을 즉시 알았고, 분명히 `.myapp-Header> .myapp-Button`을 대신 사용하고 싶을것 입니다. 그러나 우리는 어떤 스타일을 자손 콤포넌트에 적용하고 싶습니까?

Note how the `LoginForm` is docked to the right edge of the `Header`. Intuitively, one might style this as:

>`LoginForm`이 어떻게 `Header` 의 오른쪽 가장자리에 도킹되는지 주목하십시오. 직관적으로, 다음과 같이 스타일을 지정할 수 있습니다.

```scss
.myapp-LoginForm {
  float: right;
}
```

>We haven't violated any of our rules, but we've also made the `LoginForm` a lot harder to reuse: if our upcoming home page wants to repeat the `LoginForm`, but without the right-side float, we're out of luck.

우리는 우리 규칙을 위반하지 않았지만 `LoginForm` 을 재사용하기가 훨씬 더 어려워졌습니다 : 곧 나오는 홈 페이지가`LoginForm`을 반복하기를 원하지만 우측 float이 필요 없다면, 우리는 운이 없는것입니다.

>The pragmatic solution to this is to (partially) relax our previous rule of only applying styles to the namespace the current file belongs to. Specifically, we want to do this instead:

실용적인 해결책은 현재 파일이 속한 네임 스페이스에만 스타일을 적용하는 이전 규칙을 (부분적으로) 완화하는 것입니다. 특히 다음과 같이 수행하려고합니다.

```scss
.myapp-Header {
  > .myapp-LoginForm {
    float: right;
  }
}
```

This is in fact perfectly OK, as long as we don't allow breaching the child's sandbox arbitrarily:

이것은 우리가 자식의 샌드 박스를 임의로 위반하지 않는 한 실제로 완벽하게 OK입니다.

```scss
// COUNTER-EXAMPLE; DON'T DO THIS
.myapp-Header {
  > .myapp-LoginForm {
    color: blue;
    padding: 20px;
  }
}
```

>We don't want to allow this, because we'd lose our safety net of local changes never having global repercussions. With the above code, `LoginForm.scss` is no longer the only place you need to check when modifying the appearance of the `LoginForm` component. Making changes gets scary again. So where do we draw the line between what's OK and what's a no-no?

우리는 이것을 허용하고 싶지 않습니다. 왜냐하면 우리는 세계적인 반향을 일으키지 않는 지역적 변화로 안전망을 잃을 것이기 때문입니다. 위의 코드에서 `LoginForm.scss`는 더 이상 `LoginForm` 구성 요소의 모양을 수정할 때 확인할 필요가 없습니다. 변화를 무서워하게됩니다. 그렇다면 OK와 NO의 구분선을 어디에서 그려야 할까요?

>We want to respect the sandbox *inside* each child component, as we don't want to rely on its implementation details. It's a black box to us. What's *outside* the child component, conversely, is the sandbox of the parent, where it reigns supreme. The distinction between inside and outside emerges quite naturally from one of the most fundamental concepts in CSS: [the box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model).

우리는 구현 세부 정보에 의존하기를 원하지 않기 때문에 각 자손 콤포넌트 *내부*의 샌드 박스를 존중하고 싶습니다. 우리에게 블랙 박스입니다. 반대로 자손 콤포넌트 *외부*의 요소는 최상위에 군림하는 부모 샌드박스입니다. 내부와 외부의 구별은 CSS의 가장 기본적인 개념 중 하나인 [상자 모델](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)에서 자연스럽게 나타납니다.

![CSS Box Model](https://github.com/jareware/css-architecture/raw/master/box-model.png)

>My analogies are terrible, but here goes: just like *being inside a country* means being within its physical borders, we establish that a parent can effect styles on its (direct) children only outside the border of the component. That means properties related to positioning and dimensions (e.g. `position`, `margin`, `display`, `width`, `float`, `z-index` etc) are OK, while properties that reach inside the border (e.g. `border` itself, `padding`, `color`, `font` etc) are a no-no.

내 끔찍한 유추는 이것입니다. *국가 내부에 있다는 것*은 신체으로 경계 속에 있다는 것을 의미하는 것처럼, 부모가 구성 요소의 테두리 밖에있는 (직접적인) 자식에 스타일을 적용 할 수 있음을 입증합니다. 즉, 포지셔닝(위치)과 치수 관련된 속성 (예 : `position`, `margin`, `display`, `width`, `float`, `z-index` 등)과 관련된 속성은 괜찮지만 테두리 내부에 미치고자 하는 속성 (예 : `border` 그 자체, `padding`, `color`, `font`등)은 '아니오'입니다.

>As a corollary, this is also very obviously forbidden:

결과로서 이것은 또한 명백히 금지되어 있습니다 :


```scss
// COUNTER-EXAMPLE; DON'T DO THIS
.myapp-Header {
  > .myapp-LoginForm {
    > a { // relying on implementation details of LoginForm ;__;
      color: blue;
    }
  }
}
```

>There are a few interesting/boring edge cases, such as:

다음과 같은 몇 가지 재미있는 / 지루한 경우가 있습니다.

>* `box-shadow` - A specific type of shadow can be an integral part of the look-and-feel of a component, and thus it should contain those styles itself. Then again, the visual effect is clearly rendered outside the border, so it's going into its parent component's territory.
>* `color`, `font` and other [inherited properties](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance) - `.myapp-Header > .myapp-LoginForm { color: red }` reaches into the insides of the child component, but on the other hand can be functionally equivalent to `.myapp-Header { color: red; }`, which is OK by our other rules.
>* `display` - If the child component uses a [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) layout, it's possibly relying on having `display: flex` set on its root element. However, the parent might choose to hide its child by setting `display: none` on it.

* `box-shadow` - 특정 유형의 그림자는 구성 요소의 모양과 느낌(look-and-feel)의 필수 부분일 수 있으므로 스타일을 스스로 포함해야합니다. 다시 시각 효과는 명확하게 보더 밖에 렌더링되므로 부모 구성 요소의 영역으로 이동합니다.
* `color`, `font`와 [inherited properties](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance) - `.myapp-Header > .myapp-LoginForm { color: red }` 자손 콤포넌트의 내부에 도달합니다, 하지만 다른 한편으로 기능상으로 `.myapp-Header { color: red; }`, 우리의 규칙상 어떤것이든 좋습니다.
* `dispaly` - 하위 구성요소가 [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  레이아웃을 사용하는 경우, 그 루트 엘리먼트에 `display: flex`가 설정되어있을 것입니다. 그러나 부모는 `display: none`를 사용해 자손을 숨길수도 있습니다.

>The important thing to realize is that in these edge cases, you're not risking thermonuclear war, just introducing a tiny bit of the CSS cascade back into your styles. As with other things that are bad for you, enjoying the cascade *in moderation* is fine. For instance, taking a closer look at the last example, the [specificity contest](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) works out exactly like you'd want it to: when the component is visible, `.myapp-LoginForm { display: flex }` is the most specific rule, and takes precedence. When the owner decides to hide it with `.myapp-Header-loginBoxHidden > .myapp-LoginBox { display: none }` that rule is more specific, and wins.

실현해야 할 중요한 사실은 이러한 엣지의 경우에 열 핵 전쟁을 막을 수는 없다는 것입니다. CSS 캐스케이드의 작은 비트를 스타일에 다시 도입하는 것입니다. 당신에게 나쁜 다른 것들과 마찬가지로 적당히 캐스케이드를 즐기는것도 좋습니다. 예를 들어, 마지막 예를 자세히 살펴보면, 특이 사항 경연 대회는 당신이 원하는대로 작동합니다: 구성 요소가 표시되면 `.myapp-LoginForm {display : flex}` 가 가장 구체적인 규칙이며 우선 순위가 적용됩니다 . 소유자가 `.myapp-Header-loginBoxHidden> .myapp-LoginBox {display : none}`을 사용하여이를 숨기려고 결정하면 규칙이 더 구체적이며 이기게됩니다.

### 8. 외부 스타일을 느슨하게 통합 Integrate external styles loosely

>To avoid repetitive work, you sometimes need to share styles between components. To avoid work altogether, you sometimes want to use styles created by others. Both of these should be achieved without creating any unnecessary coupling into the codebase.

반복적 인 작업을 피하기 위해 구성 요소간에 스타일을 공유해야하는 경우가 있습니다. 작업을 완전히 피하기 위해 때로는 다른 사람들이 만든 스타일을 사용하려고합니다. 이 두 가지 모두 코드베이스에 불필요한 결합을 만들지 않고 이루어져야합니다.

>As a concrete example, let's consider using some styles from [Bootstrap](http://getbootstrap.com/css/), as it's a perfect example of an annoying framework to work with. Considering everything we've talked about above, with regard to sharing a single global namespace for styles, and collisions being bad, Bootstrap:

구체적인 예로, [Bootstrap](http://getbootstrap.com/css/) 스타일은 작업 할 성가신 프레임 워크의 완벽한 예입니다. 우리가 위에서 이야기한 것들을 고려해 보면, 스타일을 위한 단일 전역 네임 스페이스 공유와 충돌이 좋지 않다는 것을 고려하면 부트 스트랩은 :

>* Exports a ton of selectors (as of version 3.3.7, 2481 to be precise) to that namespace, whether you actually use them or not. (Fun aside: IE's up to version 9 can only process 4095 selectors before silently ignoring the rest. I've heard of people spending *days* debugging this wondering what the hell's going on.)
>* Uses hard-coded class names such as `.btn` and `.table`. Can't imagine those ever being accidentally reused by some other developer or project. :sarcasm:

* 선택자를 실제로 사용하든 사용하지 않든 해당 네임 스페이스에 많은 톤의 선택자를 내 보냅니다 (버전 3.3.7, 에 2481). (Fun aside : IE의 버전 9까지는 나머지를 무시하기 전에 4095 셀렉터 만 처리 할 수 있습니다. 나는이 일을 디버깅하는 일을 보내는 사람들이 도대체 무슨 일이 벌어지고 있는지 궁금해했다.)
* `.btn` 및 `.table`과 같은 하드 코딩 된 클래스 이름을 사용합니다. 다른 개발자나 프로젝트에서 사용한 코드를 재사용 한 다는 것은 상상할 수 없습니다.

>Regardless, let's say we want to use Bootstrap as a basis for our `Button` component.

그럼에도 불구하고 우리가 'Button'컴포넌트의 기초로 Bootstrap을 사용하고자한다고 가정 해 봅시다.

>Instead of integrating on the HTML side with:

다음과 같이 HTML 쪽에서 통합하는 대신 :

```html
<button class="myapp-Button btn">
```

>Consider [extending](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend) the class in your styles:

스타일을 [확장-extending](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend) 해보십시오.

```html
<button class="myapp-Button">
```

```scss
.myapp-Button {
  @extend .btn; // from Bootstrap
}
```

>This has the benefit of not giving anyone (including yourself) any ideas about relying on the presence of the ridiculously named `btn` class on the HTML component. The origin of the styles that `Button` uses is an implementation detail that need not show on the outside at all. As a consequence, should you ever decide to ditch Bootstrap in favor of another framework (or just writing the styles yourself), the change won't be externally visible in any way (except, uhh, the visible changes in how `Button` looks).

이것은 HTML 구성 요소에 우스꽝스럽게 명명 된`btn` 클래스의 존재에 의존하는 것에 대해 (자신을 포함하여) 누구에게도 아이디어를주지 않는 이점이 있습니다. `Button`이 사용하는 스타일의 근원은 외부에 전혀 표시 할 필요가없는 구현 세부 사항입니다. 결과적으로 Bootstrap을 다른 프레임 워크에 맞게 (또는 스타일을 직접 작성하기 위해) 버려두기로 결정했다면, 변경 사항은 외부에서 보이지 않을 것입니다 (어쨌든`Button`이 어떻게 보이는지에 대한 눈에 보이는 변화는 제외됩니다.) 

>The same principle applies to your own helper classes, and there you'll have the option of using more sensible class names:

동일한 원칙이 당신 자신의 helper classes에도 적용됩니다. 더 명료 한 클래스 이름을 사용하는 방법입니다:

```scss
.myapp-Button {
  @extend .myapp-utils-button; // defined elsewhere in your project
}
```

>Or [forgoing emitting the class](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_) altogether ([supported by most preprocessors](https://csspre.com/placeholder-selectors/)):

또는 [클래스를 전부 방출하는것을 계속하는것](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_)([대부분의 전처리기에서 지원됩니다](https://csspre.com/placeholder-selectors/)):

```scss
.myapp-Button {
  @extend %myapp-utils-button; // defined elsewhere in your project
}
```

>Finally, all CSS preprocessors support the concept of [mixins](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins), which are a tremendously powerful tool:

마지막으로, 모든 CSS 전처리 기는 [mixins](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins)의 개념을 지원합니다.이 기술은 대단히 강력한 도구입니다.

```scss
.myapp-Button {
  @include myapp-generateCoolButton($padding: 15px, $withExplosions: true);
}
```

>It should be noted that when dealing with more civilized style frameworks (such as [Bourbon](http://bourbon.io/) or [Foundation](http://foundation.zurb.com/)), they'll in fact be doing just this: declaring a bunch of mixins for you to use where they're needed, and not emitting any styles on their own. [Neat](http://neat.bourbon.io/).

더 문명화 된 스타일 프레임 워크([Bourbon](http://bourbon.io/)이나 [Foundation](http://foundation.zurb.com/)과 같은)를 다룰 때 그들은 실제로 다음을 수행 할 것입니다: 당신이 원하는 곳에 사용하고, 어떤 스타일도 그 스스로 방출될 수 없도록 수많은 mixins을 선언합니다.

## In closing

> Know the rules, so you know when to break them
> 규칙을 알아라, 당신이 깰 때를 알 수 있다.

>Finally, as mentioned before, when you understand the rules you've laid out (or adopted from a stranger on the Internet), you can make exceptions that make sense to you. For instance, if you feel that there's added value in using a helper class directly, you can do so:

마지막으로, 앞에서 언급했듯이, 룰을 이해했거나 (인터넷상의 낯선 사람으로부터 채택한) 규칙을 이해하면 예외를 만들 수 있습니다. 예를 들어 도우미 클래스를 직접 사용하는 데 부가가치가 있다고 생각하면 다음과 같이 할 수 있습니다.

```html
<button class="myapp-Button myapp-utils-button">
```

>That added value might be — for instance — that your test framework can then be more clever in automatically figuring out what things act as buttons, and can be clicked on.

추가 된 가치는 예를 들어 당신의 테스트 프레임 워크가 더 영리해져 어떤것이 버튼으로 작동하는지 파악하고 클릭 할 수 있게 되는 것입니다.

>Or you might decide that it's OK to break component isolation when the breach is tiny, and the additional work from splitting components would be too great. While I'll want to remind you that it's a slippery slope and that consistency is king et cetera, as long as your team is in agreement, and you get stuff done, you're doing the right thing.

또는 위반이 작을 때 구성 요소 격리를 중단하고 구성 요소를 분할하여 추가 작업을 수행하는 것이 좋다고 판단 할 수도 있습니다. 나는 그것이 미끄러운 슬로프이며 일관성이 중요하다는 것을 상기시키고 싶습니다. 팀이 동의하고, 일을 끝내고 있다면. 옳은 일을하고있는 것입니다.

## The End

If you liked this article, you could totally [tweet about it!](https://twitter.com/home?status=8%20simple%20rules%20for%20a%20robust,%20scalable%20CSS%20architecture%3A%20https%3A//github.com/jareware/css-architecture) Or not.

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
