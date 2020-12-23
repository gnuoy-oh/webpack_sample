# 📖 Sass: Directory Structures That Help You Maintain Your Code

[원문 보러가기](http://vanseodesign.com/css/sass-directory-structures/)

> As projects grows larger, the need to modularize directory and file structure increases. This is particularly true if you want to create code that can be used in other projects, in components and patterns across one or more projects, or in templates you share with others.

프로젝트가 커질수록 디렉토리 및 파일 구조를 모듈화해야합니다. 특히 다른 프로젝트, 하나 이상의 프로젝트에서 구성 요소 및 패턴 또는 다른 사람들과 공유하는 템플릿에서 사용할 수있는 코드를 만들려는 경우에 특히 그렇습니다.

>Last week I talked about the @import directive and how you could use it to create a more maintainable file and folder structure. I showed you one simple structure I learned and I promised to show you some other structures I’ve come across.
>
>I have a few to share and I’ll talk about some of the commonalities between them to help you choose one or develop a structure that works for you.

지난 주에 [@import 지시어와 더 유지 보수가 쉬운 파일 및 폴더 구조를 만드는 방법](https://vanseodesign.com/css/sass-the-import-directive/)에 대해 이야기했습니다. 내가 배운 하나의 간단한 구조를 보여 주었고 나는 다른 구조를 보여 주겠다고 약속했습니다.

공유 할 수있는 몇 가지가 있습니다. 그 중 하나를 선택하거나 당신을 위해 적합한 구조를 개발하는 데 도움이되는 몇 가지 공통점에 대해 이야기하겠습니다.

## Simple Structure

>I hope you don’t mind if I start with the simple directory structure I mentioned last week. Here it is as a reminder.

지난 주 언급 한 간단한 디렉토리 구조로 시작하면 신경 쓰지 않기를 바랍니다. 여기는 상기시켜주는 것입니다.

```scss
modules/
_color.scss
_typography.scss
partials/
_base.scss
_navigation.scss
vendor/
_ico-moon.scss
main.scss
```

>The vendor folder holds 3rd party code. The partials folder is for code you want to include and compile. The modules folder is for code you want to include, but don’t want to compile.
>
>Note that this structure allows you to distinguish between your code and 3rd party code and it allows you to distinguish between code you want to compile and code you don’t want to compile. That’s what this organization does.
>
>The names of the files and folders can be changed to whatever you want. The key is this structure allows you to keep your code separate from 3rd party code and it allows you to separate your code between that which should be compiled into CSS and that which shouldn’t be compiled.

공급 업체 폴더에는 제 3 자 코드가 있습니다. partials 폴더는 포함하고 컴파일하려는 코드 용입니다. modules 폴더는 포함시키려는 코드이지만 컴파일하고 싶지는 않습니다.

이 구조를 사용하면 코드와 타사 코드를 구별 할 수 있으며 컴파일하려는 코드와 컴파일하지 않을 코드를 구별 할 수 있습니다. 이것이 바로이 조직이하는 일입니다.

파일과 폴더의 이름은 원하는대로 변경할 수 있습니다. 핵심은이 구조를 사용하면 코드를 제 3 자 코드와 별도로 유지할 수 있으며 CSS로 컴파일해야하는 코드와 컴파일해서는 안되는 코드 사이에서 코드를 분리 할 수 있습니다.

## The 7–1 Pattern

> Another structure I came across is the 7–1 pattern from Hugo Giraudel. Here’s how you might set up a directory along with some examples of files that would be in each folder.

내가 만난 또 다른 구조는 휴고 지라델 (Hugo Giraudel)의 7-1 패턴입니다. 다음은 각 폴더에 포함될 파일의 예와 함께 디렉토리를 설정하는 방법입니다.

```scss
base/
  _reset.scss
  _typography.scss
  _color.scss
components/
  _buttons.scss
  _navigation.scss
  _gallery.scss
layout/
  _header.scss
  _grid.scss
  _sidebar.scss
pages/
  _home.scss
  _about.scss
  _contact.scss
themes/
  _theme.scss
  _admin.scss
helpers/ (or utils/)
  _variables.scss
  _functions.scss
  _mixins.scss
vendors/
  _bootstrap.scss
  _jquery-ui.scss
main.scss
```

>The base folder holds boilerplate content. It holds the styles every page of your site should receive.
>
>The components folder holds all your micro layout files. Your styles for buttons and navigation and similar page components.
>
>Your macro layout files go in the layouts folder. Styles for major sections of the layout like a header or footer and styles for a grid system would belong here.
>
>If you have styles specific to individual pages on your site, you can place them in the pages folder. For example it’s not uncommon for the home page of your site to require page specific styles that no other page receives.
>
>The themes folder holds files that create project specific themes. For example one section of your site might use a color scheme with primary colors, while another section builds a color scheme based on neutrals and earth tones.
>
>The helpers or utils folder holds Sass tools, helper files, variables, and config files. These files won’t be compiled.
>
>Finally the vendors folder holds 3rd party code and the main.scss file uses @import statements to include the other files.
>
>Here are some additional resources for this pattern

기본 폴더에는 상용구 콘텐츠가 저장됩니다. 사이트의 모든 페이지에서 수신해야하는 스타일을 유지합니다.

구성 요소 폴더에는 모든 마이크로 레이아웃 파일이 들어 있습니다. 버튼, 탐색 및 유사한 페이지 구성 요소에 대한 스타일.

매크로 레이아웃 파일은 레이아웃 폴더에 있습니다. 머리글 또는 바닥 글과 같은 레이아웃의 주요 섹션 스타일과 그리드 시스템의 스타일이 여기에 속합니다.

사이트의 개별 페이지와 관련된 스타일이있는 경우 페이지 폴더에 배치 할 수 있습니다. 예를 들어, 사이트의 홈 페이지가 다른 페이지가 수신하지 않는 페이지 별 스타일을 요구하는 경우는 드뭅니다.

테마 폴더에는 프로젝트 관련 테마를 만드는 파일이 있습니다. 예를 들어, 사이트의 한 섹션은 기본 색상이있는 색상 체계를 사용하는 반면, 다른 섹션은 중립 및 지구 음색을 기반으로하는 색상 체계를 구성합니다.

헬퍼 또는 utils 폴더에는 Sass 도구, 도우미 파일, 변수 및 구성 파일이 있습니다. 이러한 파일은 컴파일되지 않습니다.

마지막으로 vendors 폴더에는 제 3 자 코드가 들어 있고 main.scss 파일에는 @import 문을 사용하여 다른 파일을 포함합니다.

이 패턴을위한 몇 가지 추가 리소스는 다음과 같습니다.

* [The 7–1 pattern](https://sass-guidelin.es/#the-7-1-pattern)
* [Aesthetic Sass 1: Architecture and Style Organization](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)

## SMACSS/BEM Architecture

>A number of people have written about setting up directory structures based on either a SMACSS or BEM architecture. I want to present four different, albeit similar, structures that build on each other and also incorporate some ideas from the 7–1 pattern.
>
>Ryan Burgess leveraged some ideas from SMACSS when setting up this simple structure for Evernote. They used four folders, Base, Layout, Modules, and Themes

많은 사람들이 SMACSS 또는 BEM 아키텍처를 기반으로 디렉토리 구조를 설정하는 방법을 썼습니다. 저는 서로 다른 4 개의 다른 구조를 제시하고 싶지만 7-1 패턴의 아이디어를 통합하고 싶습니다.

Ryan Burgess는 Evernote의 간단한 구조를 설정할 때 SMACSS의 아이디어를 활용했습니다. 그들은 네 개의 폴더, 기본, 레이아웃, 모듈 및 테마를 사용했습니다.

>* Base holds vendor code, helpers, mixins, variables, and general selector styles (body, h1, p, a, etc.).
>* Layout holds macro layout styles.
>* Modules holds micro layouts styles.
>* Themes holds any type of page specific styles.

* Base에는 공급 업체 코드, 헬퍼, 믹스 인, 변수 및 일반 선택기 스타일 (body, h1, p, a 등)이 있습니다.
* 레이아웃은 매크로 레이아웃 스타일을 유지합니다.
* 모듈에는 마이크로 레이아웃 스타일이 있습니다.
* 테마는 모든 유형의 페이지 특정 스타일을 유지합니다.

> Notice the distinction between micro and macro layout as well as the distinction for page specific styles and a general catchall for files with non-compiled code and general styles.
> 
> Tim Hartmann and Bram Smulders shared similar four folder structures.

마이크로 및 매크로 레이아웃과 페이지 별 스타일의 구분 및 컴파일되지 않은 코드 및 일반 스타일이있는 파일의 일반 catchall을 구분하십시오.

Tim Hartmann과 Bram Smulders는 비슷한 네 가지 폴더 구조를 공유했습니다.

>* Base holds vendor code, helpers, mixins, variables, and general selector styles (body, h1, p, a, etc.).
>* Layout holds macro layout styles.
>* Modules holds micro layout styles.
>* State holds state specific code, how buttons look on hover and similar.

* Base에는 공급 업체 코드, 헬퍼, 믹스 인, 변수 및 일반 선택자 스타일 (body, h1, p, a 등)이 있습니다.
* 레이아웃은 매크로 레이아웃 스타일을 유지합니다.
* 모듈에는 마이크로 레이아웃 스타일이 있습니다.
* 상태에는 상태 별 코드, 마우스를 올리면 모양이 어떻게 보이는지 등이 있습니다.

> Again there’s the distinction between macro and micro layout styles as well as a folder that holds non-compiled code and general styles. The difference here is a State folder for state styles instead of a Themes folder for page specific styles.
> 
> Matt Staffer shared the organization his company used to help them keep a SMACSS-inspired structure.

매크로와 마이크로 레이아웃 스타일과 컴파일되지 않은 코드와 일반 스타일을 저장하는 폴더 사이에는 구별이 있습니다. 여기의 차이점은 페이지 특정 스타일의 테마 폴더 대신 상태 스타일 용 상태 폴더입니다.

Matt Staffer는 SMACSS에서 영감을 얻은 구조를 유지하는 데 사용 된 조직을 공유했습니다.

>* _base.scss is for vendor code and styles on base elements (html, body, ul, p, etc.).
>* _layout.scss is for macro layout styles.
>* _modules.scss is for micro layout styles.
>* _other.scss is for whatever doesn’t fit in first three.
>* _shame.scss is for code you feel ashamed of and plan to improve.

* _base.scss는 기본 요소 (html, body, ul, p 등)에 대한 공급 업체 코드 및 스타일을 나타냅니다.
* _layout.scss는 매크로 레이아웃 스타일 용입니다.
* _modules.scss는 마이크로 레이아웃 스타일 용입니다.
* _other.scss는 처음 세 개에 맞지 않는 것입니다.
* _shame.scss는 부끄러워하고 개선 할 계획 인 코드 용입니다.

> It’s similar to the previous two structures, though note that these are files and not folders. The _other.scss file is the catchall and there’s a _shame.scss file to nag you into improving the code it contains.
> 
> One last SMACSS based organization comes from Johannes Dreller. It adds another directory to the ones we’ve seen so far. Here’s Johannes’ structure along with some files each might hold.

앞의 두 구조와 비슷하지만 폴더가 아니라 파일입니다. _other.scss 파일은 catchall이며 _shame.scss 파일에 포함 된 코드를 향상시킬 수 있습니다.

마지막 SMACSS 기반 조직은 Johannes Dreller에서 제공합니다. 우리가 지금까지 본 것들에 다른 디렉토리를 추가합니다. 여기에 요하네스 구조와 각각의 파일이 있습니다.

```scss
vendor/
  _bootstrap.scss
  _jquery-ui.scss
base/
  _functions.scss
  _mixins.scss
  _variables.scss
  _base.scss
layout/
  _grid.scss
  _header.scss
  _sidebar.scss
module/
  _navigations.scss
  _buttons.scss
  _forms.scss
state/
  _state.scss
hacks/
  _shame.scss
main.scss
```

> The addition is the vendor folder, which is used to hold 3rd party content. The layout and module folders still distinguish macro and micro layout styles. State changes go in the state folder. Non-compiled code and general styles go in the base folder. The hacks folder takes the shame file and there’s a main.scss to @import all the necessary files.

추가 기능은 제 3 자 콘텐츠를 저장하는 데 사용되는 공급 업체 폴더입니다. 레이아웃 및 모듈 폴더는 여전히 매크로 레이아웃과 미세 레이아웃 스타일을 구별합니다. 상태 변경 내용은 상태 폴더에 저장됩니다. 컴파일되지 않은 코드와 일반 스타일은 기본 폴더에 있습니다. 해킹 폴더는 부끄러운 파일을 가져오고 모든 필요한 파일을 @import하기 위해 main.scss가 있습니다.

## Others

> Matthieu Larcher & Fabien Zibi present DoCSSa’s four folder organization.

Matthieu Larcher & Fabien Zibi는 DoCSSa의 네 폴더 조직을 제시합니다.

```scss
base/
_base.scss
_config.scss
project/
utils/
components/
_components.scss
button/
tabs/
specifics/
_specifics.scss
modal.scss
navigation.scss
vendor/
_vendor.scss
```


> This structure is similar to the others I’ve mentioned. The base folder holds boilerplate styles in the project folder and Sass tools in the utils folder. The files directly in the base folder are for code needed in both subfolders.
>
> Components is for micro layout and specifics is a catchall for most everything else. In both cases the files directly in the folder are for those used in the subfolders. Finally there’s a vendor folder for 3rd party code.
>
>The last structure I’ll mention comes from Matthew Anderson and it adds some new ideas for organizing the directory.

이 구조는 내가 언급 한 다른 구조와 유사합니다. 기본 폴더에는 프로젝트 폴더의 상용구 스타일과 utils 폴더의 Sass 도구가 있습니다. 기본 폴더의 파일은 두 하위 폴더 모두에 필요한 코드 용입니다.

구성 요소는 마이크로 레이아웃을위한 것이고 세부 사항은 대부분의 모든 것을위한 포괄적 인 내용입니다. 두 경우 모두 폴더의 파일은 하위 폴더에서 사용되는 파일입니다. 마지막으로 타사 코드 용 공급 업체 폴더가 있습니다.

필자가 언급 할 마지막 구조는 매튜 앤더슨 (Matthew Anderson)에서 왔으며 디렉토리 구성을위한 새로운 아이디어를 추가한다.

```scss
framework/
modules/
vendor/
sections/
_bootstrap.scss
_section.scss
```

>First the familiar. The vendor folder holds 3rd part code, modules holds partials that contain reusable UI patterns and components. The framework folder holds all project wide and ideally project agnostic code.
>
>The sections folder is similar to the shame or hacks folder. It’s not necessarily code you’re ashamed of, but it’s code you’ve yet to optimize or refactor or generally improve.
>
>The two files are new. _bootstrap.scss isn’t from Twitter’s Bootstrap. It’s a file that bootstraps the necessary files through @import statements.
>
>_section.scss represents any file will become a compiled CSS stylesheet. These files will import _bootstrap.scss as well as any other project files necessary.

먼저 익숙한. 공급 업체 폴더에는 3 번째 부분 코드가 저장되고 모듈에는 재사용 가능한 UI 패턴과 구성 요소가 포함 된 부분이 저장됩니다. 프레임 워크 폴더는 모든 프로젝트를 포괄하며 이상적으로는 프로젝트에 독립적 인 코드를 포함합니다.

sections 폴더는 수치 또는 해킹 폴더와 유사합니다. 부끄러워하는 코드 일 필요는 없지만 최적화 또는 리 팩토링 또는 전반적으로 개선하지 않은 코드입니다.

두 파일은 새로운 파일입니다. _bootstrap.scss은 트위터의 부트 스트랩에서 가져온 것이 아닙니다. @import 문을 통해 필요한 파일을 부트 스트랩하는 파일입니다.

_section.scss는 컴파일 된 CSS 스타일 시트가 될 모든 파일을 나타냅니다. 이 파일은 _bootstrap.scss와 필요한 다른 프로젝트 파일을 가져옵니다.

## Closing Thoughts

>I hope seeing examples of how others organize their Sass files and folders helps you understand some of the ways people modularize their code to keep it organized and maintainable.
>
>What I hope you to take away from the structures I’ve mentioned is the idea that there’s no single way to organize your stylesheets and directories, though there are common themes in the organization others have come up with.

다른 사람들이 자신의 Sass 파일과 폴더를 구성하는 방법에 대한 예제를 통해 사람들이 코드를 모듈화하여 체계적으로 유지 관리 할 수있는 방법을 이해하는 데 도움이되기를 바랍니다.

내가 언급 한 구조에서 벗어나기를 희망하는 이유는 스타일 시트와 디렉토리를 구성하는 방법이 하나도 없다는 것입니다.하지만 다른 사람들이 공통적으로 가지고있는 주제가 있습니다.

>* Micro and macro layout styles
>* Boilerplate (global site) styles
>* Tools and utility files
>* Page and site theme specific styles
>* 3rd party code
>* Shame files

* 마이크로 및 매크로 레이아웃 스타일
* 상용구 (글로벌 사이트) 스타일
* 도구 및 유틸리티 파일
* 페이지 및 사이트 테마의 특정 스타일
* 제 3자 코드
* 셰임 파일

>These are some of the common things that others think worth keeping separate. You might decide you don’t need to keep macro and micro layout styles separate and prefer to keep them together. You might not use 3rd part code on a project. See these commonalities as suggestions and not anything you absolutely have to use.
>
>You can organize your files and folders however you think best. Just keep in mind that you should organize them in some meaningful way that helps you find and isolate your styles and code in a way that makes sense to you.
>
>Next week I want to talk about another Sass directive, @extend. It allows a selector to inherit styles from other selectors so you can write DRYer code.

이들은 다른 사람들이 별개로 생각할 가치가 있다고 생각하는 일반적인 것들입니다. 매크로와 마이크로 레이아웃 스타일을 별도로 유지할 필요가 없으며 함께 배치하는 것이 더 좋을 수도 있습니다. 프로젝트에서 3 부 코드를 사용하지 못할 수도 있습니다. 이러한 공통점을 제안으로보고 절대적으로 사용해야하는 것은 아닙니다.

가장 잘 생각하는대로 파일과 폴더를 구성 할 수 있습니다. 의미있는 방식으로 구성하여 스타일과 코드를 찾고 이해하는 데 도움이된다는 것을 명심하십시오.

다음 주에는 또 다른 Sass 지시어 인 @extend에 대해 이야기하고 싶습니다. 선택기는 다른 선택기의 스타일을 상속 할 수 있으므로 DRYer 코드를 작성할 수 있습니다.