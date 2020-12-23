# 📖 Sass: Architecture

[원문 보러 가기](https://sass-guidelin.es/#architecture)
- [📖 Sass: Architecture](#%F0%9F%93%96-sass-architecture)
  - [Components](#components)
    - [Component Structure](#component-structure)
  - [The 7-1 Pattern](#the-7-1-pattern)
    - [BASE FOLDER](#base-folder)
    - [LAYOUT FOLDER](#layout-folder)
    - [COMPONENTS FOLDER](#components-folder)
    - [PAGES FOLDER](#pages-folder)
    - [THEMES FOLDER](#themes-folder)
    - [ABSTRACTS FOLDER](#abstracts-folder)
    - [VENDORS FOLDER](#vendors-folder)
    - [MAIN FILE](#main-file)
  - [About Globbing](#about-globbing)
  - [Shame File](#shame-file)

>Architecting a CSS project is probably one of the most difficult things you will have to do in a project’s life. Keeping the architecture consistent and meaningful is even harder.

CSS 프로젝트를 설계하는 것은 아마도 프로젝트에서 해야 할 가장 어려운 일 중 하나 일 것입니다. 일관되고 의미있는 아키텍처를 유지하는 것은 더욱 어렵습니다.

>Fortunately, one of the main benefits of using a CSS preprocessor is having the ability to split the codebase over several files without impacting performance (like the @import CSS directive would do). Thanks to Sass’s overload of the @import directive, it is perfectly safe (and actually recommended) to use as many files as necessary in development, all compiled into a single stylesheet when going to production.

다행히도 CSS 전처리기를 사용하는 주된 이점 중 하나는 @import CSS 지시문처럼 성능에 영향을 미치지 않으면 서 여러 파일에 코드베이스를 분할 할 수 있다는 것입니다. Sass가 @import 지시어를 과부하 한 덕분에 개발시 필요한만큼 많은 파일을 사용하는 것이 안전하고 (실제로 권장 됨) 모든 제품을 제작할 때 단일 스타일 시트로 컴파일됩니다.

>On top of that, I cannot stress enough the need for folders, even on small scale projects. At home, you don’t drop every sheet of paper into the same box. You use folders; one for the house/flat, one for the bank, one for bills, and so on. There is no reason to do otherwise when structuring a CSS project. Split the codebase into meaningful separated folders so it is easy to find stuff later when you have to come back to the code.

그뿐 아니라 소규모 프로젝트에서도 폴더가 필요하다고 강조합니다. 가정에서는 모든 용지를 같은 상자에 떨어 뜨리지 않습니다. 당신은 폴더를 사용합니다; 하나는 집 / 아파트, 하나는 은행, 하나는 청구서 등입니다. CSS 프로젝트를 구성 할 때 달리 할 이유가 없습니다. 의미있는 분리 된 폴더로 코드베이스를 나눠서 나중에 코드로 돌아와야 할 때 나중에 쉽게 찾을 수 있습니다.

>There are a lot of popular architectures for CSS projects: OOCSS, Atomic Design, Bootstrap-like, Foundation-like… They all have their merits, pros and cons.

OOCSS, Atomic Design, Bootstrap-like, [Foundation](https://foundation.zurb.com/)-like ... CSS 프로젝트를위한 많은 [대중적인 아키텍처](https://www.sitepoint.com/look-different-sass-architectures/)가 있습니다 ... 그들은 모두 장점, 장단점을 갖고 있습니다.

>I, myself, use an approach that happens to be quite similar to SMACSS from Jonathan Snook, which focuses on keeping things simple and obvious.

나 스스로 [Jonathan Snook](https://snook.ca/ )의 SMACSS와 매우 비슷한 방식을 사용한다. Jonathan Snook은 일을 단순하고 분명하게 유지하는 데 중점을 둔다.

>I have learnt that architecture is most of the time very specific to the project. Feel free to discard completely or adapt the proposed solution so that you deal with a system that suits your needs.

나는 건축이 프로젝트에 매우 특정한 시간이라는 것을 배웠다. 제안 된 솔루션을 완전히 폐기하거나 채택하여 사용자의 필요에 맞는 시스템을 처리하십시오.

## Components

>There is a major difference between making it work, and making it good. Again, CSS is quite a messy language [citation needed]. The less CSS we have, the merrier. We don’t want to deal with megabytes of CSS code. To keep stylesheets short and efficient—and this will not be any surprise to you—it is usually a good idea to think of an interface as a collection of components.

작동시키는것과 제작하는것 사이에는 큰 차이가 있습니다. 다시 말하지만, CSS는 지저분한 언어입니다. 우리가 가진 CSS가 적을수록 좋습니다. 우리는 메가 바이트의 CSS 코드를 다루고 싶지 않습니다. 스타일 시트를 짧고 효율적으로 유지하려면 이 작업이 놀라운 일은 아닙니다. 일반적으로 인터페이스를 구성 요소의 모음으로 생각하는 것이 좋습니다.

>Components can be anything, as long as they:

구성 요소는 다음과 같은 경우 아무거나 될 수 있습니다.

>* do one thing and one thing only;
>* are re-usable and re-used across the project;
>* are independent.

* 한 가지만하고 한 가지만하십시오.
* 프로젝트 전체에서 재사용 및 재사용 할 수 있습니다.
* 독립적이다

>For instance, a search form should be treated as a component. It should be reusable, at different positions, on different pages, in various situations. It should not depend on its position in the DOM (footer, sidebar, main content…).

예를 들어, 검색 양식은 구성 요소로 취급되어야합니다. 다양한 다른 위치에서, 다른 페이지에서, 다양한 상황에서 재사용 가능해야합니다. 그것은 DOM에서의 위치 (바닥 글, 사이드 바, 주요 내용 ...)에 의존해서는 안됩니다.

>Most of any interface can be thought of as little components and I highly recommend you stick to this paradigm. This will not only shorten the amount of CSS needed for the whole project, but also happens to be much easier to maintain than a chaotic mess where everything is flustered.

대부분의 인터페이스는 거의 구성 요소로 생각될 수 있으며 이 패러다임에 충실하는 것을 강력히 권고합니다. 이렇게하면 전체 프로젝트에 필요한 CSS의 양을 줄일 수있을뿐만 아니라 혼란스러웠던 모든것이 혼돈스럽고 난잡해지기보다 유지보수가 수월해지게 합니다.

### Component Structure

>Ideally, components should exist in their own Sass partial (within the `components/` folder, as is described in the 7-1 pattern), such as `components/_button.scss.` The styles described in each component file should only be concerned with:

이상적으로, 컴포넌트는 컴포넌트 `components/_button.scss`와 같이 자신의 Sass partial (`components/` 폴더 내, [7-1 패턴](https://sass-guidelin.es/#the-7-1-pattern)으로 설명 됨)에 존재해야합니다. 각 구성 요소 파일에 설명 된 스타일은 다음과 관련이 있어야합니다.

>* the style of the component itself;
>* the style of the component’s variants, modifiers, and/or states;
>* the styles of the component’s descendents (i.e. children), if necessary.

* 컴포넌트 자체의 스타일.
* 컴포넌트의 변형, 수식 자, 및 / 또는 상태의 스타일.
* 필요에 따라서, 컴포넌트의 자손 (i.e. children)의 스타일

>If you want your components to be able to be themed externally (e.g. from a theme inside the `themes/` folder), limit the declarations to only structural styles, such as dimensions (width/height), padding, margins, alignment, etc. Exclude styles such as colors, shadows, font rules, background rules, etc.

구성 요소를 외부에서 테마로 지정할 수있게하려면 (예 : `themes/` 폴더 내부의 테마) 치수(width/height), padding, margins, alignment 등과 같은 **구조 스타일로만 선언을 제한**하십시오. colors, shadows, font rules, background rules 등과 같은 스타일은 사용을 제한하십시오.

>A component partial can include component-specific variables, placeholders, and even mixins and functions. Keep in mind, though, that you should avoid referencing (i.e. @import-ing) component files from other component files, as this can make your project’s dependency graph an unmaintainable tangled mess.

구성요소 부분화(partial)는 구성요소별 변수(variables), placeholders, 믹스인(mixins) 및 기능(functions)까지 포함될 수 있습니다. 하지만 다른 구성 요소 파일에서 구성 요소 파일을 참조 (즉, `@import` -ing)하지 않아야하므로 프로젝트의 종속성 그래프를 유지할 수 없는 엉망으로 만들 수 있습니다.

>Here is an example of a button component partial:

다음은 버튼 구성 요소 부분의 예입니다.:

```scss
// Button-specific variables
$button-color: $secondary-color;

// … include any button-specific:
// - mixins
// - placeholders
// - functions

/**
 * Buttons
 */
.button {
  @include vertical-rhythm;
  display: block;
  padding: 1rem;
  color: $button-color;
  // … etc.

  /**
   * Inlined buttons on large screens
   */
  @include respond-to('medium') {
    display: inline-block;
  }
}

/**
 * Icons within buttons
 */
.button > svg {
  fill: currentcolor;
  // … etc.
}

/**
 * Inline button
 */
.button--inline {
  display: inline-block;
}
```

## The 7-1 Pattern

>Back to architecture, shall we? I usually go with what I call the 7-1 pattern: 7 folders, 1 file. Basically, you have all your partials stuffed into 7 different folders, and a single file at the root level (usually named main.scss) which imports them all to be compiled into a CSS stylesheet.

설계로 돌아가서, 나는 보통 7-1 패턴이라고 부르는 것을 사용합니다 : 폴더 7 개, 파일 1 개. 기본적으로, 7 개의 다른 폴더에 모든 파트를 채우고, 루트 레벨 (일반적으로 main.scss라고 함)에있는 하나의 파일을 모두 가져와 CSS 스타일 시트로 컴파일합니다.

* base/
* components/
* layout/
* pages/
* themes/
* abstracts/
* vendors/

And of course:

* main.scss

>If you are looking to use the 7-1 pattern, there is a boilerplate ready on GitHub. It should contain everything you need to get started with this architecture.

7-1 패턴을 사용하려는 경우 [GitHub](https://github.com/HugoGiraudel/sass-boilerplate)에 상용구가 준비되어 있습니다. 이 아키텍처를 시작하는 데 필요한 모든 것이 포함되어 있어야합니다.

>Ideally, we can come up with something like this:

이상적으로, 우리는 다음과 같은 것을 생각해 낼 수 있습니다 :

```md
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

> Files follow the same naming conventions described above: they are hyphen-delimited.

파일은 위에 설명 된 것과 동일한 명명 규칙을 따릅니다. 하이픈으로 구분됩니다.

### BASE FOLDER

>The `base/` folder holds what we might call the boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet defining some standard styles for commonly used HTML elements (that I like to call `_base.scss`).

`base/` 폴더에는 프로젝트의 상용구 코드라고 할 수있는 것이 들어 있습니다. 거기에서 리셋 파일, 일부 활자체 규칙 및 일반적으로 사용되는 HTML 요소에 대한 표준 스타일을 정의하는 스타일 시트 (`_base.scss`를 호출하려는 경우)를 찾을 수 있습니다.

* _base.scss
* _reset.scss
* _typography.scss

>If your project uses a lot of CSS animations, you might consider adding an `\_animations.scss` file in there containing the `@keyframes` definitions of all your animations. If you only use a them sporadically, let them live along the selectors that use them.

프로젝트에서 많은 CSS 애니메이션을 사용하는 경우 모든 애니메이션의 `@keyframes` 정의를 포함하는 `\ _animations.scss` 파일을 추가하는 것이 좋습니다. 그것들을 산발적으로 만 사용한다면, 그것들을 사용하는 셀렉터를 따라가게 하십시오.

### LAYOUT FOLDER

>The `layout/` folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms.

`layout/` 폴더에는 사이트 또는 응용 프로그램 레이아웃에 참여하는 모든 것이 포함되어 있습니다. 이 폴더는 사이트의 주요 부분 (header, footer, navigation, sidebar…), 그리드 시스템 또는 모든 양식의 CSS 스타일에 대한 스타일 시트를 가질 수 있습니다.

* _grid.scss
* _header.scss
* _footer.scss
* _sidebar.scss
* _forms.scss
* _navigation.scss

>The `layout/` folder might also be called `partials/`, depending on what you prefer.

`layout/` 폴더는 당신이 선호하는 것에 따라 `partials/`라고 불릴 수도 있습니다.

### COMPONENTS FOLDER

>For smaller components, there is the components/ folder. While layout/ is macro (defining the global wireframe), components/ is more focused on widgets. It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. There are usually a lot of files in components/ since the whole site/application should be mostly composed of tiny modules.

작은 구성 요소의 경우 `components/` 폴더가 있습니다. `layout/` 매크로 (전역 와이어 프레임 정의) 인 반면, `components/`는 위젯에 더 초점을 맞추고 있습니다. 그것은 슬라이더, 로더, 위젯과 같은 모든 종류의 특정 모듈을 기본적으로 포함하고 있습니다. 전체 사이트 / 애플리케이션은 대부분 작은 모듈로 구성되어야하기 때문에 일반적으로 `components/`에는 많은 파일이 있습니다.

* _media.scss
* _carousel.scss
* _thumbnails.scss

> The `components/` folder might also be called `modules/`, depending on what you prefer.

`components/` 폴더는 사용자가 선호하는 것에 따라 `modules/`라고 부를 수도 있습니다.

### PAGES FOLDER

>If you have page-specific styles, it is better to put them in a `pages/` folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a `_home.scss` file in `pages/`.

페이지 별 스타일이있는 경우 `pages/` 폴더, 페이지의 이름을 따서 명명 된 파일에 배치하는 것이 좋습니다. 예를 들어 홈 페이지에 매우 특정한 스타일을 사용하는 것은 드문 일이 아니며 `pages/`에 `_home.scss` 파일이 필요합니다.

>Depending on your deployment process, these files could be called on their own to avoid merging them with the others in the resulting stylesheet. It is really up to you.

배포 프로세스에 따라 이러한 파일을 불러 와서 결과 스타일 시트에서 다른 파일과 병합하지 않도록 할 수 있습니다. 그것은 당신에게 달려 있습니다.

### THEMES FOLDER

>On large sites and applications, it is not unusual to have different themes. There are certainly different ways of dealing with themes but I personally like having them all in a `themes/` folder.

대규모 사이트 및 응용 프로그램에서는 다른 테마를 사용하는 것이 일반적입니다. 테마를 다루는 방법은 분명히 다르지만 개인적으로 `themes/` 폴더에 모두 넣는 것이 좋습니다.

* _theme.scss
* _admin.scss

>This is very project-specific and is likely to be non-existent on many projects.

이것은 프로젝트마다 매우 다르게 사용될 수 있으며 대다수 프로젝트에 존재하지 않을 수 있습니다.

### ABSTRACTS FOLDER

>The `abstracts/` folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.

`abstracts/` 폴더는 프로젝트 전체에서 사용되는 모든 Sass 도구와 도우미를 수집합니다. 모든 전역 변수, 함수, 믹스 인 및 플레이스 홀더가 여기에 입력되어야합니다.

>The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers.

이 폴더의 규칙은 컴파일 할 때 CSS를 한줄(single-line)로 출력하지 않아야한다는 것입니다. 이들은 사스 헬퍼일 뿐 아무것도 아닙니다.

* _variables.scss
* _mixins.scss
* _functions.scss
* _placeholders.scss

> When working on a very large project with a lot of abstract utilities, it might be interesting to group them by topic rather than type, for instance typography (_typography.scss), theming (_theming.scss), etc. Each file contains all the related helpers: variables, functions, mixins and placeholders. Doing so can make the code easier to browse and maintain, especially when files are getting very long

추상적인 유틸리티가 많은 매우 큰 프로젝트에서 작업 할 때 유형보다 주제별로 그룹화하는 것이 흥미로울 수 있습니다. (예 : 타이포그래피 (`_typography.scss`), 테마 (`_theming.scss`) 등) 각 파일은 모든 관련 helpers를 포함하고 있습니다: 변수, 함수, 믹스 인 및 플레이스 홀더. 이렇게하면 특히 파일이 매우 길어질 때 코드가 더 쉽게 탐색하고 유지 관리 할 수 있습니다.

>The `abstracts/` folder might also be called `utilities/` or helpers/, depending on what you prefer.

`abstracts/` 폴더는 당신이 선호하는 것에 따라 `utilities/` 또는 `helpers/`라고 불릴 수도 있습니다.

### VENDORS FOLDER

>And last but not least, most projects will have a `vendors/` folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to say “Hey, this is not from me, not my code, not my responsibility”.

마지막으로, 대부분의 프로젝트에는 외부 라이브러리 및 프레임 워크의 CSS 파일(정규화, 부트 스트랩, jQueryUI, FancyCarouselSliderjQueryPowered 등 )을 포함하는 `vendors/` 폴더가 있습니다. 이 폴더를 같은 폴더에 두는 것은 "이봐, 내 코드가 아니야, 내 책임이 아니야"라고 말할 수있는 좋은 방법입니다.

* _normalize.scss
* _bootstrap.scss
* _jquery-ui.scss
* _select2.scss

> If you have to override a section of any vendor, I recommend you have an 8th folder called `vendors-extensions/` in which you may have files named exactly after the vendors they overwrite.

어떤 벤더의 섹션을 오버라이드해야한다면 `vendors-extensions/`라는 8 번째 폴더를 만드는걸 추천합니다. 벤더 확장을 덮어 쓰는 벤더의 이름을 정확히 따랐을 수 있습니다.

>For instance, `vendors-extensions/_bootstrap.scss` is a file containing all CSS rules intended to re-declare some of Bootstrap’s default CSS. This is to avoid editing the vendor files themselves, which is generally not a good idea.

예를 들어 `vendors-extensions / _bootstrap.scss`는 부트 스트랩의 기본 CSS 중 일부를 다시 선언하기위한 모든 CSS 규칙을 포함하는 파일입니다. 이는 공급 업체 파일 자체를 편집하지 않으려는 것이나, 일반적으로 좋은 방법은 아닙니다.

### MAIN FILE

>The main file (usually labelled main.scss) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but @import and comments.

주 파일 (일반적으로 `main.scss`라고 함)은 밑줄`_`로 시작하지 않는 유일한 Sass 파일이어야합니다. 이 파일은 @import와 주석 이외의 것을 포함해서는 안됩니다.

>Files should be imported according to the folder they live in, one after the other in the following order:

파일은 그들이 사는 폴더에 따라 다음 순서로 차례로 가져와야합니다.

1. abstracts/
2. vendors/
3. base/
4. layout/
5. components/
6. pages/
7. themes/

> In order to preserve readability, the main file should respect these guidelines:

가독성을 유지하기 위해 주 파일은 다음 지침을 준수해야합니다.

>* one file per @import;
>* one @import per line;
>* no new line between two imports from the same folder;
>* a new line after the last import from a folder;
>* file extensions and leading underscores omitted.

* @import 당 하나의 파일;
* 한 줄당 하나의 `@import`;
* 동일한 폴더에서 두 가지 가져 오기 사이에 새로운 줄이 없습니다.
* 폴더로부터의 마지막 임포트 이후의 새로운 라인.
* 파일 확장자 및 맨 앞의 밑줄이 생략되었습니다.

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

>There is another way of importing partials that I deem valid as well. On the bright side, it makes the file more readable. On the other hand, it makes updating it slightly more painful. Anyway, I’ll let you decide which is best, it does not matter much. For this way of doing, the main file should respect these guidelines:

부분화(partials)된 파일을 가져오는(importi) 또 다른 방법들도 유효하다고 생각합니다. 긍정적으로 봤을 때, 파일을 더 읽기 쉽게 만듭니다. 반면에, 그것은 조금 더 고통스럽게 업데이트합니다. 어쨌든, 당신이 어떤것이 최선일지 결정하도록 내버려두고, 별로 중요하지 않습니다. 이런 방식으로, 주 파일은 다음 지침을 준수해야합니다.

>* one `@import` per folder;
>* a linebreak after `@import`;
>* each file on its own line;
>* a new line after the last import from a folder;
>* file extensions and leading underscores omitted.

* 폴더 당 하나의  `@import`;
* `@import` 뒤의 줄 바꿈;
* 각 파일은 자체 행에 있습니다.
* 폴더로부터의 마지막 임포트 이후의 새로운 라인.
* 파일 확장자 및 맨 앞의 밑줄이 생략되었습니다.

```scss
@import
  'abstracts/variables',
  'abstracts/functions',
  'abstracts/mixins',
  'abstracts/placeholders';

@import
  'vendors/bootstrap',
  'vendors/jquery-ui';

@import
  'base/reset',
  'base/typography';

@import
  'layout/navigation',
  'layout/grid',
  'layout/header',
  'layout/footer',
  'layout/sidebar',
  'layout/forms';

@import
  'components/buttons',
  'components/carousel',
  'components/cover',
  'components/dropdown';

@import
  'pages/home',
  'pages/contact';

@import
  'themes/theme',
  'themes/admin';
```

## About Globbing

>In computer programming, glob patterns specify sets of filenames with wildcard characters, such as `*.scss`. To a general extent, globbing means matching a set of files based on an expression instead of a list of filenames. When applied to Sass, it means importing partials into the main file with a glob pattern rather than by listing them individually. This would lead to a main file looking like this:

컴퓨터 프로그래밍에서 glob 패턴은 와일드 카드 문자 (예 : `* .scss`)로 파일 이름 세트를 지정합니다. 일반적으로 globbing은 파일 이름 목록 대신 표현식을 기반으로 파일 세트를 일치시키는 것을 의미합니다. Sass에 적용 할 때 부분적으로 개별 파일을 나열하는 대신 glob 패턴으로 파일을 가져 오는 것을 의미합니다. 이것은 다음과 같은 주 파일로 이어질 것입니다 :

```scss
@import 'abstracts/*';
@import 'vendors/*';
@import 'base/*';
@import 'layout/*';
@import 'components/*';
@import 'pages/*';
@import 'themes/*';
```

>Sass does not support file globbing out of the box because it can be a dangerous feature as CSS is known to be order-dependant. When dynamically importing files (which usually goes in alphabetical order), one does not control the source order anymore, which can lead to hard to debug side-effects.

Sass는 CSS가 순서에 의존하는 것으로 알려진 위험한 기능 일 수 있기 때문에 상자 밖으로 파일 globbing을 지원하지 않습니다. 동적으로 파일을 가져올 때 (일반적으로 알파벳 순서로 진행됨) 소스 순서를 더 이상 제어하지 않으므로 부작용을 디버그하기가 어려울 수 있습니다.


>That being said, in a strict component-based architecture with extra care not to leak any style from one partial to the other, the order should not really matter anymore, which would allow for glob imports. This would make it easier to add or remove partials as carefully updating the main file would no longer be required.

즉, 하나의 부분에서 다른 부분으로 어떤 스타일도 누설하지 않도록 각별한주의를 기울이는 엄격한 구성 요소 기반 아키텍처에서는 순서가 더 이상 중요하지 않아 글로블 가져 오기가 가능합니다. 이렇게하면 주 파일을 신중하게 업데이트하지 않아도되므로 부분을 추가하거나 제거하는 것이 더 쉬워집니다.

>When using Ruby Sass, there is a Ruby gem called sass-globbing that enables exactly that behavior. If running on node-sass, one can rely either on Node.js, or whatever build tool they use to handle the compilation (Gulp, Grunt, etc.).

Ruby Sass를 사용할 때 sass-globbing이라는 Ruby 젬이 있습니다. node-sass에서 실행중인 경우 Node.js 또는 컴파일을 처리하는 데 사용하는 빌드 도구 (Gulp, Grunt 등)에 의존 할 수 있습니다.

## Shame File

>There is an interesting concept that has been made popular by Harry Roberts, Dave Rupert and Chris Coyier that consists of putting all the CSS declarations, hacks and things we are not proud of in a shame file. This file, dramatically titled _shame.scss, would be imported after any other file, at the very end of the stylesheet.

Harry Roberts, Dave Rupert, Chris Coyier로부터 만들어진 흥미롭고 유명한 [shame file](https://csswizardry.com/2013/04/shame-css-full-net-interview/)이라는 개념이 있습니다는 CSS 선언, hacks 및 자랑스럽지 않은 것들을 에 담는 것입니다. `_shame.scss`라는이 파일은 스타일 시트의 맨 끝에 다른 파일 다음에 가져옵니다.

