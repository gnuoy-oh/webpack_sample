# 📖 Jump Start Sass : Architecture in Sass

[원문 보러가기](https://www.sitepoint.com/architecture-in-sass/)

>The following is a short extract from our recent book, Jump Start Sass, available for free to SitePoint Premium members. Print copies are sold in stores worldwide, or you can order them here. We hope you enjoy this extract and find it useful.

다음은 우리의 최근 저서 [Jump Start Sass](https://www.sitepoint.com/premium/books/jump-start-sass)에서 짧은 발췌 내용으로 [SitePoint Premium 멤버](https://www.sitepoint.com/premium/l/join)에게 무료로 제공됩니다. 인쇄본은 전 세계 매장에서 판매되거나 여기에서 주문할 수 있습니다.

>Architecture has always been one of the major pain points in CSS development. Without any variables, control directives, macros, or object inheritance, CSS code tends to be long and repetitive-a single ever-growing file. While it’s technically possible to split plain CSS into multiple files that reference each other with @import, the additional HTTP requests make that a poor solution. As you’ve seen, Sass has an answer for every piece of the architecture puzzle-but what’s the best way to put it all together?

아키텍처는 항상 CSS 개발의 주요 문제점 중 하나였습니다. 변수(variables), 컨트롤 지시문(control directives), 매크로 또는 객체 상속이 없으면 CSS 코드는 길고 반복적인 경향이 있습니다. 기술적으로는 일반 CSS를 `@import`로 서로 참조하는 여러 파일로 분할 할 수 있지만 추가 HTTP 요청을 사용하므로 좋지 않은 해결책이됩니다. 보시다시피, Sass는 아키텍처 퍼즐의 모든 부분에 대한 답변을 제공하지만 모두가 동의하는 가장 좋은 방법은 무엇일까요?

>Ask ten experts, and you’ll receive ten different answers-most of them involving (or aided by) Sass. OOCSS, SMACSS, Atomic Design, ITCSS, and BEM are all popular systems for CSS architecture, but there are many more. If you’re using a front-end framework such as Bootstrap or Foundation, there might be some architectural opinions already built in.

10 명의 전문가에게 물어 보면 10 가지의 답변을 얻을 수 있습니다. 대다수는 Sass와 관련이 있습니다. [OOCSS](https://github.com/stubbornella/oocss/wiki), [SMACSS](https://smacss.com/), [Atomic Design](https://patternlab.io/), [ITCSS](http://technotif.com/manage-large-css-projects-with-itcss/) 및 [BEM](https://en.bem.info/)은 모두 CSS 아키텍처에 널리 사용되는 시스템이지만 더 많은 기능이 있습니다. 부트 스트랩이나 파운데이션과 같은 프론트 엔드 프레임워크를 사용하는 경우 이미 그 안에 아키텍처에 대한 견해가 녹아있습니다.

>These are all solid systems, none of which were designed with your project in mind. CSS architecture is hard, so it’s a mistake to trust any one-size-fits-all solution. There is no “right” answer that works for every team on every project. We’d recommend learning them all, and then mashing together the best parts to create a system that works well for you.

이것들은 모두 견고한 시스템이며 당신의 프로젝트를 염두에두고 설계된 것도 아닙니다. CSS 아키텍처는 어렵기 때문에 하나의 방법론이 당신의 프로젝트를 책임질거라 생각하는 것은 실수입니다. 모든 프로젝트에서 모든 팀에 적합한 "올바른"대답은 없습니다. 모든 것을 배우고 가장 잘 맞는 시스템을 만들기 위해 가장 좋은 부분을 모으는 것이 좋습니다.

>Let’s start with a broad discussion of the building blocks, and then look at the ways we can fit them together.

먼저 빌딩 블록에 대한 폭 넓은 토론부터 시작하여 함께 맞출 수있는 방법을 살펴 보겠습니다.

## Multiple Files and Folders

>Breaking your code into multiple files is one key advantage to using a preprocessor, and forms the basis of any architecture. With Sass, there’s no harm in breaking your code into the smallest logical units and organizing it into multiple files and folders. We recommend taking full advantage of it.

코드를 여러 파일로 분할하는 것은 전처리기를 사용하는 주요 장점 중 하나이며 모든 아키텍처의 기초가됩니다. Sass를 사용하면 코드를 가장 작은 논리 단위로 분해하고, 이를 여러 파일과 폴더로 구성하는데 아무런 해가 없습니다. 우리는 그것을 최대한 활용할 것을 권장합니다.

>Sass has bestowed new power on the CSS @import rule, allowing you to combine Sass and CSS files during compilation so they can be sent to the browser as one single file. This is the only place where Sass has stepped on the toes of an existing CSS directive, so it behaves differently in Sass than it did in CSS.

Sass는 CSS `@import` 규칙에 새로운 힘을 부여하여 컴파일하는 동안 Sass 및 CSS 파일을 결합하여 브라우저에 하나의 단일 파일로 보낼 수 있습니다. 이것은 Sass가 기존 CSS의 지시문과 다른 유일한 지점입니다. Sass에서 `@import`는 CSS와 다르게 동작합니다.

### CSS Imports

>As mentioned, the CSS @import directive allows you to reference one CSS file from another. Importing is handled by the browser and requires additional HTTP requests-since the importing file has to be parsed before the @import directive is discovered. If you have a chain of files importing each other, those imports will happen in sequence, blocking the document from rendering until all the CSS has loaded. For that reason, most people avoid CSS imports entirely.

앞서 언급했듯이 CSS의 `@import` 지시어는 하나의 다른 CSS파일을 참조할 수 있습니다. 가져오기(importing)는 브라우저에서 처리하며 추가 HTTP 요청이 필요합니다. `@import` 지시문이 검색되기 전에 가져 오기 파일을 파싱해야하기 때문입니다. 서로 파일을 가져 오는 체인이있는 경우 해당 불러오기가 순서대로 진행돼 모든 CSS가 로드 될때까지 문서가 렌더링되지 않습니다. 이런 이유로 대부분의 사람들은 CSS 가져오기(import)를 기피합니다.

>Using CSS imports, you can reference another CSS file using relative or absolute paths, even adding a media query rule for conditional imports. Even though Sass provides different functionality under the same at-rule, there are various cases in which Sass will fall back to the vanilla CSS output, such as when:

CSS 가져오기(import)를 사용하면 상대경로 또는 절대경로를 사용하여 조건부 가져 오는 경우, 미디어 쿼리 규칙을 추가하는 경우에도 다른 CSS 파일을 참조할 수 있습니다. Sass가 동일한 at-규칙에 따라 다른 기능을 제공할지라도, Sass가 vanilla CSS 출력으로 폴백하는 것과 같이 다양한 케이스가 있습니다:

>* an imported file has a `.css` extension
>* a filename begins with `http://` or `https://`
>* the filename is a `url(..)` function
>* `@import` has any media queries

* 불러오는 파일의 확장자는 `.css`이다
* 파일의 이름은 `http://`나 `https://`로 시작한다
* 파일 이름은 `url(..)` 함수이다
* `@import`에 모든 미디어쿼리가 있다

>The following will compile to standard CSS imports, even in Sass:

다음은 Sass에서도 표준 CSS 가져 오기로 컴파일됩니다.

```css
@import 'relative/styles.css';
@import 'http://absolute.com/styles.css';
@import url('landscape.css') screen and (orientation: landscape);
```

### Sass Imports and Partials

>Sass imports look similar to CSS imports, but the imported files are compiled into one single output file, as though their contents (including variables, mixins, functions, and placeholders) were copied and pasted into place before compilation. This type of Sass import will only work on files with .sass or .scss extensions, but you can leave the extension off when importing (as long as there are no similarly named files). In fact, we recommend dropping the extension whenever you can, for simplicity. It’s also possible to import multiple files in one command, or import files into a nested context:

Sass `imports`는 CSS `imports`와 비슷하지만 가져온 파일은 컴파일하기 전에 해당 내용 (변수, 믹스 인, 함수 및 자리 표시 자 포함)이 복사되고 붙여 넣기 된것처럼 하나의 출력파일로 컴파일됩니다. 이 유형의 Sass import는 `.sass` 또는 `.scss` 확장명을 가진 파일에서만 작동하지만 import할 때 확장명을 해제 한 상태로 둘 수 있습니다 (비슷한 이름의 파일이없는 한). 사실, 단순함을 위해 가능한 경우 언제든지 확장명을 삭제하는 것이 좋습니다. 또한 하나의 명령으로 여러 파일을 가져 오거나 파일을 중첩 된 컨텍스트로 가져올 수도 있습니다.

```scss
// Import an explicit file relative to the current directory
// 현재 디렉토리를 기준으로 명시적 파일 가져 오기
@import 'path/to/explicit.scss';

// Import a file with either the .sass or .scss extension
// 확장자가 .sass 또는 .scss 인 파일 가져 오기
@import 'implicit';

// Import multiple files...


@import 'path/to/emory.scss', 'miko', 'path/to/gracie';

// Import a file into a nested context...
// (imagine the file copied and pasted into this context)
// 파일을 중첩 된 컨텍스트로 가져 오기
.latte {
  @import 'espresso';
}
```

>The most common use of Sass importing is for partial files—Sass files that are not compiled on their own but are for importing into other files. If you want a Sass file to remain uncompiled until it’s imported, add an underscore (_) to the start of the filename. Sass files that start with _won’t compile on their own, but can be imported into other files. When importing partials, Sass allows you to leave the_ off, which is similar to leaving off an extension. For example:

Sass import의 가장 보편적인 사용은 파편화된(`partial`) 파일입니다. 자체적으로 컴파일되지 않지만 다른 파일로 가져 오기위한 Sass파일을 사용합니다. Sass 파일을 import 하기 전까지 컴파일되지 않은 상태로 유지하려면 파일 이름의 시작 부분에 밑줄 (`_`)을 추가하십시오. `_`로 시작하는 Sass 파일은 스스로 컴파일하지 않지만 다른 파일로 가져올 수 있습니다. partial을 가져올 때 Sass를 사용하면 `_`을 떼고 사용할 수 있습니다. 이는 확장자를 떼는 것과 유사합니다. 예 :

```scss
// _authors.scss
.miriam { background: blue; }

// jumpstartsass.scss
@import 'authors'; // Shorthand for importing '_authors.scss'

// jumpstartsass.css (compiled CSS)
.miriam { background: blue; }
```
>Running Sass in this directory (`sass --update .`) compiles jumpstartsass.scss to jumpstartsass.css; however, it won’t create an _authors.css file, since it has a leading underscore.

이 디렉토리에서 Sass를 실행하면 (`sass --update .`) `jumpstartsass.scss`가 `jumpstartsass.css`로 컴파일됩니다. 그러나 앞에 밑줄이 있으므로 _authors.css 파일은 생성되지 않습니다.

>Sass partials form the basis of any Sass architecture. Because all Sass imports are handled at compile time and never interrupt the browser, it’s perfectly safe (and recommended) to use as many partials as necessary, compiling them into a single stylesheet for production. For the sake of being organized we recommend breaking out partials liberally, sorting them into folders, and importing them all back into one single master file for compilation. A common Sass directory for a project might look like this:

Sass 부분화(`partials`)는 Sass 아키텍처의 기초를 형성합니다. 모든 Sass 가져오기(`imports`)가 컴파일 타임에 처리되고 브라우저를 중단하지 않으므로 필요할 때마다 여러 부분을 사용하여 제품을 위한 단일 스타일 시트로 컴파일하므로 안전하고 권장됩니다. 정리하자면, 부분적으로 자유롭게 분할하고, 폴더로 정렬하고, 모두 하나의 단일 마스터 파일로 가져와 컴파일합니다. 프로젝트의 일반적인 Sass 디렉토리는 다음과 같습니다.

```scss
sass/
|
|– config/
|   |– _colors.scss      # Color palettes
|   |– _webfonts.scss    # Webfont information
|   …                    # Etc.
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _banner.scss      # Site Banner
|   …                    # Etc.
|
|– modules/
|   |– _calendar.scss    # Calendar widget styles
|   |– _contact.scss     # Contact form styles
|   …                    # Etc.
|
|– patterns/
|   |– _buttons.scss     # Buttons
|   |– _dropdown.scss    # Dropdown
|   …                    # Etc.
|
|- main.scss             # The primary Sass file to be compiled
```

>After organizing all your partials, they can be imported into the single primary main.scss file for compilation:

모든 부분(partials)을 구성한 후 컴파일을 위해 단일 기본 `main.scss` 파일로 가져올(import) 수 있습니다.

```scss
// Primary Sass File: main.scss
@import 'config/colors';
@import 'config/webfonts';

@import 'patterns/buttons';
@import 'patterns/dropdown';

@import 'layout/navigation';
@import 'layout/banner';

@import 'modules/calendar';
@import 'modules/contact';
```

## Components and Organization

>We’ve advised you to use partials, folders, and imports—but what’s really important is how to use them efficiently. This is where everyone’s opinions differ, and your mileage may vary.

부분(partials), 폴더(folders) 및 가져오기(imports)를 사용하라고 조언했지만 **실제로 중요한 것은 효율적으로 사용하는 방법입니다.** 이것은 모든 사람의 의견이 달라지며, 사용방식에 따라 효율성이 달라질 수 있습니다.

>Most CSS and Sass organization systems are based on some concept of user interface “components” or discrete pieces that can be put together to form a complete project. Components can be any size or shape, but they should focus on doing one task independently, and in a reusable way. A button, a drop-down, a calendar, and a search form are all examples of components that can be reused at different places across a project. Thinking about your project as a collection of components will help you towards having an organized and maintainable architecture, whether you’re using Sass or plain CSS.

대부분의 CSS와 Sass 조직 시스템(organization systems)은 완벽한 프로젝트를 형성하기 위해 사용자 인터페이스 "구성 요소(components)"또는 결합될 수있는 개별 요소(discrete pieces)의 개념에 기반합니다. 구성 요소(components)는 어떤 크기 나 모양이 될 수 있지만 독립적으로 하나의 작업을 수행해야 하며, 재사용 가능한 방식으로 작업해야합니다. 버튼, 드롭다운, 달력 및 검색 양식은 모두 프로젝트의 여러 위치에서 재사용 할 수있는 구성 요소(components)의 예입니다. 프로젝트를 구성 요소의 집합으로 생각하면 Sass 또는 일반 CSS를 사용하여 조직적이고 유지보수가 가능한 아키텍처를 얻는 데 도움이됩니다.

>Because of the way CSS works, the order of your code will also affect its meaning: later code has priority in the cascade over the code before it. Some of the popular branded architectures (the ones you know by name) try to eliminate this feature of the cascade entirely, but I use it as a guide—organizing code from the most general to the most specific—so the priority override makes sense. Code that we want applied generally across the site should come first, growing slowly in specificity and detail as we move towards more unique components and special cases.

CSS가 작동하는 방식 때문에 코드의 순서도 그 의미에 영향을 미칩니다. 나중에 작성된 코드는 그보다 먼저 작성된 코드보다 캐스케이드에서 우선 순위를 갖습니다. 인기있는 아키텍처 중 일부는 이 캐스케이드 기능을 완전히 제거하려고 시도하지만 —가장 일반적인 것부터 가장 구체적인 것까지 가이드 구성 코드로 사용하므로— 우선 순위 재정의/덮어쓰기(override)가 적합합니다. **사이트 전반에 걸쳐 일반적으로 적용하고자하는 코드가 먼저** 나와야하며, **보다 특수한 구성 요소와 특수한 경우로 이동하면서 특수성과 세부 묘사가 천천히 증가**해야합니다.

>I first learned of this approach from [Natalie Downe](https://twitter.com/Natbat)’s wonderful [CSS Systems](https://www.slideshare.net/nataliedowne/css-systems-presentation) talk in 2008 before I’d ever used Sass. Her architecture at the time started with elements (`h2`, `ol`, `ul`, and so on) grouped by “type”, followed by classes grouped by the “effect” created, and finally IDs grouped by the “component” they affect. These days it’s common practice to avoid IDs altogether, and break elements into smaller pieces, but the concept remains the same: global defaults first, followed by site-wide patterns and broad layouts, and finally, more specific modules, themes, and overrides.

Sass를 사용하기 전에 2008 년 [Natalie Downe](https://twitter.com/Natbat)의 멋진 [CSS Systems](https://www.slideshare.net/nataliedowne/css-systems-presentation) 이야기에서 이러한 접근법에 대해 처음 알았습니다. 그녀의 아키텍쳐는 "type"으로 그룹화 된 요소들 (h2, ol, ul, 등등)로 시작하여 생성된 "effect"로 그룹화된 클래스들, 그리고 마지막으로 그들이 영향을 미치는 "component"에 의해 그룹화 된 ID들로 시작되었습니다. 요즘에는 ID를 사용하지 않고 요소를 더 작은 조각으로 나누는 것이 일반적이지만 개념은 동일하게 유지됩니다: 전체 기본값(global defaults)을 우선으로 사이트 전체 패턴 및 광범위한 레이아웃, 마지막으로 보다 구체적인 모듈, 테마 및 재정의가 따릅니다.

>Sass projects include another category of site-wide defaults not found in CSS: code with no output at all—such as variables, functions, and mixin definitions. Many people (myself included) break that code into its own set of partials, to be imported anywhere it might be useful. I have a complete folder just for site-wide Sass helpers and configuration that don’t result in output. Those files act as a single, definitive, and reusable configuration that defines the boundaries of a project. By ensuring your configuration is output-free, you can import it anywhere without worrying about duplicated or unwanted styles. Here are some guidelines for thinking about architecture:

Sass 프로젝트에는 CSS에 없는 사이트 전체 기본값(site-wide defaults)의 또다른 범주가 포함됩니다: 변수(variables), 함수(functions) 및 믹스인(mixin) 정의와 같은 출력이 전혀없는 코드입니다. 많은 사람들이 (나 자신을 포함해서) 코드를 자신만의 부분 집합으로 분해하여 어디서나 유용하게 사용할 수 있습니다. 나는 사이트 전체 Sass 헬퍼로 사용되고 출력에 대한 결과가없는 완벽한 폴더가 있습니다. 이러한 파일은 프로젝트의 경계를 정의하는 결정적이고 재사용 가능한 단일 구성으로 작동합니다. 구성이 출력되지 않도록함으로써 중복되거나 원하지 않는 스타일에 대한 걱정없이 어디에서나 가져올 수 있습니다. 다음은 아키텍처에 대한 몇 가지 지침입니다:

>1. Break your code into the smallest logical component partials.
>1. Organize your partials into grouped folders based on specificity.
>1. Import those partials into one master file in order of specificity.

1. 코드를 가장 작은 논리적 구성 요소로 파편화/분해(partials)한다
2. 특정 부분을 기반으로 그룹화된 폴더로 파편/부분을 범주화 한다
3. 해당 부분을 특정 순서에 따라 하나의 마스터파일로 가져온다(import)

>However, many variations do exist on the specific ways people implement those ideas. You may also find that a lot of the branded systems developed by and for massive companies with large-scale needs don’t always translate to smaller teams and products. Every project has different requirements, so you should never assume that the best solution for InstaFace or MyPinBook is going to be the best solution for you.

그러나 사람들이 이러한 아이디어를 구현하는 구체적인 방법에는 많은 변형이 존재합니다.
대규모 요구가있는 대규모 회사에서 개발 한 많은 브랜드 시스템이 소규모 팀 및 제품에 잘 맞는것은 아닙니다. 모든 프로젝트마다 요구사항이 다르므로 InstaFace 또는 MyPinBook을 위한 솔루션이 당신의 프로젝트에 적합한 솔루션이라고 생각해서는 안됩니다.

### Object-oriented CSS (OOCSS)

>[OOCSS](https://github.com/stubbornella/oocss/wiki) is one of the original front-end architectures, and the initial inspiration for adding the `@extend` directive to Sass. A project from [Nicole Sullivan](https://twitter.com/stubbornella), it places a strong emphasis on finding the right granularity for CSS objects, a theme that comes up in most of the systems we’ll look at here.

[OOCSS](https://github.com/stubbornella/oocss/wiki)는 원래의 프런트엔드 아키텍처 중 하나이며 Sass에 `@extend` 지시문을 추가하는 데 영감을줍니다. [Nicole Sullivan](https://twitter.com/stubbornella)의 프로젝트는 CSS 객체에 적합한 세분성(granularity)을 찾는 데 중점을두고 있습니다.이 주제는 여기에서 살펴볼 대부분의 시스템에서 나오는 주제입니다.

>Sullivan argues that rather than trying to match back-end objects, a CSS object should look for more granular design patterns that might be used across a variety of content types. A prime example is what she calls the** media object**—a fixed-size media element (such as an image or video) alongside fluid content such as text.

Sullivan은 백엔드 객체를 매치하려는 것이 아니라 CSS 객체가 다양한 컨텐츠 유형에 걸쳐 사용될 수있는보다 세분화 된 디자인 패턴을 찾아야한다고 주장합니다. 대표적인 예는 텍스트와 같은 유동적 인 내용과 함께 고정 크기 **미디어 요소** (이미지 또는 비디오와 같은) 인 미디어 객체를 호출하는 것입니다.

>If you look at Facebook, which Sullivan helped refactor, you’ll see one media-object design used across the site to display a wide range of back-end objects—from stories and comments, to notifications, advertisements, and profile details. By defining objects at a granular level, a small amount of CSS can be used to style large swathes of the application.

설리반이 리팩터링을 도운 페이스 북을 보면 사이트 전반에 걸쳐 이야기와 의견에서 알림, 광고 및 프로필 세부 정보에 이르기까지 다양한 백엔드 개체를 표시하는 하나의 미디어 객체 디자인이 사용된 것을 볼 수 있습니다. 세밀한 수준에서 개체를 정의하면 소량의 CSS를 사용하여 응용 프로그램의 큰 부분을 스타일링 할 수 있습니다.

>At its best, OOCSS is a powerful tool for simplifying CSS and perfecting the performance of large-scale applications. But taken to extremes, the OOCSS approach can leave you with a mess of single-purpose utility classes (such as `.padding-left-10px`) that couple your HTML and CSS too tightly, and eliminate any maintainability you might get from more semantic code. You’ll have to find the right balance for each project.

OOCSS는 CSS를 단순화하고 대규모 응용 프로그램의 성능을 완벽하게 향상시키는 강력한 도구입니다. 그러나 OOCSS 방식은 HTML과 CSS를 너무 긴밀하게 묶는 단일 용도 유틸리티 클래스 (예 : `.padding-left-10px`)를 남겨두고, 의미론적 코드에서 얻을 수 있는 유지보수 가능성을 제거할 수 있습니다. 각 프로젝트별로 적절한 균형을 찾아야합니다.

>Whatever else you do, the two main principles of OOCSS are worth keeping in mind (indeed, committing to memory) while you work out your own architecture:

당신이하는 일이 무엇이든, OOCSS의 두 가지 주요 원칙은 염두에 두는 것이 좋습니다. 이는 자신의 아키텍처를 연구하는 동안 명심할 가치가 있습니다.

>* **Separate structure and skin.** By having multiple design skins (colors, backgrounds, borders, and so on) that you can mix and match with structural objects, it’s possible to achieve more visual variety with less code. In practice, this also means decoupling styles from the base semantics of HTML tags. By styling classes (`.primary-header`) instead of tags (`h2`), you have more flexibility to keep HTML meaningful, while applying consistent styles wherever they’re appropriate.
>* **Separate container and content.** OOCSS objects should not be dependent on their location or context, but be reusable and able to fill whatever container they are given. This ensures that an object will look the same in any context, without developers having to guess what a given element or class will do in different situations

* **구조와 스킨을 분리하십시오.** 구조용 오브젝트와 혼합 및 매치 할 수있는 여러 디자인 스킨 (색상, 배경, 테두리 등)을 사용하므로써 적은 코드로 시각적 다양성을 얻을 수 있습니다. 실제로 이것은 HTML 태그의 기본 의미와 스타일을 분리하는 것을 의미합니다. 태그 (h2) 대신 클래스 (.primary-header)로 스타일을 지정하면 HTML을 의미있게 유지하면서 적절한 위치에 일관된 스타일을 적용 할 수있는 유연성이 향상됩니다.
* **컨테이너와 내용을 분리하십시오.** OOCSS 객체는 위치나 컨텍스트에 의존해서는 안되며, 재사용 가능하고 주어진 컨테이너를 채울 수 있어야합니다. 이렇게하면 개발자가 각기 다른 상황에서 주어진 요소나 클래스가 무엇을 할 것인지 추측 할 필요없이 객체가 어떤 상황에서도 똑같이 보일 것입니다.

>There is no organizational structure built into OOCSS, but there is a [framework available on GitHub](https://github.com/stubbornella/oocss) that provides a number of common objects, as well as documentation on customizing the framework to your needs.

OOCSS에 정의된 조직 구조는 없지만, 여러 가지 공통 객체를 제공하는 [프레임 워크가 Github](https://github.com/stubbornella/oocss)에 제공되며, 필요에 따라 프레임 워크를 사용자 정의하는데 대한 설명서가 있습니다.

## Atomic Design

>[Atomic Design](https://patternlab.io/) is also driven by questions of granularity. Initially devised by [Brad Frost](https://twitter.com/brad_frost), an atomic project is broken down into five stages: atoms, molecules, organisms, templates, and pages. The idea is to style the stages in order, starting granular and working outwards, with each stage building on the one before.

[Atomic Design](https://patternlab.io/)은 또한 세분성의 문제에서 출발합니다. [Brad Frost](https://twitter.com/brad_frost)가 처음 고안한 Atomic 프로젝트는 원자(atoms), 분자(molecules), 유기체(organisms), 템플릿(templates) 및 페이지(pages)의 다섯 단계로 나뉩니다. 아이디어는 각 단계에 질서있게 스타일을 지정하고 세분화된 방식으로 시작하여 바깥쪽으로 작업하는 것입니다.

>According to Atomic Design, atoms can be abstract information such as color palettes, fonts, and typographic scales; they can also be default styles for tags such as form labels, buttons, and paragraphs. Since I can never remember the scientific terms, I break these two ideas down further and refer to the former as “configuration” or “settings” (having no output on their own), and the latter “base” or “initial” styles (having output).

Atomic Design에 따르면, **원자(atoms)**는 color palettes, fonts, typographic scales과 같은 추상 정보일 수 있습니다. 또한 form labels, buttons, paragraphs과 같은 태그의 기본 스타일이 될 수도 있습니다. 과학 용어를 결코 기억할 수 없으므로 나는이 두 가지 아이디어를 더 깊이 내리고 "구성(configuration)"또는 "설정(settings)"(그 자체로 출력이 없음)과 후자의 "기본(base)"또는 "초기(initial)"스타일을 언급합니다 (출력 됨).

>Atoms can be put together to form molecules. Combine an image with a paragraph and button (all atoms), and you have a simple product-listing molecule. Molecules are small components that do one task well. Group a number of these molecules together, and you have an organism (in this case, a gallery of products). Organisms are larger grouped components that form a section of the interface. Your site banner might also be an organism, combining a logo, navigation, and search form. I call these next two stages “patterns” and “components,” but it’s recommended that you work with your team to find terms you all understand clearly.

원자(Atoms)가 함께 모여 **분자(molecules)**를 형성 할 수 있습니다. 단락과 버튼 (모든 Atoms)과 이미지를 결합하면 간단한 제품 목록 분자(molecules)가됩니다. 분자(molecules)는 하나의 과제를 잘 수행하는 작은 구성 요소입니다. 여러 분자(molecules)를 함께 그룹화하면 **유기체(organism)** (이 경우 제품 갤러리)가 생깁니다. 유기체(organism)는 인터페이스의 섹션을 구성하는보다 큰 그룹화 된 구성 요소입니다. 귀하의 사이트 배너는 로고(logo), 탐색(navigation) 및 검색 양식(search form)을 결합한 유기체(organism)일 수도 있습니다. 다음 두 단계를 "패턴(patterns)"과 "구성 요소(components)"라고 부릅니다. 그러나 팀과 함께 모두 이해하는 용어를 찾아내는 것이 좋습니다.

>At this point, the developers of Atomic Design abandon their biochemical analogy, and move to templates. Templates combine the smaller molecules and organisms into actual layout structures. If you run a news site, you might have a list template and a detail template for your articles. Each specific instance of a template is called a page. The home page and archive page of your news site may both use the article-list template, but they have different content. Pages are the most specific combination of all the other stages.

이 시점에서 Atomic Design의 개발자는 생화학 적 유추를 포기하고 템플릿으로 이동합니다. 템플릿은 작은 분자(molecules)와 유기체(organisms)를 실제 레이아웃 구조로 결합합니다. 뉴스 사이트를 운영하는 경우 기사의 목록 템플릿 및 세부 템플릿이있을 수 있습니다. 템플리트의 각 특정 인스턴스/사례를 페이지라고합니다. 뉴스 사이트의 홈페이지 및 아카이브 페이지는 모두 기사 목록(article-list) 템플릿을 사용할 수 있지만 내용이 다릅니다. 페이지는 다른 모든 단계의 가장 구체적인 조합입니다.

>A standard Atomic Design directory will be organized into these five stage-based folders:

표준 Atomic Design 디렉토리는 다음과 같은 5 개의 스테이지 기반 폴더로 구성됩니다.

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

>Atomic Design also provides a framework called Pattern Lab. As with OOCSS, avoid confusing the framework with the design system philosophy. You can apply the philosophy anywhere, but the tools are still available if you need them. Frameworks can be a great way to keep code consistent across a large team or project, but always remember that you know your project better than Brad Frost, Nicole Sullivan, or the authors of this book. If there’s a conflict between your needs and the framework you’re using, always put your project first.

Atomic Design은 또한 [Pattern Lab](https://patternlab.io/)이라는 프레임 워크를 제공합니다. OOCSS와 마찬가지로 프레임 워크를 디자인 시스템 철학과 혼동하지 마십시오. 어디서나 철학을 적용 할 수 있지만 필요한 경우 도구를 계속 사용할 수 있습니다. 프레임 워크는 대형 팀이나 프로젝트에서 코드를 일관성있게 유지하는 좋은 방법이 될 수 있지만 Brad Frost, Nicole Sullivan 또는 이 책의 저자보다 당신의 프로젝트를 잘 알고 있다는 것을 항상 기억하십시오. 요구 사항과 사용하는 프레임 워크간에 충돌이있는 경우 항상 프로젝트를 우선으로 생각하세요.

### Block, Element, Modifier (BEM)

>[BEM](https://en.bem.info/) is a system developed by the [Yandex](https://www.yandex.com/) team. This is a much more extensive system, with its fingers in every aspect of your code—from JSON data structures, to templates, as well as CSS.

[BEM](https://en.bem.info/)은 [Yandex](https://www.yandex.com/)팀이 개발한 시스템입니다. 이것은 JSON 데이터 구조, 템플릿뿐만 아니라 CSS에 이르기까지 코드의 모든 측면에서 매우 광범위한 시스템입니다.

>The BEM CSS architecture is built around the three ideas in its title. **Blocks** are components of any size, and can be nested inside each other. The header block might contain a logo block, a navigation block, and a search block. Blocks are reusable, independent, and mobile—so they can be put anywhere on the page, and repeated as often as necessary. Elements are the constituent parts that belong to a specific block. A menu block might be made up of four tab elements. Modifiers are flags on blocks or elements that change their appearance, behavior, or state.

BEM CSS 아키텍처는 제목에있는 세 가지 아이디어를 기반으로합니다. **블록(Blocks)**은 모든 크기의 구성 요소이며 서로 내부에 중첩 될 수 있습니다. `header` 블록은 `logo` 블록, `navigation` 블록 및 `search` 블록을 포함 할 수 있습니다. 블록은 재사용 가능하고, 독립적이며, 변하기 쉽습니다(mobile)—그러므로 페이지의 어느 곳에 나 배치 할 수 있으며 필요한만큼 자주 반복 할 수 있습니다. **요소(Elements)**는 특정 블록(Blocks)에 속하는 구성 요소입니다. `menu` 블록은 4 개의 `tab` 요소로 구성 될 수 있습니다. **모디파이어(Modifiers)**는 블록(blocks)이나 요소(elements)의 모양, 동작 또는 상태를 변경하는 플래그입니다.

>The most immediately recognizable aspect of BEM syntax is an intricate naming convention that uses long class names instead of nesting selectors. Rather than targeting `.block` `.element`, you would target `.block__element`. There are variations on the exact syntax, but the formal documentation allow hyphens (`-`) within a block, element, or modifier name; double underscore (`__`) between block and element names; and single underscore (`_`) before a boolean (true/false) modifier, or between a key-value modifier name and its given value.

BEM 구문에서 가장 빨리 알아볼 수있는 부분은 중첩 선택자(selector) 대신 긴 클래스 이름을 사용하는 복잡한 명명 규칙입니다. `.block` `.element`를 타겟팅하는 대신 `.block__element`를 타겟팅합니다. 신택스에 여러 변형이 있지만 공식 문서에서는 블록, 요소 또는 수정 자 이름 내에 하이픈 (`-`)을 사용할 수 있습니다. 블록 이름과 요소 이름 사이에 두 개의 밑줄 (`__`)이 붙습니다. boolean (true / false) 변경자 앞의 단일 밑줄 (`_`) 또는 key-value 수정 자 이름과 해당 값 사이의 공백을 나타냅니다.

>Here’s an example straight from the BEM documentation that defines a `form` block with a `_login` boolean modifier, a `_theme_forest` key-value modifier, and two elements:

다음은 `_login` boolean 수정자(modifier) , `_theme_forest` key-value 수정자(modifier) 및 두 요소가 있는 `form` 블록을 정의하는 BEM 문서의 예제입니다.

```html
<form class="form form_login form_theme_forest">
  <input class="form__input">
  <input class="form__submit form__submit_disabled">
</form>
```

>A related Sass partial would look like this:

관련된 Sass partial은 다음과 같습니다.

```scss
.form {}
.form_theme_forest {}
.form_login {}
.form__input {}
.form__submit {}
.form__submit_disabled {}
```

>When BEM naming became popular, people started using the Sass parent selector (`&`) to automatically generate their BEM class names with less repetition in the code:

BEM 이름 지정이 인기를 얻었을 때 사람들은 Sass 부모 선택기 (&)를 사용하여 코드에서 반복이 적은 BEM 클래스 이름을 자동으로 생성하기 시작했습니다.

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

>On the surface, this works great—but it comes at the cost of searchability. If another developer has to find the .form__submit_disabled Sass in order to make a change, searching your Sass files for .form__submit_disabled will fail to return any results.

표면적으로 잘 작동하지만 검색 가능성을 희생합니다. 다른 개발자가 `.form__submit_disabled` Sass를 찾아 변경해야하는 경우 Sass 파일에서 `.form__submit_disabled`를 검색하면 결과가 반환되지 않습니다.

>The BEM file structure goes beyond CSS and Sass, organizing all assets (JavaScript, CSS, images, and so on) into shared directories by block. Elements and modifiers have their own subdirectories using the same underscore-driven naming conventions:

BEM 파일 구조는 CSS 및 Sass를 넘어 모든 자산 (JavaScript, CSS, 이미지 등)을 블록별로 공유 디렉토리로 구성합니다. 요소와 수정자는 동일한 밑줄(underscore) 중심 명명 규칙을 사용하여 자체 하위 디렉토리를 갖습니다.

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

### Scalable and Modular Architecture for CSS (SMACSS)

>SMACSS is a book, workshop, and philosophy by Jonathan Snook. Like Atomic Design, this architecture uses five categories for organizing your CSS, except that they aren’t organized from small to large. Detailed naming patterns are provided to help keep class names consistent. It’s one of the most popular brand-name architectures, and may even be the most comprehensive.

[SMACSS](https://smacss.com/)는 [Jonathan Snook](https://twitter.com/snookca)의 책, 워크샵 및 철학입니다. Atomic Design과 마찬가지로 이 아키텍처는 CSS 구성에 5가지 카테고리를 사용합니다. 단, 작은 카테고리에서 큰 카테고리로 분류되지 않습니다. 클래스 이름을 일관되게 유지하는데 도움이되는 자세한 이름 지정 패턴이 제공됩니다. 가장 유명한 브랜드 아키텍처 중 하나이며 가장 포괄적 인 아키텍처일 수도 있습니다.

>The five categories here are base, layout, module, state, and theme. Base rules define the default style of elements, which work similarly to the atoms of Atomic Design. Layout styles are used to break the document into sections that can contain modules, the individual components of a design. State rules define different JavaScript-dependent states for a module or layout; that is, how does it change when it is active or inactive, collapsed or expanded? Most sites have no need for themes, but they can be used to describe multiple style options for the same modules.

여기에 기본(base), 레이아웃(layout), 모듈(module), 상태(state) 및 테마(theme)의 다섯 가지 범주가 있습니다. **기본(base)** 규칙은 Atomic Design의 atoms와 유사하게 작동하는 요소의 기본 스타일을 정의합니다. **레이아웃(layout)** 스타일은 문서 **모듈(modules)** 을 포함 할 수있는 섹션, 즉 디자인의 개별 구성 요소를 나눕니다. **상태(state)** 규칙은 모듈(modules) 또는 레이아웃(layout)에 대해 서로 다른 JavaScript 종속 상태를 정의합니다. 즉, 활성 또는 비활성, 축소 또는 확장되면 어떻게 변경될지에 대한 것 입니다. 대부분의 사이트는 **테마(themes)**를 필요로하지 않지만, 동일한 모듈에 대해 여러 가지 스타일 옵션을 부여하는데 사용할 수 있습니다.

>In order to help keep CSS and HTML modules small and mobile, SMACSS pays special attention to what Snook calls the depth of applicability. You may know of the Sass “inception rule,” which states that you should never nest selectors more than three layers deep. That rule helps to keep selectors short (no more than three layers), but the depth of applicability is a bit different. Rather than counting the number of layers, it counts the total DOM distance between the first and last layers.

SMACSS는 CSS 및 HTML 모듈을 소형 및 이동성 있는 상태로 유지하도록, Snook이 _적용 가능성 의 깊이(depth of applicability)_ 라 부르는 것에 대해 특별히주의를 기울입니다. 당신은 Sass의 "시작 규칙"을 알고 있습니다. 이 규칙은 절대로 세 개 이상의 선택자를 중첩해서는 안된다는 것 입니다. 이 규칙은 선택자를 짧게 유지하는 데 도움이되지만 _적용 가능성 의 깊이(depth of applicability)_ 는 약간 다릅니다. 레이어 수를 세는 대신 첫 번째 레이어와 마지막 레이어 사이의 총 DOM 거리를 계산합니다.

>Let’s look at a simple example. Since `.mammalia > .primates > .hominidae > .sapiens > .rollsman > .erin` has a depth of six, the same basic selector written as `.mammalia .sapiens .erin` would still have a depth of six. By shortening the selector, we’ve lowered the specificity (a good thing!), but we still have a large depth of applicability. The problem with so much depth is that it makes our CSS more dependent on a particular HTML structure. This is generally solved by keeping our HTML and CSS components small and independent from their containers.

간단한 예를 살펴 보겠습니다. `.mammalia> .primates> .hominidae> .srsiens> .rollsman> .erin`의 깊이가 6이기 때문에 `.mammalia .sapiens .erin`과 동일한 기본 선택자는 여전히 6의 깊이를 갖습니다. 셀렉터를 줄임으로써 우리는 특이성을 낮추었습니다 (좋은 것입니다!). 그러나 우리는 여전히 큰  _적용 가능성 의 깊이(depth of applicability)_ 를 가지고 있습니다. 너무 많은 깊이의 문제는 CSS가 특정 HTML 구조에 더 의존하게 만든다는 것입니다. **이것은 일반적으로 HTML 및 CSS 구성 요소를 컨테이너에서 작고 독립적으로 유지함으로써 해결됩니다.**

### Hugo’s 7-1

>Hugo uses a variation of SMACSS for organizing Sass partials. He calls it the “7-1” system, because it uses seven folders of partials and one master file to pull them all together.

Hugo는 Sass 부분을 구성하기 위해 SMACSS 변형을 사용합니다. 그는 이것을 7-1이라는 시스템이라고 부릅니다. 왜냐하면 7 개 폴더의 부분 파일과 하나의 마스터 파일을 모두 사용하기 때문입니다.

>The base/ folder contains broad standards across a site—such as a reset, default styles for common HTML tags, common animations, and basic typography. The layout folder includes everything one might need for laying out the structure of a site; for example, boilerplate-like headers, footers, and navigation, as well as your grid system and layout helpers. The components folder is organized into partials by component; the pages folder contains any page-specific styles; and a `themes` folder holds any theme-related styles (if your project has multiple themes).

base/ 폴더에는 사이트 전반에 대한 광범위한 표준이 포함되어 있습니다. (리셋, 일반 HTML 태그의 기본 스타일, 일반적인 애니메이션 및 기본 타이포그래피) 레이아웃(layout) 폴더에는 사이트의 구조를 레이아웃하는 데 필요한 모든 것이 포함되어 있습니다. headers, footers, navigation, grid system 및 layout helpers, boilerplate(일반 사용자 인터페이스)를 지원합니다. 구성 요소(components) 폴더는 구성 요소의 부분(partial)별로 구성됩니다. pages 폴더에는 페이지 별 스타일이 포함되어 있습니다. 테마(`themes`) 폴더에는 테마 관련 스타일이 있습니다 (프로젝트에 여러 테마가있는 경우).

>7-1 also includes an abstracts folder for Sass tools and helpers, which is organized into partials for global variables, functions, mixins, and placeholders. Nothing in this folder should output any CSS if compiled on its own.

7-1에는 Sass 도구(tools) 및 헬퍼(helpers) 용 추상화 폴더도 포함되어 있습니다. 이 폴더는 전역 변수(global variables), 함수(functions), 혼합(mixins) 및 자리 표시자(placeholders)를위한 부분으로 구성됩니다. 이 폴더의 어떤것도 자체적으로 CSS로 컴파일되어 출력되지 않습니다

>Hugo leaves the possibility of organizing these partials by topic (typography, colors, etc.) rather than type (variables, mixins, functions) for larger projects, but I recommend that across the board. The topic is always the more important distinction in my mind. Placeholders are the only type that I treat in any special way, because their output remains in the location they are defined—while variables, functions, and mixins create output where they are used.

Hugo는 더 큰 프로젝트를 위해 (변수, 믹스인, 함수)를 타이핑하기보다는 주제(타이포그래피, 색채 등)로 이들 부분을 구성 할 수있는 가능성을 남겨 두었습니다. 주제(topic)는 항상 내 마음 속에서 더 중요한 차이를 가집니다. 자리 표시자(placeholder)는 변수(variables), 함수(functions) 및 믹스 인(mixins)이 사용되는 곳에 출력 결과물을 만드는 동안 정의 된 위치에 남아 있기 때문에 유일하게 특별하게 분류해 관리합니다.

>Finally, there is a vendors folder for third-party libraries, frameworks, and toolkits such as Normalize, Bootstrap, jQueryUI, FancyButtonsOMG, and so on. These are often kept separate so as to not edit them should they need upgrading later.

마지막으로, 타사 라이브러리(third-party libraries), 프레임 워크 및 표준화(Normalize), Bootstrap, jQueryUI, FancyButtonsOMG 등과 같은 툴킷 용 공급 업체(vendors) 폴더가 있습니다. 나중에 업그레이드해야 할 경우 편집하지 않기 위해 별도로 보관됩니다.

>Put it all together, and you have a Sass directory similar to this:

모두 함께 넣으면 다음과 비슷한 Sass 디렉토리가 생깁니다.

```md
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|   …                    # Etc.
|
|– components/
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   …                    # Etc.
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   …                    # Etc.
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   …                    # Etc.
|
|– themes/
|   |– _theme.scss       # Default theme
|   |– _admin.scss       # Admin theme
|   …                    # Etc.
|
|– utils/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   …                    # Etc.
|
`– main.scss             # Main Sass file
```

### Inverted Triangle CSS (ITCSS)

>[ITCSS](http://technotif.com/manage-large-css-projects-with-itcss/) is a new architecture that is just starting to gain attention. This system from [Harry Roberts](https://twitter.com/csswizardry) does a great job defining the problem of CSS architecture and proposing a solution that comes directly out of the CSS language. Rather than working around inheritance and specificity, Roberts puts them at the center of his methodology.

[ITCSS](http://technotif.com/manage-large-css-projects-with-itcss/)는 이제 막 주목 받기 시작한 새로운 아키텍처입니다. [Harry Roberts](https://twitter.com/csswizardry)의 이 시스템은 CSS 아키텍처의 문제점을 정의하고 CSS에서 직접 나온 솔루션을 제안하는 훌륭한 작업을 수행합니다. 상속(inheritance)과 특수성(specificity)을 연구하기보다는 방법론의 중심에두고 있습니다.

>ITCSS organizes all your Sass and CSS based on three metrics: reach, specificity, and explicitness—visualized as an inverted triangle, as shown below:

ITCSS는 아래와 같이 세 가지 메트릭인 reach, specificity 및 explicitness를 역삼각형으로 시각화하여 Sass와 CSS를 구성합니다.

![](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/05/1464358496itcss-metrics-1024x860.png)

>Code should be organized from least to most explicit, starting with general catch-all rules (such as a reset) and moving up to more explicit styles (such as .contact-form). Similarly, code is organized from broadest to narrowest reach—so that styles affecting more HTML come early in the code, and styles with a more localized application come later. Finally, code is organized from lowest to highest specificity, so that later code can always override earlier code.

코드는 가장 적은 것부터 가장 명확한 것으로 구성되어야합니다.
일반적인 캐치 올 규칙 (예 : 재설정, reset)에서 시작하여 좀 더 명확한 스타일 (예 : `.contact-form`)으로 이동하는것과 같습니다. 마찬가지로 코드는 가장 넓은 범위에서 가장 좁은 범위로 구성되므로 더 많은 HTML에 영향을주는 스타일이 코드의 초기에 오고, 보다 현지화 된 응용 프로그램을 사용하는 스타일은 나중에 제공됩니다. 마지막으로, 코드는 가장 낮은 특이성에서부터 높은 특이성으로 구성되므로 나중에 작성된 코드가 항상 이전 코드를 덮어 쓸 수 있습니다.

>With those metrics in mind, the triangle is broken down into seven layers. Each layer is more specific, explicit, and narrow-reaching than the layer before it, as shown here:

이러한 메트릭을 염두에두고 삼각형은 7 개의 레이어로 나뉩니다. 각 레이어는 그 이전 레이어보다 구체적이고 명시 적이며 범위가 좁습니다.

![](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/05/1464358540itcss-layers-1024x678.png)

>Let’s explore what these layers are in detail. **Settings** contains global Sass configuration that can be accessed anywhere in the project, such as font sizes, colors, and other project configuration. **Tools** are global functions and mixins that are helpful across the project and not specific to one component. **Generic** is the first layer with CSS output of its own, which includes browser resets or normalization, global box-sizing, and any other broad-scoped rules. The **elements** layer provides default styles for bare HTML elements such as links and paragraphs. It’s similar to the generic layer, except that it provides a more opinionated style.

**설정(Settings)**에는 글꼴 크기, 색상 및 기타 프로젝트 구성과 같이 프로젝트의 어느 곳에서나 액세스 할 수있는 전역 저음 구성이 포함되어 있습니다. **도구(Tools)**는 프로젝트 전반에 도움이되고 하나의 구성 요소에만 국한되지 않는 전역 기능 및 혼합입니다. **Generic**은 브라우저 재설정 또는 정규화(normalization), 전역 상자(global box-sizing) 크기 조정 및 기타 광범위한 범위의 규칙을 포함하는 고유 한 CSS 출력을 가진 첫 번째 레이어입니다. **요소(elements)** 레이어는 링크 및 단락과 같은 HTML 요소의 기본 스타일을 제공합니다. generic 레이어와 비슷하지만, 더 독창적인 스타일을 제공한다는 점만 다릅니다.

>ITCSS objects are similar to OOCSS objects, and are defined in class-based selectors. They define reusable patterns that have a consistent structure no matter what content or cosmetic style is applied, just like the OOCSS media object does. Components are recognizable pieces of an interface, such as a contact form or a product listing. After the initial setup, this is where the majority of a project’s feature-building work takes place. Finally, trump styles can be used to override any other layer. Trumps should be used sparingly, and have as narrow a scope as possible.

ITCSS **개체(objects)**는 OOCSS 개체와 유사하며 클래스 기반 선택자로 정의합니다. OOCSS 미디어 객체와 마찬가지로 어떤 내용이나 스타일이 적용 되더라도 일관된 구조를 갖는 재사용 가능한 패턴을 정의합니다. **구성 요소(Components)**는 연락처 양식이나 제품 목록과 같이 인터페이스로 인식 가능한 부분입니다. 초기 설정이 끝난 후 프로젝트의 대부분의 기능을 구성하는 작업이 수행됩니다. 마지막으로 **트럼프(trump)** 스타일을 사용하여 다른 레이어를 재정의 할 수 있습니다. 트럼프(trump)는 가급적 사용을 줄여야 하며, 가능하면 범위를 좁게해야합니다.

>All these layers can be organized into groups of partials. Roberts uses a multilevel file-naming convention (`layer-name.partial-name.scss`), but we’d recommend using folders instead. The results could look like this:

이 모든 레이어는 부분 그룹으로 구성 될 수 있습니다. Roberts는 다중 레벨 파일 명명 규칙 (`layer-name.partial-name.scss`)을 사용하지만 대신 폴더를 사용하는 것이 좋습니다. 결과는 다음과 같습니다.

```scss
@import "settings/global";
@import "settings/colors";

@import "tools/functions";
@import "tools/mixins";

@import "generic/box-sizing";
@import "generic/normalize";

@import "elements/headings";
@import "elements/links";

@import "objects/wrappers";
@import "objects/grid";

@import "components/site-nav";
@import "components/buttons";
@import "components/carousel";

@import "trumps/clearfix";
@import "trumps/utilities";
@import "trumps/ie8";
```

### Miriam’s Mix-n-Match

>All that is well and good, but I’m writing this chapter and I think my own architecture is way cooler than anything else we’ve discussed. I’m yet to give it a name, but I will as soon as I decide to tour the universe giving workshops to all my adoring fans. A girl can dream, right?

이 모든 것은 훌륭하지만이 장을 쓰고 있으며 제 자신의 아키텍처가 우리가 논의한 것보다 더 좋다고 생각합니다.

>To tell you the truth, I love parts of all these systems—especially ITCSS. I take what works for my team, and make adjustments as needed from one project to the next. For me, it all starts with one rule: follow the cascade. In practice, it looks a lot like ITCSS or Atomic Design (though I find the latter’s biochemical metaphor confusing). I use the same metrics, but break down the categories in slightly different ways.

사실을 말하면, 저는이 모든 시스템의 일부, 특히 ITCSS를 좋아합니다. 팀원들에게 적합한 것을 취하고 필요에 따라 한 프로젝트에서 다음 프로젝트로 조정합니다. 나를 위해, 모든 것이 하나의 규칙으로 시작됩니다 : 캐스케이드를 따르십시오. 실제로는 ITCSS 나 Atomic Design과 매우 흡사합니다 (후자의 생화학적 은유가 혼란스럽지만). 동일한 측정 항목/메트릭을 사용하지만 약간 다른 방식으로 카테고리를 분류합니다.

>I start with Sass config files that have no output but define all the parameters of a design: colors, fonts, sizes, media-queries, z-indexes, and so on. In my case, it’s almost entirely Sass map variables accessed with a powerful set of functions and mixins I take from project to project: [OddBird’s](https://github.com/oddbird) Accoutrement toolkits. [Chris Sauvé](https://twitter.com/lemonmade) refers to this approach as a “Sass Central Nervous System”—a consistent system for maintaining and accessing abstract meta-patterns and style guidelines. Ours look something like this:

필자는 출력이없고 디자인의 모든 매개 변수 (colors, fonts, sizes, media-queries, z-indexes 등)를 정의하는 Sass 구성 파일부터 시작합니다. 필자의 경우, [OddBird](https://github.com/oddbird)의 Accoutrement 툴킷은 프로젝트에서 프로젝트로 가져 오는 강력한 기능 및 믹스 세트로 거의 모든 Sass 맵 변수에 액세스 할 수 있습니다. [Chris Sauvé](https://twitter.com/lemonmade)는 이 접근 방식을 추상적인 메타 패턴 및 스타일 지침을 유지하고 액세스하기위한 일관된 시스템 인 "Sass Central Nervous System"을 참조합니다. 우리의 모습은 다음과 같습니다.

```scss
// Accoutrement Config
// -------------------

$colors: (
  // base color palette
  'brand-blue': hsl(195, 100%, 43%),
  'brand-red': hsl(0, 100%, 50%),
  'brand-pink': hsl(330, 100%, 45%),

  // color style guide
  'background': hsl(0, 0%, 100%),
  'text': 'brand-blue' ('shade': 80%),
  'action': 'brand-pink',
  'focus': 'brand-blue',
);

$sizes: (
  // base font size
  'body-text': 22px,

  // type sizes
  'rhythm': 'body-text' ('minor-third': 2),
  'h1': 'body-text' ('minor-third': 3),
  'h2': 'body-text' ('minor-third': 2),
  'h3': 'body-text' ('minor-third': 1),

  // other
  'corners': 3px,
  'page': 30rem,
);

$fonts: (
  // hosted web font
  'body': (
    'name': 'CenturyOldStyle',
    'stack': ('Baskerville', 'Palatino', 'Cambria', 'Georgia', 'serif'),
    'regular': 'CenturyOldStyle-regular', // webfont file names...
    'italic': 'CenturyOldStyle-italic',
    'bold': 'CenturyOldStyle-bold',
  ),

  // web-safe font stack
  'code': (
    'name': 'Consolas',
    'stack': ('Menlo', 'Monaco', 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', 'monospace', 'serif')
  ),
);
```

>The toolkit layer is prebuilt, and moves with us from project to project. It includes functions and mixins that put our configuration to work: automating @font-face imports, font-stacks, and typographical rhythms, as well as applying our color palette. It also helps with accessible color contrasts, and automatically generates a visual style guide, so we can see the fonts, colors, and sizes in action.

**툴킷(toolkit)** 레이어는 미리 빌드되어 있으며 우리와 함께 프로젝트간에 이동합니다. 여기에는 `@font-face` 불러오기(imports), `font-stacks` 및 typographical rhythm을 자동화하고 color palette를 적용하는 등 업무의 구성(configuration)을 적용하는 functions과 mixins이 포함되어 있습니다. 또한 접근성이 높아지도록 색상 대비를 돕고 자동으로 비주얼 스타일 가이드를 생성하므로 글꼴, 색상 및 크기가 실제로 작동하는지 확인할 수 있습니다.

>The next level up is what I call initial styles—resets, web font imports, global defaults, and so on. This is the first layer of code with actual CSS output, and it’s a thin layer. At this point we’re not styling any real patterns, just trying to establish a slightly more beautiful and branded version of the browser defaults.

다음 단계는 **초기화(initial)** 스타일 resets, 웹 폰트 불러오기, 글로벌 기본값 등을 호출하는 것입니다. 이것은 실제 CSS 출력과 함께 코드의 첫 번째 레이어이며, 얇은 레이어입니다. 이 시점에서 우리는 실제 패턴을 스타일링하지 않고 브라우저 기본값의 약간 더 아름답고 브랜드화 된 버전을 설정하려고합니다.

>From there I often establish the site **layout**, adding patterns as needed. The layout partials are similar to Hugo’s, describing all the primary structures of the site. **Patterns** are design objects, similar to objects in OOCSS and ITCSS. They’re not related to specific content, and might be used anywhere, for anything. For example, buttons and form elements are always some of my first design patterns on a project.

거기에서 필자는 종종 사이트 **레이아웃(layout)** 을 설정하고 필요에 따라 패턴을 추가합니다. 레이아웃 부분화(partial)는 Hugo와 유사하며 사이트의 모든 기본 구조를 설명합니다. **패턴(Patterns)** 은 객체를 디자인합니다 .OOCSS 및 ITCSS의 객체(objects)와 비슷합니다. 특정 콘텐츠와 관련이 없으며 어디서나 무엇으로든 사용할 수 있습니다. 예를 들어 버튼과 양식 요소는 항상 프로젝트의 첫 번째 디자인 패턴 중 일부입니다.

>Patterns are abstract, and have no real meaning until they’re used in a **component**—the actual bits of user interface that appear on a site. Components should follow all the rules described earlier in the chapter: reusable, repeatable, and able to fit in any container. What others systems call page and theme styles are usually defined either as layout templates or components that just happen to be full screen. Any vendor code that I use will come through a packaging system such as npm, and live outside my visible Sass directory:

패턴은 추상적이며 사이트에 표시되는 사용자 인터페이스의 실제 요소 인 **구성 요소(component)**에서 사용되기 전까지는 아무런 의미가 없습니다. 구성 요소(component)는이 장 앞부분에서 설명한 모든 규칙을 따라야합니다.
재사용 가능하고 반복 가능하며 모든 컨테이너에 들어갈 수 있어야합니다.
다른 시스템이 페이지(page) 및 테마 스타일(theme)이라고 부르는 것은 일반적으로 레이아웃 템플릿(layout templates) 또는 전체 화면으로 나타나는 구성 요소로 정의합니다. 내가 사용하는 모든 벤더 코드는 npm과 같은 패키징 시스템을 통해 사용되며 나의 Sass directory 밖에 존재하게 됩니다

```md
sass/
|
|– config/
|   |– _colors.scss      # Color palettes
|   |– _fonts.scss       # Font palettes
|   …                    # Etc.
|
|– initial/
|   |– _init.scss        # reset/normalization
|   |– _root.scss        # global defaults (mostly :root, html, body)
|   |– _webfonts.scss    # @font-face imports
|   …                    # Etc.
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _banner.scss      # Site Banner
|   …                    # Etc.
|
|– patterns/
|   |– _buttons.scss     # Buttons
|   |– _dropdown.scss    # Dropdown
|   …                    # Etc.
|
|– components/
|   |– _calendar.scss    # Calendar widget styles
|   |– _contact.scss     # Contact form styles
|   …                    # Etc.
|
|- main.scss             # The primary Sass file to be compiled
```

>Lately, I’ve also included a styleguide folder, and an extra styleguide.scss root Sass file to be compiled separately. These files contain any styleguide-specific components not required by the main app—styles for the color palette, font specimens, and so on.

최근에는 styleguide 폴더에 별도로 컴파일 할 `styleguide.scss` 루트 Sass 파일도 포함 시켰습니다. 이 파일에는 기본 앱 스타일에 필요하지 않은 색상 표(color palette), 글꼴 표본(font specimens) 등의 스타일 가이드 관련 구성 요소가 포함되어 있습니다.

## Modular Imports in Sass 4

>As this chapter was being written, the core Sass designers, Natalie Weizenbaum and Chris Eppstein, were working out the details for **modular imports**, the major new feature that is driving plans for Sass 4. The specifics are still in flux, but the direction they’re going in is exciting, so it’s worth giving you a sneak peak at what they’ve done so far.

이 장이 작성됨에 따라 핵심 Sass 디자이너 인 Natalie Weizenbaum과 Chris Eppstein은 Sass4의 계획을 추진하는 주요 새로운 기능인 **modular imports**에 대한 세부 사항을 연구하고 있었습니다. 세부 사항은 여전히 유동적이지만 방향은 들어가기가 흥미롭다. 그래서 지금까지 해왔 던 일에 몰래 들어갈 가치가있다.

>Modular imports are a move away from the CSS `@import` syntax towards one that is more powerful and Sass-specific. Where Sass imports currently work as though the entire imported document has been cut and pasted into place, modular imports provide a lot more control for the developer—inspired by best practice in languages such as Python and Dart. It will probably look a little like this:

모듈식 가져오기(Modular imports)는 CSS `@import` 구문에서 더 강력하고 Sass 관련 구문으로 옮겨 가고 있습니다. Sass imports가 현재 가져온 문서 전체를 잘라내어 원하는 위치에 붙여 넣은 것처럼 모듈 식 가져 오기는 Python 및 Dart와 같은 언어의 모범 사례에서 영감을 얻은 개발자를위한 더 많은 제어 기능을 제공합니다. 아마 다음과 같이 보일 것입니다 :

```scss
@use 'path/to/sitepoint/author' as 'miriam';

.sitepoint {
  @include miriam.write('Jump Start Sass');
  -webkit-paycheck: miriam.money('millions');
}
```

>Okay, there may not be a `-webkit-paycheck` property coming anytime soon, but the rest looks good. So what’s it all about, and why do we need it?

그래, 곧 출시 될 `webkit-paycheck` 속성이 없을 수도 있지만 나머지는 좋아 보인다. 그래서 무엇이 전부이며, 왜 우리는 그것을 필요로합니까?

### Locality

>With the current Sass import system, variables, mixins, and functions live in a global namespace across all files; conflicts are common. It’s impossible to tell by looking at a single Sass file what already exists in that global space; however, with modular imports, nothing is made global unless I explicitly request it. The @use directive will be visible at the top of any importing file, giving me a complete list of available APIs and the power to namespace each however I see fit.

현재 Sass 가져오기(import) 시스템에서는 변수(variables), 믹스 인(mixins) 및 함수(functions)가 모든 파일에서 전역 namespace 에 있습니다. 충돌은 흔합니다. 하나의 Sass 파일을보고 글로벌 공간에 이미 존재하는 것을 보고서 말하는 것은 불가능합니다. 그러나 모듈화 된 가져오기(modular import)를 사용하면 명시적으로 요청하지 않으면 전역 변수가 만들어지지 않습니다. `@use` 지시어는 모든 가져오기 파일의 맨 위에 표시되며 사용 가능한 API의 전체 목록과 네임 스페이스의 권한을 제공합니다.

>If you `@use 'example/grids' as 'grid'` at the top of a file, and the example/grids.scss file contains a `span()` mixin and a `gutter()` function, then they become available in your file as `grid.span()` and `grid.gutter()` (the `.` syntax is still under discussion). The same will be possible with variables, so a `$columns` variable would be available to as `$grid.columns`.

파일의 맨 위에 `@use 'example/grids' as 'grid'` 로 사용하고 example/grids.scss 파일에 `span()` mixin 및 `gutter()` 함수가 포함되어 있으면 파일에서 그리드로 사용할 수있게됩니다 `grid.span()` 및 `grid.gutter()` (구문은 아직 논의 중입니다). 같은 변수가 가능하므로 `$columns` 변수는 `$grid.columns`로 사용할 수 있습니다.

```scss
// example/grids.scss
@mixin span(…) { … }
@function gutter(…) { … }
$columns: 12;

// my-file.scss
@use 'example/grids' as 'grid';

.column {
  @include grid.span(5 of $grid.columns);
  margin-bottom: grid.gutter();
}
```

>Sass will default to using the filename as a prefix if none is provided, and also allow you to remove the prefix when you need to. It’s still not clear if prefixing will work with placeholder selectors.

Sass는 아무 것도 제공되지 않으면 기본적으로 파일 이름을 접두어로 사용하고, 필요할 때 접두사를 제거 할 수 있습니다. 접두사가 자리 표시자(placeholder) 선택자와 함께 작동하는지 여부는 아직 명확하지 않습니다.

>In addition to using a file with or without a given prefix, it might be possible to use an entire file as a mixin, so you can apply the code of that file anywhere you want—even in a nested context. The syntax is still under consideration, but it would make the entire CSS contents (that are not wrapped in a mixin) available to you as a single mixin.

주어진 접두어가 있거나없는 파일을 사용하는 것 외에도, 전체 파일을 믹스인`mixin`으로 사용하는 것이 가능할 수 있으므로 원하는 위치에 해당 파일의 코드를 적용 할 수 있습니다(중첩된 컨텍스트에서도). 문법은 여전히 고려 중입니다만, 믹스인으로 묶이지 않은 전체 CSS 내용을 단일 믹스로 사용할 수 있습니다.

### Encapsulation

>Modular imports will also give developers—especially library authors—more power over their public API. Currently, when you load a Sass library such as Susy, you gain access to pages and pages of undocumented functions that you’ll never use. I’ve done my best to hide those functions behind long names like `_susy-valid-column-math`, but they still clutter the global namespace unnecessarily. With encapsulation, you’ll have control over which mixins, functions, variables, and (possibly) placeholders should be made public. Adding `-` or `_` to the start of a name will define it as private.

Modular imports을 통해 개발자, 특히 도서관 저자가 공개 API에 비해 더 많은 힘을 갖게됩니다. 현재 Susy와 같은 Sass 라이브러리를로드하면 결코 사용하지 않을 문서화되지 않은 기능의 페이지와 페이지에 액세스 할 수 있습니다. `_susy-valid-column-math`와 같은 긴 이름 뒤에있는 함수를 숨기기 위해 최선을 다했지만 여전히 불필요하게 전역 네임 스페이스를 혼란스럽게합니다. 캡슐화를 사용하면 어떤 mixins, 함수, 변수 및 (가능하게) 플레이스 홀더를 공개해야 할지를 제어 할 수 있습니다. 이름의 시작 부분에 `-` 또는 `_`를 추가하면 개인으로 정의됩니다.

>There is also talk of a `@forward` directive that would allow authors to pass the API from one module along as part of another. If you wanted to build a Susy flexbox extension, for example, you could tell your extension to forward the Susy API along to your users.

저자가 한 모듈에서 다른 모듈의 일부로 API를 전달할 수있게 해주는 `@forward` 지시어에 대한 이야기도 있습니다. 예를 들어 Susy flexbox 확장 프로그램을 빌드하려면 Susy API를 사용자에게 전달하도록 확장 프로그램에 지시 할 수 있습니다.

>All of this, of course, is still in the works, and likely to change before it becomes available later in the year. I can’t wait to see how it turns out—in what ways it changes Sass architecture, and helps the Sass ecosystem.

물론 이 모든 것은 여전히 작동 중이며 나중에 연말에 출시되기 전에 변경 될 가능성이 있습니다. 어떻게 그것이 Sass 아키텍처를 변화시키고 Sass 생태계를 돕는 지 알아내는 것을 기다릴 수는 없습니다.

## Wrapping Things Up

>We’ve taken a fairly in-depth look at architecture for your Sass projects. We started off by discussing @import, and seeing how you can use it to split your project code into small logical units and organizing it across multiple files, partials and folders. This forms the basis of any projects architecture. We then moved on to discuss a whole range of architecture options; which you choose will depend on your own projects and preferences. Finally we looked at future options for modular imports that should be in Sass 4.

우리는 귀하의 Sass 프로젝트를위한 아키텍처에 대해 상당히 심도있게 살펴 보았습니다. 먼저 `@import`에 대해 논의하고, 프로젝트 코드를 작은 논리 단위로 분할하고 여러 파일, 부분 및 폴더에 구성하는 방법을 살펴 보았습니다. 이것은 모든 프로젝트 아키텍처의 기초를 형성합니다. 그런 다음 전체 아키텍처 옵션에 대해 논의했습니다. 당신이 선택한 것은 자신의 프로젝트와 선호도에 달려 있습니다. 마지막으로 우리는 Sass4에 있을 예정인 modular import에 대한 향후 옵션을 살펴 보았습니다.