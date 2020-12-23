# 📖 OOCSS (Scalable and Maintainable CSS Architecture)

[원문 보러가기](https://www.keycdn.com/blog/oocss/)
- [📖 OOCSS (Scalable and Maintainable CSS Architecture)](#%F0%9F%93%96-oocss-scalable-and-maintainable-css-architecture)
    - [What Is OOCSS?](#what-is-oocss)
    - [What Is The “Object” in OOCSS?](#what-is-the-%E2%80%9Cobject%E2%80%9D-in-oocss)
    - [The First Rule of OOCSS: Separation of Structure and Skin](#the-first-rule-of-oocss-separation-of-structure-and-skin)
    - [The Second Rule of OOCSS: Separation of Container and Content](#the-second-rule-of-oocss-separation-of-container-and-content)
    - [The Benefits of Object Oriented CSS](#the-benefits-of-object-oriented-css)
        - [1. Speed](#1-speed)
        - [2. Scalability](#2-scalability)
        - [3. Efficiency](#3-efficiency)
        - [4. Maintainability](#4-maintainability)
        - [5. Readability - 가독성](#5-readability---%EA%B0%80%EB%8F%85%EC%84%B1)
        - [6. Relatability to Other Concepts - 다른 개념에 대한 상대성](#6-relatability-to-other-concepts---%EB%8B%A4%EB%A5%B8-%EA%B0%9C%EB%85%90%EC%97%90-%EB%8C%80%ED%95%9C-%EC%83%81%EB%8C%80%EC%84%B1)
    - [The Disadvantages of Using OOCSS](#the-disadvantages-of-using-oocss)
        - [1. Increases the Number of Classes Added to an Element](#1-increases-the-number-of-classes-added-to-an-element)
        - [2. May Be Overkill for Small Projects](#2-may-be-overkill-for-small-projects)
        - [3. Requires a Learning Curve](#3-requires-a-learning-curve)
    - [OOCSS vs SMACSS vs BEM](#oocss-vs-smacss-vs-bem)
    - [Using OOCSS with Sass](#using-oocss-with-sass)
    - [Tips for Writing Object Oriented CSS](#tips-for-writing-object-oriented-css)
    - [The Object Oriented Option](#the-object-oriented-option)

## What Is OOCSS?

> Object oriented CSS was proposed by web developer Nicole Sullivan in 2008. Her goal was to make dynamic CSS more manageable by applying the principles of object oriented design popularized by programming languages such as Java and Ruby. Using the OOCSS framework results in CSS that is reusable, scalable and easier to manage.

객체 지향 CSS는 2008년 웹개발자 니콜 설리반 (Nicole Sullivan)이 제안했습니다. 목표는 Java 및 Ruby와 같은 프로그래밍 언어로 대중화 된 객체 지향 디자인의 원칙을 적용하여 동적 CSS를보다 관리하기 쉽게 만드는 것입니다. OOCSS 프레임 워크를 사용하면 재사용 가능하고 확장 가능하며 관리하기 쉬운 CSS가 생성됩니다.

> OOCSS draws upon many concepts in object oriented programming including the single responsibility principle and separation of concerns. The goal is to produce components that are flexible, modular and interchangeable.

OOCSS는 단일 책임 원칙과 관심사 분리 등 객체 지향 프로그래밍의 많은 개념을 사용합니다. 목표는 유연하고 모듈식이며 상호교환 가능한 구성 요소(components)를 생산하는 것입니다.

## What Is The “Object” in OOCSS?

>OOCSS is not its own language. Anyone who understands CSS can easily grasp the OOCSS approach. In CSS, the “object” can be any repeating visual pattern that can be specified in snippets of code. Page elements and even groups of elements are given object classes, which are treated as single entities in style sheets. Unlike SMACSS, which gives programmers less freedom for categorizing objects, OOCSS is relatively easy to master.

OOCSS는 자체 언어가 아닙니다. CSS를 이해하면 OOCSS 접근법을 쉽게 이해할 수 있습니다. CSS에서 "객체"는 코드 스 니펫에 지정할 수있는 반복적인 시각적 패턴 일 수 있습니다. 페이지 요소와 심지어 요소 그룹에는 스타일 시트에서 단일 엔티티로 처리되는 객체 클래스가 제공됩니다. 프로그래머에게 객체 분류의 자유를 줄이는 SMACSS와 달리 OOCSS는 비교적 쉽게 마스터 할 수 있습니다.

## The First Rule of OOCSS: Separation of Structure and Skin

>OOCSS has two major underlying principles. The first is establishing a clear division between structure and skin.

OOCSS는 두 가지 기본 원칙을 가지고 있습니다. 첫 번째는 구조와 스킨 사이의 명확한 구분을 확립하는 것입니다.

>The structure of an application refers to things that are “invisible” to the user such as instructions for element size and positioning. These properties include:

응용 프로그램의 구조는 요소 크기 및 위치 지정에 대한 지침과 같이 사용자에게 "보이지 않는"것들을 나타냅니다. 이러한 속성에는 다음이 포함됩니다.

* Height
* Width
* Margins
* Padding
* Overflow

>An application’s skin refers to the visual properties of elements such as:

응용 프로그램의 스킨은 다음과 같은 요소의 시각적 속성을 포함합니다.

* Colors
* Fonts
* Shadows
* Gradients

>In other words, the structure consists of the instructions for how things are laid out, and the skin defines what the layout looks like. OOCSS defines them separately.

즉, 구조는 사물이 배치되는 방법에 대한 지침으로 구성되며, 스킨은 레이아웃의 모양을 정의합니다. OOCSS는 그것들을 개별적으로 정의합니다.

>For example, the following code represents how two buttons of the same size but in different colors would typically look like in CSS:

예를 들어, 다음 코드는 크기가 같지만 색상이 다른 두 개의 버튼이 일반적으로 CSS에서와 같이 표시되는 방식을 나타냅니다.

```css
.button {
    width: 150px;
    height: 50px;
    background: #FFF;
    border-radius: 5px;
}

.button-2 {
    width: 100px;
    height: 25px;
    background: #FFF;
    border-radius: 5px;
}
```

>The above snippet contains a lot of repeated code to define things such as width, height and border-radius. Such repetition can clutter a website’s stylesheet, which makes editing increasingly difficult. Using OOCSS, we can pick out the patterns that are common to all skins inheriting the same properties. Doing so condenses the above CSS to the following:

위의 스니펫(인용)에는 너비, 높이 및 경계선 반경과 같은 항목을 정의하는 반복 코드가 많이 포함되어 있습니다. 이러한 반복은 웹 사이트의 스타일 시트를 어수선하게 만들 수있어 편집이 점점 어려워집니다. OOCSS를 사용하여 동일한 특성을 상속하는 모든 스킨에 공통적 인 패턴을 선택할 수 있습니다. 이렇게하면 위의 CSS가 다음과 같이 응축됩니다.

```css
.button {
    width: 150px;
    height: 50px;
    
}

.button-2 {
    width: 100px;
    height: 25px;
}

.skin {
    background: #FFF;
    border-radius: 5px;
}
```

>Although it doesn’t look like much of a difference in this small example, the benefits compound as projects grow larger. By defining all elements separately as classes, we have created a reusable skin for styling the structure. Now, you can apply the class to the element with the following HTML:

이 작은 예제에서는 차이점이별로 보이지 않지만 프로젝트가 커질수록 이점이 커집니다. 모든 요소를 클래스로 별도로 정의하여 구조를 스타일 지정하기위한 재사용 가능한 스킨을 만들었습니다. 이제 다음 HTML을 사용하여 클래스에 요소를 적용 할 수 있습니다.

```html
<a class="button skin" href="#">Home</a>
<a class="button-2 skin" href="#">Blog</a>
```

## The Second Rule of OOCSS: Separation of Container and Content

>Separating containers from content makes for a more consistent and predictable user experience. In this context, content refers to elements such as images, paragraphs and div tags that are nestled within other elements, which serve as containers. Most containers can be represented by a structure class.

콘텐츠와 컨테이너를 분리하면보다 일관되고 예측 가능한 사용자 환경을 만들 수 있습니다. 이 컨텍스트에서 컨텐트는 이미지, 단락 및 div 태그와 같은 요소를 나타내며이 태그는 컨테이너 역할을하는 다른 요소 안에 자리 잡고 있습니다. 대부분의 컨테이너는 구조 클래스로 나타낼 수 있습니다.

>For example, you can use the class combination btn-small btn-red to ensure that you see a small, red button regardless of the container it appears in so long as the structure class btn-medium and skin class btn-red are written independent of a container.

예를 들어, 클래스 조합 `btn-small` `btn-red`를 사용하여 구조 클래스 `btn-medium` 및 스킨 클래스 `btn-red`가 독립적으로 작성되는 한 나타나는 컨테이너에 관계없이 작은 빨간색 버튼이 표시되도록 할 수 있습니다 

>As a general rule, styles should never be scoped to particular containers. Otherwise, you’ll be unable to reuse them without applying overrides. For example, below is the standard way of setting up the elements that make up a sidebar:

일반적으로 **스타일은 특정 컨테이너로 범위가 지정되어서는 안됩**니다. 그렇지 않으면 재정의를 적용하지 않고 **재사용 할 수 없습니다.** 예를 들어, 사이드 바를 구성하는 요소를 설정하는 표준 방법은 다음과 같습니다.

```css
#sidebar {
    padding: 2px;
    left: 0;
    margin: 3px;
    position: absolute;
    width: 140px;
}

#sidebar .list {
    margin: 3px;
}

#sidebar .list .list-header {
    font-size: 16px;
    color: red;
}

#sidebar .list .list-body {
    font-size: 12px;
    color: #FFF;
    background-color: red;
}
```

>Now, here are the same coding instructions with the content and containers separated:

이제 콘텐츠와 컨테이너가 구분 된 동일한 코딩 지침이 있습니다.

```css
.sidebar {
    padding: 2px;
    left: 0;
    margin: 3px;
    position: absolute;
    width: 140px;
}

.list {
    margin: 3px;
}

.list-header {
    font-size: 16px;
    color: red
}

.list-body {
    font-size: 12px;
    color: #FFF;
    background-color: red;
}
```

>Avoiding child selectors is a good strategy for maintaining separation between content and containers. Be sure to bestow unique classes to unique elements.

**자식 선택자를 피하는 것은 내용과 컨테이너 사이의 분리를 유지하기위한 좋은 전략**입니다. 고유한 클래스에 고유한 클래스를 부여해야합니다.

## The Benefits of Object Oriented CSS

>Object-oriented CSS is a popular approach to coding for many reasons. Below are 6 benefits of using object oriented CSS.

객체 지향 CSS는 여러 가지 이유로 코딩에 널리 사용되는 방법입니다. 아래는 객체 지향 CSS를 사용하여 얻을 수있는 6 가지 이점입니다.

### 1. Speed

>Cutting down on repetition helps applications run faster. CSS files have a habit of expanding exponentially as websites grow in complexity, thus increasing web page size. Specificity is important, but often CSS files contain way more information than is necessary. When using OOCSS, just follow the DRY rule: Don’t repeat yourself. Consequently, you’ll have CSS files that are smaller and quicker to download.

반복을 줄이면 프로그램이 빠르게 실행됩니다. CSS 파일은 웹사이트가 복잡해짐에 따라 기하급수적으로 확장되어 웹 페이지 크기가 커지는 경우가 있습니다. 특이성은 중요하지만 CSS 파일에는 필요한것보다 더 많은 정보가 포함되는 경우가 많습니다. OOCSS를 사용할 때는 **DRY 규칙**을 따르십시오. 반복하지 마십시오. 결과적으로 CSS 파일은 작아지고 빠르게 다운로드 할 수 있습니다.

### 2. Scalability

>OOCSS allows you to freely mix and re-apply classes on different elements without much regard for their context. Therefore, instead of piling on tons more CSS each time a project is passed from one developer to another, newcomers to a project can reuse what their predecessors have already abstracted out.

OOCSS를 사용하면 상황에 상관없이 다양한 요소에 대해 클래스를 자유롭게 혼합하고 다시 적용 할 수 있습니다. 따라서 한 프로젝트에서 다른 개발자로 프로젝트가 전달 될 때마다 CSS를 더 많이 쌓는 대신에, 프로젝트의 신규 사용자는 이전에 이미 추상화 한 것을 다시 사용할 수 있습니다.

### 3. Efficiency

>Having fewer blocks of code makes CSS easier to scan, which makes editing and updating less of a hassle. By using previously specified styles for different elements, not only will your code work faster; you’ll work faster too.

더 적은 코드 블록을 사용하면 CSS를보다 쉽게 스캔 할 수 있으므로 편집과 업데이트가 줄어 듭니다. 이전에 지정된 스타일을 다른 요소에 사용하면 코드가 더 빠르게 작동 할뿐만 아니라, 너는 더 빨리 일할거야.

### 4. Maintainability

>Adding or rearranging HTML markups no longer requires you to rethink your entire CSS flow. This is especially helpful for larger ongoing projects.

HTML 마크업을 추가하거나 다시 배열 할 때 더 이상 전체 CSS 플로우를 재고할 필요가 없습니다. 이는 진행중인 대규모 프로젝트에 특히 유용합니다.

### 5. Readability - 가독성

>When other programmers see your CSS, they should be able to quickly understand its structure.

다른 프로그래머가 귀하의 CSS를 볼 때, 그들은 그 구조를 빨리 이해할 수 있어야합니다.

### 6. Relatability to Other Concepts - 다른 개념에 대한 상대성

>Understanding the object-oriented methodology makes it easier to learn programming languages like Ruby. Conversely, anyone who already understands Ruby can quickly pick up OOCSS.

객체 지향 방법론을 이해하면 Ruby와 같은 프로그래밍 언어를 더 쉽게 익힐 수 있습니다. 반대로 이미 Ruby를 이해하면 누구나 OOCSS를 빠르게 선택할 수 있습니다.

## The Disadvantages of Using OOCSS

>Although there are many advantages of using OOCSS, there are also a few drawbacks. These include the following.

OOCSS를 사용하면 많은 장점이 있지만 몇 가지 단점도 있습니다. 여기에는 다음이 포함됩니다.

### 1. Increases the Number of Classes Added to an Element

1. 요소에 추가 된 클래스의 수를 늘립니다.

>As there is much more separation in the way classes are created, you may need to add multiple classes to an element to account for all of the styling elements. This can cause some confusion to those who aren’t familiar with OOCSS and can clutter your markup.

클래스가 생성되는 방식에는 훨씬 더 많은 분리가 있기 때문에 모든 스타일 요소를 설명하기 위해 요소에 여러 클래스를 추가해야 할 수도 있습니다. OOCSS에 익숙하지 않은 사용자에게 혼동을 줄 수 있으며 마크 업을 혼란스럽게 할 수 있습니다.

### 2. May Be Overkill for Small Projects

2. 소규모 프로젝트에 과잉 고용 될 수 있습니다.

>OOCSS certainly isn’t required for all use cases. For smaller projects you may opt to not use it at all and that’s completely fine. As mentioned above, a few of the main benefits are: scalability, readability, and maintainability. As projects grow, these aspects become harder to manage which makes OOCSS a great tool, however, these aren’t as pressing for smaller projects.

OOCSS는 모든 사용 사례에 반드시 필요한 것은 아닙니다. 소규모 프로젝트의 경우에는 전혀 사용하지 않기로 결정할 수도 있습니다. 위에서 언급했듯이 몇 가지 주요 이점은 확장성, 가독성 및 유지수성입니다. 프로젝트가 성장함에 따라 이러한 측면을 관리하기가 어려워 져서 OOCSS를 훌륭한 도구로 만들지 만, 소규모 프로젝트에서는 그다지 압박감이 없습니다.

### 3. Requires a Learning Curve

3. 학습 곡선 필요

>It may be that other web developers or designers need to make adjustments to your code. However, if you’re using OOCSS and your co-workers aren’t familiar with it, this will require the need for them to learn how to use it before proceeding, which takes time.

다른 웹 개발자나 디자이너가 코드를 조정해야 할 수도 있습니다. 그러나 OOCSS를 사용하고 있으며 동료가 익숙하지 않은 경우 진행하기 전에 사용법을 배우고 시간이 필요합니다.

## OOCSS vs SMACSS vs BEM

>OOCSS is just one of several ways to structure CSS. The other two major methodologies are BEM, or Block Element Modifier, and SMACSS, or Scalable and Modular Architecture for CSS. Each approach is equally effective at making CSS more efficient, so what you should use for your personal projects is up to your preference. As can be seen below, according to Google Trends, BEM is still amongst the most popular of CSS methodologies.

OOCSS는 CSS를 구성하는 몇 가지 방법 중 하나 일뿐입니다. 다른 두 가지 주요 방법론은 BEM 또는 Block Element Modifier와 SMACSS 또는 CSS 용 Scalable and Modular Architecture입니다. 각 방법은 CSS를보다 효율적으로 만드는 데 똑같이 효과적이므로 개인 프로젝트에 사용해야하는 것은 사용자의 취향에 달려 있습니다. 아래에서 볼 수 있듯이 Google 트렌드에 따르면 BEM은 여전히 CSS 방법론 중에서 가장 인기가 있습니다.

![](https://blog.keycdn.com/blog/wp-content/uploads/2017/05/oocss-trends.webp)

>Professional coders should be familiar with all three methods and know how to combine them.

전문 코더는이 세 가지 방법을 잘 알고 있어야하며, 이를 결합하는 방법을 알고 있어야합니다.

## Using OOCSS with Sass

>Sass, which is an appropriate acronym for syntactically awesome stylesheets, is a scripting language that interprets into CSS. Sass makes life easier for front-end developers by allowing coding with variables, functions, mixins, advanced linting tools, nesting and compilation methods. The object oriented approach can also be applied to Sass to make code even easier to manage.

Sass는 CSS로 해석하는 스크립팅 언어입니다. Sass는 프런트 엔드 개발자가 변수, 함수, 믹스 틴, 고급 linting 도구, 중첩 및 컴파일 방법을 사용하여 코딩 할 수있게함으로써 작업을 더 쉽게 만듭니다. Sass에 객체 지향 접근법을 적용하여 코드를 더욱 쉽게 관리 할 수 ​​있습니다.

>For example, because establishing objects in OOCSS involves defining classes, it creates some semantic issues. Any change to your styles requires HTML editing, and you have no safe way of accessing some DOM elements.

예를 들어, OOCSS에 객체를 설정하면 클래스를 정의하기 때문에 의미 론적 문제가 발생합니다. 스타일을 변경하려면 HTML 수정이 필요하며 일부 DOM 요소에 안전하게 액세스 할 수있는 방법이 없습니다.

>The Sass @extend directive gives you access to placeholder selectors, which allows you to create semantic CSS classes. By using placeholders as objects, you can define classes by merging them through @extend. When you apply properties of one class onto another with the Sass @extend directive, the properties don’t get duplicated; the two classes are simply combined with a comma selector. This feature enables you to update CSS properties in one location. If you’re writing really long stylesheets, this simple trick can shave hours off of your workload.

Sass @extend 지시문을 사용하면 의미있는 CSS 클래스를 만들 수있는 자리 표시 자 선택기에 액세스 할 수 있습니다. 개체로 자리 표시자를 사용하여 @extend를 통해 클래스를 병합하여 클래스를 정의 할 수 있습니다. 한 클래스의 속성을 Sass @extend 지시어로 다른 클래스에 적용하면 속성이 중복되지 않습니다. 두 클래스는 단순히 쉼표 선택자와 결합됩니다. 이 기능을 사용하면 한 위치에서 CSS 속성을 업데이트 할 수 있습니다. 정말 긴 스타일 시트를 작성하는 경우이 간단한 트릭을 사용하면 작업 부하를 몇 시간이나 줄일 수 있습니다.

>For example, the snippet of code below is perfectly logical, but it is not semantic:

예를 들어, 아래 코드의 스 니펫은 완벽하게 논리적이지만 의미는 아닙니다.

```css
a.twitter {
    min-width: 100px;
    padding: 1em;
    border-radius: 1em;
    background: #55acee
    color: #fff;
}
span.facebook {
    min-width: 100px;
    padding: 1em;
    border-radius: 1em;
    background: #3b5998;
    color: #fff;
}
```

>To clean up this code, you could use @extend to mix base objects. As a result, you’ll get more manageable CSS that doesn’t require you to constantly change your HTML:

이 코드를 정리하려면 `@extend`를 사용하여 기본 객체를 혼합 할 수 있습니다. 결과적으로 HTML을 지속적으로 변경할 필요가없는 관리가 용이 한 CSS를 얻을 수 있습니다.

```scss
%button {
    min-width: 100px;
    padding: 1em;
    border-radius: 1em;
}
%twitter-background {
    color: #fff;
    background: #55acee;
}
%facebook-background {
    color: #fff;
    background: #3b5998;
}

.btn {
&--twitter {
    @extend %button;
    @extend %twitter-background;
}
&--facebook {
    @extend %button;
    @extend %facebook-background;
}
}
```

>Now, you have efficient, semantic code ready for reuse in your HTML:

이제 효율적이고 의미있는 코드를 HTML에서 다시 사용할 준비가되었습니다.

```html
<a href="#" class="btn--twitter">Twitter</a>
<a href="#" class="btn--facebook">Facebook</a>
```

>Whichever approach or approaches you use when writing CSS, anything beats managing messy code. Putting a little planning into how your CSS is structured will give you more time and energy to focus on creative endeavors instead of shifting through cluttered CSS.

CSS를 작성할 때 사용하는 접근 방식이나 접근 방식에 관계없이 지저분한 코드를 관리하는 것은 무엇이든 상쇄합니다. CSS가 어떻게 구조화되는지에 대해 약간의 계획을 세우면 복잡한 CSS를 사용하는 대신 창조적 인 노력에 집중할 수있는 시간과 에너지가 늘어납니다.

## Tips for Writing Object Oriented CSS

>The practice of OOCSS is still evolving, so there are no definitive development guidelines for programmers to follow. Nonetheless, here are a few suggestions for cleaning up your CSS using object oriented principles:

OOCSS의 실행은 계속 진화하고 있으므로 프로그래머가 따라야 할 개발 지침이 없습니다. 그럼에도 불구하고 객체 지향 원칙을 사용하여 CSS를 정리하기위한 몇 가지 제안 사항은 다음과 같습니다.

>1. When you code, you should always think about the next programmer who might build upon your project. For example, you can write an application that performs perfectly to handle tasks in your workplace, but if the code is inaccessible to the next person who takes your job, your perfect program can become more of a liability than a convenience.
>1. Skin separation can make simpler styles like borders or backgrounds even simpler. For instance, if you have several objects that you want to have a purple border, you should create a separate class for the border and the add it to your objects. This can significantly reduce your amount of CSS code.
>1. Avoid adding styles based on location. For example, instead of targeting all of the links inside a div to highlight, create a highlighter class that can be reused.
>1. While OOCSS cuts down on deep nested selectors, you obviously will end up with a lot of classes and more HTML. Using Sass can help cut down on bloat.
>1. Chaining classes together provides additional features. Any element can have dozens of classes attached to it. This flexibility gives developers the power to establish a library of reusable styles for an infinite number of page elements.
>1. Standards for naming classes are still being debated, but everyone agrees that class names should be short yet descriptive. As always, think about the next person who will be looking at your code.
>1. Avoid multilevel descendant class specificity; that’s the whole point of using an object oriented approach.
>1. When extending elements, use targeted classes instead of parent classes.
>1. Creating a table of contents can help you organize your stylesheet into sections.
>1. If you don’t have a large number of repeating visual patterns in your code, applying OOCSS may be impractical. Nonetheless, it may be beneficial to get into the practice of separating structure from style and content from context when writing CSS.

1. 코드를 작성하면 프로젝트를 기반으로하는 다음 프로그래머에 대해 항상 생각해야합니다. 예를 들어 작업장에서 작업을 처리하기 위해 완벽하게 수행하는 응용 프로그램을 작성할 수는 있지만 작업을 맡은 다음 사람이 코드에 액세스 할 수없는 경우 완벽한 프로그램은 편의 이상의 책임이 될 수 있습니다.
2. 스킨 분리는 테두리 나 배경과 같은 간단한 스타일을 더 간단하게 만들 수 있습니다. 예를 들어, 자주색 테두리가 필요한 여러 개체가있는 경우 테두리에 대해 별도의 클래스를 만들어 개체에 추가해야합니다. 이렇게하면 CSS 코드의 양을 크게 줄일 수 있습니다.
3. 위치에 따라 스타일을 추가하지 마십시오. 예를 들어 div 내에서 강조 표시 할 모든 링크를 타겟팅하는 대신 재사용 할 수있는 형광펜 클래스를 만듭니다.
4. OOCSS는 깊게 중첩 된 선택자를 축소하지만 분명히 많은 클래스와 HTML로 끝날 것입니다. Sass를 사용하면 부풀어 오름을 줄일 수 있습니다.
5. 클래스를 함께 묶어 추가 기능을 제공합니다. 모든 요소에는 수십개의 클래스가 첨부될 수 있습니다. 이러한 유연성 덕분에 개발자는 무한 수의 페이지 요소에 대해 재사용 가능한 스타일 라이브러리를 구축할 수 있습니다.
6. 클래스 이름 지정을 위한 표준은 여전히 ​​논의중입니다만, 모든 사람들은 클래스 이름이 짧지만 설명이 가능해야한다는 것에 동의합니다. 항상 그렇듯이 코드를 보게 될 다음 사람을 생각해보십시오.
7. 다중 레벨 자손 클래스 특수성을 피하십시오. 그것이 객체 지향 접근법을 사용하는 요지입니다.
8. 요소를 확장할 때 부모 클래스 대신 대상 클래스를 사용하십시오.
9. 목차를 만들면 스타일 시트를 섹션으로 구성하는 데 도움이됩니다.
10. 코드에 반복되는 시각적 패턴이 많지 않으면 OOCSS를 적용하는 것이 비현실적 일 수 있습니다. 그럼에도 불구하고 CSS를 작성할 때 컨텍스트에서 스타일과 컨텐트의 구조를 분리하는 관행에 들어가는 것이 유익 할 수 있습니다.

## The Object Oriented Option

>Keep in mind that OOCSS is a dynamic, or bottom-up, approach to coding rather than a procedural, or top-down, approach. If you’re collaborating on a project with a big team of programmers, agreeing on a CSS methodology upfront may be challenging, yet introducing standards early on certainly pays off for everyone in the long run. Whether you settle on OOCSS or some other methodology, you should get into the habit of condensing and organizing your CSS

OOCSS는 절차적 또는 하향식 방식이 아닌 동적인 또는 상향식 방식의 코딩방법입니다. 커다란 프로그래머팀과 프로젝트를 공동 작업하는 경우 CSS 방법론을 사전에 동의하는 것은 어려울수 있지만 초기 표준을 발표하면 장기적으로 모든 사람에게 확실한 보상을 제공하게됩니다. OOCSS 또는 다른 방법론에 정착하든, CSS를 요약하고 정리하는 습관을 갖춰야합니다.