# 📖 Atomic Design

[원문 보러가기](http://bradfrost.com/blog/post/atomic-web-design/)

* 📖 [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/)- Table of Contents

## atomic design

> We’re not designing pages, we’re designing systems of components.—Stephen Hay

> 우리는 페이지를 디자인하지 않고, 컴포넌트 시스템을 설계하고 있습니다.-Stephen Hay

>As the craft of Web design continues to evolve, we’re recognizing the need to develop thoughtful design systems, rather than creating simple collections of web pages.

웹 디자인 공예가 계속 발전함에 따라 웹 페이지의 간단한 컬렉션을 만드는 것보다는 사려 깊은 디자인 시스템을 개발할 필요성을 인식하고 있습니다.

>A lot has been said about creating design systems, and much of it focuses on establishing foundations for color, typography, grids, texture and the like. This type of thinking is certainly important, but I’m slightly less interested in these aspects of design because ultimately they are and will always be subjective. Lately I’ve been more interested in what our interfaces are comprised of and how we can construct design systems in a more methodical way.

디자인 시스템을 만드는 것에 관해 많은 이야기가 있었으며, 그 대부분은 색상, 타이포그래피, 그리드, 질감 등의 기반을 확립하는 데 중점을두고 있습니다. 이러한 유형의 사고는 분명 중요하지만 필자는 궁극적으로 항상 주관적이고 항상 주관적이기 때문에 이러한 디자인 측면에 약간 관심이 있습니다. 최근에 저는 인터페이스가 구성되어있는 방식과보다 체계적인 방식으로 디자인 시스템을 구성하는 방법에 대해 더 많은 관심을 보였습니다.

>In searching for inspiration and parallels, I kept coming back to chemistry. The thought is that all matter (whether solid, liquid, gas, simple, complex, etc) is comprised of atoms. Those atomic units bond together to form molecules, which in turn combine into more complex organisms to ultimately create all matter in our universe.

영감과 평행을 찾으면서 나는 계속해서 화학으로 돌아 왔습니다. 그 생각은 모든 물질 (고체, 액체, 기체, 단순, 복합체 등)이 원자로 구성되어 있다는 것입니다. 그 원자 단위들은 서로 결합하여 분자를 형성하고, 차례로 더 복잡한 유기체로 결합하여 궁극적으로 우주의 모든 물질을 창조합니다.

>Similarly, interfaces are made up of smaller components. This means we can break entire interfaces down into fundamental building blocks and work up from there. That’s the basic gist of atomic design.

마찬가지로 인터페이스는 더 작은 구성 요소로 구성됩니다. 즉, 전체 인터페이스를 기본 빌딩 블록으로 분할하고 거기에서부터 작업 할 수 있습니다. 그것이 원자 설계의 기본 요지입니다.

### what is atomic design

>Atomic design is methodology for creating design systems. There are five distinct levels in atomic design:

원자 설계는 설계 시스템을 작성하는 방법론입니다. 원자 설계에는 다섯 가지 수준이 있습니다.

1. Atoms
2. Molecules
3. Organisms
4. Templates
5. Pages

![](http://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png)

#### atoms

> Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.

원자는 물질의 기본 구성 요소입니다. 웹 인터페이스에 적용되는 원자는 양식 레이블, 입력 또는 버튼과 같은 HTML 태그입니다.

![](http://bradfrost.com/wp-content/uploads/2013/06/atoms.jpg)

> Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations.

원자에는 색상 팔레트, 글꼴 및 애니메이션과 같은 인터페이스의 더 눈에 보이지 않는 측면과 같은 추상 요소도 포함될 수 있습니다.

> Like atoms in nature they’re fairly abstract and often not terribly useful on their own. However, they’re good as a reference in the context of a pattern library as you can see all your global styles laid out at a glance.

자연의 원자와 마찬가지로 그들은 추상적이어서 종종 스스로 유용하지는 않습니다. 그러나 모든 글로벌 스타일이 한 눈에 보이는 것을 볼 때 패턴 라이브러리의 컨텍스트에서 참조로 유용합니다.

#### molecules

> Things start getting more interesting and tangible when we start combining atoms together. Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of our design systems.

우리가 원자를 결합하기 시작하면 더 재미 있고 실제적으로 시작됩니다. 분자는 함께 결합 된 원자 그룹이며 화합물의 가장 작은 기본 단위입니다. 이 분자들은 자신의 특성을 이용하고 우리의 설계 시스템의 중추 역할을합니다.

> For example, a form label, input or button aren’t too useful by themselves, but combine them together as a form and now they can actually do something together.

예를 들어, 양식 레이블, 입력 또는 단추는 그 자체로는별로 유용하지 않지만 양식으로 결합하여 이제 실제로 함께 할 수 있습니다.

![](https://viblo.asia/uploads/b6beefa1-7219-4503-9ad5-84b41376f1d0.jpg)

>Building up to molecules from atoms encourages a “do one thing and do it well” mentality. While molecules can be complex, as a rule of thumb they are relatively simple combinations of atoms built for reuse.

원자에서 분자를 만드는 것은 "한 가지를하고 잘해라"는 사고 방식을 장려합니다. 분자는 복잡 할 수 있지만 일반적으로 재사용을 위해 만들어진 원자는 상대적으로 단순한 조합입니다.

#### organisms

>Molecules give us some building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

분자는 우리에게 일할 기초 요소를 제공하며, 이제 우리는 이들을 결합하여 유기체를 형성 할 수 있습니다. 유기체는 서로 결합되어 비교적 복잡하고 구분 된 인터페이스 영역을 형성하는 분자 그룹입니다.

![](http://bradfrost.com/wp-content/uploads/2013/06/organism-examples.jpg)

>We’re starting to get increasingly concrete. A client might not be terribly interested in the molecules of a design system, but with organisms we can see the final interface beginning to take shape. Dan Mall (who I’m working with on several projects) uses element collages, which articulate ideas for a few key organisms to facilitate client conversations and shape the visual direction (all without having to construct full comps).

우리는 점점 더 구체화하기 시작했습니다. 클라이언트는 디자인 시스템의 분자에 대단히 흥미가 없을 수도 있지만, 유기체와 함께 최종 인터페이스가 시작되는 것을 볼 수 있습니다. (여러 프로젝트에서 함께 일하고있는) Dan Mall은 요소 대화를 사용하여 클라이언트 대화를 촉진하고 시각적 방향을 형성하는 몇 가지 핵심 유기체에 대한 아이디어를 표현합니다 (전체 구성 요소를 구성 할 필요없이).

>Organisms can consist of similar and/or different molecule types. For example, a masthead organism might consist of diverse components like a logo, primary navigation, search form, and list of social media channels. But a “product grid” organism might consist of the same molecule (possibly containing a product image, product title and price) repeated over and over again.

유기체는 유사하거나 상이한 분자 유형으로 구성 될 수 있습니다. 예를 들어, 마스트 헤드 유기체는 로고, 기본 탐색, 검색 양식 및 소셜 미디어 채널 목록과 같은 다양한 구성 요소로 구성 될 수 있습니다. 그러나 "제품 그리드"유기체는 반복적으로 반복되는 동일한 분자 (아마도 제품 이미지, 제품 제목 및 가격을 포함 할 수 있음)로 구성 될 수 있습니다.

>Building up from molecules to organisms encourages creating standalone, portable, reusable components.

분자에서 유기물로의 구축은 독립형의 휴대 가능하고 재사용 가능한 구성 요소를 만드는 것을 장려합니다.

#### templates

>At the template stage, we break our chemistry analogy to get into language that makes more sense to our clients and our final output. Templates consist mostly of groups of organisms stitched together to form pages. It’s here where we start to see the design coming together and start seeing things like layout in action.

템플릿 단계에서 우리는 우리의 화학적 유추를 깨고 고객과 최종 결과물에 더 많은 이해를하는 언어로 들어갑니다. 서식 파일은 주로 페이지를 구성하기 위해 서로 꿰매어 진 유기체 그룹으로 구성됩니다. 여기서 우리는 함께 디자인이 시작되고 레이아웃이 실제로 작동하는 것을보기 시작합니다.

>Templates are very concrete and provide context to all these relatively abstract molecules and organisms. Templates are also where clients start seeing the final design in place. In my experience working with this methodology, templates begin their life as HTML wireframes, but over time increase fidelity to ultimately become the final deliverable. Bearded Studio in Pittsburgh follow a similar process, where designs start grayscale and layout-less but slowly increase fidelity until the final design is in place.

템플리트는 매우 구체적이며 모든 비교적 추상적 인 분자와 유기체에 대한 문맥을 제공합니다. 템플릿은 고객이 최종 디자인을 제자리에서보기 시작하는 곳이기도합니다. 이 방법론을 사용하여 저의 경험으로, 템플릿은 HTML 와이어 프레임으로 수명을 시작하지만 시간이 지남에 따라 궁극적으로 최종 산출물이 될 충실도가 높아집니다. 피츠버그의 수염을 가진 스튜디오는 디자인이 그레이 스케일과 레이아웃이 적지 만 최종 디자인이 완료 될 때까지 천천히 충실도를 높이는 유사한 프로세스를 따른다.

#### pages

>Pages are specific instances of templates. Here, placeholder content is replaced with real representative content to give an accurate depiction of what a user will ultimately see.

페이지는 템플릿의 특정 인스턴스입니다. 여기서는 자리 표시 자 콘텐츠가 실제 대표 콘텐츠로 대체되어 사용자가 궁극적으로 볼 수있는 것을 정확하게 묘사합니다.

>Pages are the highest level of fidelity and because they’re the most tangible, it’s typically where most people in the process spend most of their time and what most reviews revolve around.

페이지는 충실도가 가장 높으며 가장 실제적이기 때문에 일반적으로 대부분의 사람들이 대부분의 시간을 보내고 대부분의 리뷰가 돌아 다니는 곳입니다.

>The page stage is essential as it’s where we test the effectiveness of the design system. Viewing everything in context allows us to loop back to modify our molecules, organisms, and templates to better address the real context of the design.

디자인 단계의 효율성을 테스트하는 곳이기 때문에 페이지 단계는 필수적입니다. 문맥을 통해 모든 것을 살펴봄으로써 우리는 분자, 생물체 및 템플릿을 수정하여 실제 디자인 컨텍스트에보다 효과적으로 대처할 수 있습니다.

>Pages are also the place to test variations in templates. For example, you might want to articulate what a headline containing 40 characters looks like, but also demonstrate what 340 characters looks like. What does it look like when a user has one item in their shopping cart versus 10 items with a discount code applied? Again, these specific instances influence how we loop back through and construct our system.

페이지는 템플릿의 변형을 테스트 할 수있는 장소이기도합니다. 예를 들어, 40자를 포함하는 헤드 라인이 어떻게 보이는지 분명히 말하고 340 자의 모습을 보여줄 수 있습니다. 사용자가 장바구니에 하나의 상품 대 할인 코드가 적용된 10 개의 상품이있는 것은 어떻게됩니까? 다시 말하지만, 이러한 특정 인스턴스는 우리가 루프백하고 시스템을 구성하는 방법에 영향을 미칩니다.

#### why atomic design

>In a lot of ways, this is how we’ve been doing things all along, even if we haven’t been consciously thinking about it in this specific way.

많은 방법으로, 이것은 우리가이 특정 방식으로 의식적으로 생각하지 않았더라도, 우리가 모든 것을 함께 해왔 던 방법입니다.

>Atomic design provides a clear methodology for crafting design systems. Clients and team members are able to better appreciate the concept of design systems by actually seeing the steps laid out in front of them.

원자 설계는 설계 시스템을 제작하는 명확한 방법론을 제공합니다. 고객과 팀 구성원은 실제로 설계 시스템의 개념을 실제로 그 앞에 놓여있는 것으로 보아 설계 시스템의 개념을 더 잘 이해할 수 있습니다.

>Atomic design gives us the ability to traverse from abstract to concrete. Because of this, we can create systems that promote consistency and scalability while simultaneously showing things in their final context. And by assembling rather than deconstructing, we’re crafting a system right out of the gate instead of cherry picking patterns after the fact.

원자 설계는 추상에서 콘크리트로 이동하는 기능을 제공합니다. 이 때문에 일관성과 확장 성을 향상시키는 동시에 최종 상황에서 상황을 보여주는 시스템을 만들 수 있습니다. 그리고 해체하는 것보다는 모으는 것만으로도 사실을 모방 한 체리 피킹 패턴 대신에 문 밖으로 시스템을 만들 수 있습니다.

#### pattern lab

>In order to apply this methodology in my work, I (along with the help of the great Dave Olsen) created a tool called Pattern Lab to actually create these atomic design systems. I’ll cover Pattern Lab in detail later, but feel free to check it out on Github.

내 작업에서이 방법론을 적용하기 위해 Dave Olsen의 도움을 받아 필자와 함께 [Pattern Lab](http://patternlab.io/)이라는 도구를 만들어 원자 설계 시스템을 실제로 만들었습니다. Pattern Lab에 대해서는 나중에 자세히 다룰 것이지만 [Github](https://github.com/bradfrost/patternlab)에서 무료로 확인하십시오.