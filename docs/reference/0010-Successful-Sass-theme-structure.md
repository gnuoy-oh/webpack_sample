# A successful Sass theme structure

[원문 보기↗️](https://codeburst.io/a-successful-sass-theme-structure-ca9d1c477dc7)

얼마 동안 나는 높은 수준의 커스터마이즈가 필요한 여러 프로젝트를 다루었습니다. 모든 전략은 항상 한 가지에서 시작했습니다, 바로 멀티플 테마의 필요성이었습니다.

나는 테마를 달성하기 위한 최고의 레시피를 제공하진 않을 것입니다. 대신 내가 고려한 전략 중 오늘까지 가장 최고인 방법을 알려줄 것이며, 트레이드 오프로서, 당신이 나에게 그것을 향상시킬 수 있도록 의견과 아이디어를 주길 희망합니다. :)

**참고**: 이 게시물의 제목에도 불구하고이 방법은 Sass 프로젝트와 다른 솔루션에 모두 유효합니다. [future CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables), [Less](http://lesscss.org/), [Post CSS](http://postcss.org/)  또는 [styled components](https://www.styled-components.com/) 에도 적용 할 수 있습니다. 즉, 나는 Sass 스니펫을 제공할 것입니다.

> 이 글을 다 읽었을 무렵 유용한 팁을 찾았고 구현을 원한다면, 잠시 멈추고 각각의 결정 사항을 디자인 팀과 상의하십시오. 그들은 당신의 염려를 알고 있어야하며 당신은 그들의 필요를 알고 있어야합니다. 이것이 전체 웹 사이트에서 일관된 스타일과 함께 훌륭하고 깨끗한 구현을 할 수있는 유일한 방법입니다. ( "Been there, done that")

### Color paletts

테마에 대한 구조는 항상 색상 팔레트에서 시작합니다. 색상은 디자인에서 가장 중요하거나, 가장 중요한 것 중 하나 일 수 있습니다. 색상은 프로젝트 전반에 걸쳐 일관성을 유지해야하며 디자인 의도와 일치해야 사이트의 전체적인 미학적 감각을 발휘할 수 있습니다.

다음은 각각 4개 색상이 3개 경우로 변환된 팔레트의 예입니다. 이 팔레트는 대부분의 프로젝트에서 충분히 입증되었지만, 당신에게 유용한 색상과 베리에이션을 자유롭게 정의하고 추가할 수 있습니다. 다만 일관성을 유지하십시오.

```scss
$theme-colors: (
  'primary': (
    'base': #384ea9,
    'light': #e4efff,
    'dark': #273677
  ),
  'accent': (
    'base': #f08110,
    'light': #ff8100,
    'dark': #e47f17
  ),
  'foreground': (
    'base': #393939,
    'light': #6e6e6e,
    'dark': #111
  ),
  'background': (
    'base': #f8f5f5,
    'light': #fff,
    'dark': #ddd
  )
);
```

**기본(primary)** 색상은 브랜드 색상 (예 : 파란색)이고 **액센트(accent)** (이름에서 알 수 있듯이)는 강조 색상 (예 : 브랜드의 보조 색상 : 주황색) `희연 코멘트: 구글의 머티리얼 디자인의 경우 말 그대로 명도와 채도가 강해 눈에 잘 띄이는 컬러를 의미하기도 합니다` 이고 **전경(forgrand)**은 어두운 색상의 기본 오브젝트에 대한 색상, **배경(background)**는 근본적으로 밝은 물체 나 섹션 배경을 위한 색입니다.

자, 어떻게 우리는이 색들을 사용할 까요? 우리는 **Maps**를 다루고 있으며 maps에 직접 접근하는 것은별로 실용적이지 않습니다.

그래서 나는 function을 사용하는것을 제안합니다.

```scss
@function theme-color($key: 'primary', $variant: 'base') {
  $map: map-get($theme-colors, $key);
  @return map-get($map, $variant);
}
```

이렇게하면 다음과 같이 색상 팔레트에 쉽게 액세스 할 수 있습니다.

```scss
background-color: theme-color(); // "primary base" color;
boder: 1px solid theme-color('foreground', 'light'); // "foreground light" color;
```

만약 위 색상 변화가 충분하지 않다 생각하고, Sass로 작업하고 있다면  [mix](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method), [lighten](http://lighten/), [darken](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) 및 다른 색상 function으로 표현할 수 있습니다.

[Scotch.io](https://scotch.io/)에서는 실제로 믹스 기능을 사용하여 색상 팔레트 관리에 대한 멋진 [기사](https://scotch.io/tutorials/aesthetic-sass-2-colors#toc-tints-and-shades)를 찾을 수 있습니다.

### Contrast

내가 처음 이 색상 팔레트를 사용해 프로젝트를 진행할 때 겪은 어려움 중 하나는 팔레트에서 정의한 색상에 관계없이 텍스트 내용과 UI 요소간에 좋은 대비를 유지할 수있는 능력이었습니다.

[Google Material Design](https://material.io/)가이드 덕분에 텍스트에 색상 대신 [투명도](https://material.io/guidelines/style/typography.html#typography-other-typographic-guidelines) 를 사용해야한다는 것을 알았습니다. 어둡거나 밝은 배경을 다루고 있다면 그 사실을 알고 있어야합니다.

그래서 팔레트를 좀 더 정의했습니다.:

```scss
$contrast-colors: (
  'dark': (
    'primary': rgb(255, 255, 255),
    'secondary': rgba(255, 255, 255, .70),
    'disabled': rgba(255, 255, 255, .5),
    'hint': rgba(255, 255, 255, .12)
  ),
  'light': (
    'primary': rgba(0, 0, 0, .87),
    'secondary': rgba(0, 0, 0, .54),
    'disabled': rgba(0, 0, 0, .38),
    'hint': rgba(0, 0, 0, .12)
  ),
);
```

이번에는 함수만 사용하는 대신에 헬퍼 함수와 함께 믹스 인을 만들었습니다. (주로 글꼴 색으로 사용하기 때문에)

```scss
@function contrast($background: 'light', $type: 'primary') {
  $map: map-get($contrast-colors, $background);
  @return map-get($map, $type);
}

@mixin contrast($background: 'light', $type: 'primary') {
  color: contrast($background, $type)
}
```

그리고 밝은 배경의 UI 요소를 처리 할 때 글꼴 색상을 다음과 같이 관리 할 수 있습니다:

```scss
.selector {
  @include text-color();
  // or @include text-color('light', 'secondary'); for more faded content 
}
```

반면에 어두운 배경의 UI 요소를 다루는 경우 다음과 같이 할 수 있습니다.

```scss
.selector {
  @include contrast('dark');
 // or @include contrast('dark', 'secondary'); for more faded content
}

```

(다른 CSS 속성에도이 contrast () 함수를 사용할 수 있다는 것을 잊지 마십시오.)

### Typography

자,이 시점에서 폰트 크기, 폰트 패밀리 및 폰트 두께 관리를 위해 내가 제안 할 것을 상상할 수 있을 겁니다. 지도죠.

**Font size**

폰트 크기에 대해서는 항상 _rem_ 단위를 사용하고 각 글꼴 크기는 _line-height_와 직접적인 관련이 있습니다.

> rem 단위는 루트 또는 html 요소에 상대적입니다. 즉, html 요소에 폰트 크기를 정의하면 모든 rem 단위를 그 비율로 정의 할 수 있습니다.

자세한 내용은 [여기](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/)를 참조하십시오.

기본 크기가 16px라고 가정한 다음, 크기 맵을 작성할 때 px 크기를 염두에 두어야합니다.

```scss
$base-font-size: 1rem;
$base-line-height: 1.25 * $base-font-size;

$text-settings: (
  'xs': (
    font-size: .75rem, // 12px
    line-height: $base-line-height
  ),
  'sm': (
    font-size: .875rem, // 14px
    line-height: $base-line-height
  ),
  'base': (
    font-size: 1rem, // 16px
    line-height: $base-line-height
  ),
  'md': (
    font-size: 1.125rem, // 18px
    line-height: $base-line-height * 2
  ),
  'lg': (
    font-size: 1.25rem, // 20px
    line-height: $base-line-height * 2
  ),
  'xl': (
    font-size: 1.5rem, // 24px
    line-height: $base-line-height * 2
  )
);
```

```scss
@function text-scale($level) {
  @return map-get(map-get($text-settings, $level), 'font-size');
}

@function line-height($level) {
  @return map-get(map-get($text-settings, $level), 'line-height');
}

@mixin text-setting($level) {
  font-size: text-scale($level);
  line-height: line-height($level);
}
```

이제 글꼴 크기로 작업하려면 *text-setting*믹스을 사용합니다. 이렇게하이 단일 관리 지점을 통해 사이트의 모든 콘텐츠 크기와 간격을 쉽게 변경할 수 있습니다.

```scss
.selector{
  @include text-setting('xs');
}
```

나는 폰트 무게와 폰트 패밀리와 같은 다른 것들을 위해 내가 따르는 것을 기술할 수 있지만 트릭은 항상 동일합니다. maps, functions 및 mixins의 사용입니다.

당신이 달성하기 위해 노력할 것은 테마에서 테마로 바뀔 수있는 색상, 크기, 선명도 및 기타 사항을 정의하는 단일 지점을 갖는 것입니다.

나는 이 전략이 많은 다른 프로젝트에서 매우 유용하다는 것을 알아냈습다. 커스터마이즈 된 레이어가 필요하지 않은 경우에도 ... 일관된 스타일을 유지하는데 도움이되며 코드 유지 관리가 훨씬 더 건강해집니다.

도움이 되길 희망합니다!