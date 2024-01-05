### html 공부

<p>기초적인 태그 사용법 익히기

```html
<!--주석은 이렇게 표시! 
IDE 에서 ctrl + / 단축키로 편하게 작성 가능-->

<p> p 태그를 사용해 본문 표시</p>
<img src="img경로"> # 이미지 삽입
<a> a 태그로 이동</a>
<a href="http://www.inu.ac.kr">인천대학교</a>
```
</p>

---

기본적인 웹페이지 스타일링

style 태그를 이용해 기본적인 스타일 설정 가능

style=text-align; text-size; font-family; font-weight; letter-spacing;
margin; color ...

**span** 태그로 둘러쌓아 p 태그 텍스트의 일부만 스타일 주기 가능

**strong** 태그로 텍스트 두께 조절 가능

--- 

<br />

CSS 파일 만들고 첨부하는 법

html 파일에 스타일을 다 넣으면 너무 파일이 지저분하기 때문에 다른 파일로 빼서 작성 가능하다

### class

.classname{
 style
}

p{}그냥 이렇게 하면 p태그에 모두 적용

'#' 쓰고 이름 쓰면 id='이름'

우선순위는 html에 직접 style, #~~~ .classname 태그이름{}순

<br>

박스 만드는 태그 **div**

width, height

margin: 10px 하면 상하좌우 다 10px 마진 넣어지고 

margin-left 처럼 특정방향만 주기도 가능

padding == 박스 내부의 여백

border == 박스 테두리 종류와 색 넣을 수 있음

border-radius 테두리 둥글기

margin-left, right: auto 로 가운데 정렬하기

display:block 은 이미지에서는 넣었지만 <div>,<p>,<h>는 기본적으로 가지고 있어서 생략가능

display:block == 가로행을 전부 차지하게 하기

font-size, font-family 등은 상속을 지원한다.

### float layout

float: left;

박스를 공중에 띄워서 정렬해준다. 그냥 두면 div 는 블록 속성이 있어 한 줄을 전부 차지하지만,
이 옵션을 주어 원하는대로 정렬 가능하다.

float 속성 사용후 clear: both; 로 속성 이후에 오는 요소들이 위로 올라가는 문제 처리하자.

clear:both; 를 바로 아래 컨텐츠를 담을 박스에 주게 되면 그 위와 마진을 설정했을 때 위가 다 float 여서 맨 위와의 마진이 잡혀 의도한대로 설정되지 않는다.

이 문제를 해결하기 위해서 그 마진을 주고싶은 상자에 clear:both; 하지말고 바로 위에 빈 박스를 하나 만들어서 거기에 클리어 스타일을 주면 해결할 수 있다.
### inline-block

display: inline-block;

display: block;이 기본속성인데 이를 대체

블록은 한 줄을 다 차지하지만 인라인 블록은 자기 크기만큼 공간을 차지한다

정렬을 위해 폰트 0 등등 한다

글자가 안에 들어가면 베이스라인 위에 오려는 속성 때문에 이상해지는것을 해결해야한다. -> vertical-align: top;


### 셀렉터 이용해 css코드 양 줄이기

네비게이션 바 만들기

div 대신 nav 를 사용해보자 -> 기능은 div랑 똑같은데 알아보기 쉽게 하기 위해서 사용한다

section, footer등도 같다.

클래스 중복되는것들 전부 하나하나 다 주려면 복잡하고 귀찮다

.navbar>li: navbar 클래스 바로 아래 있는 li 포함

.navbar li: 모든 자식 li들 다 선택해서 적용

href="#" 주면 임시 링크 부여

<a> 태그에서 text-decoration: none; 주면 링크 밑줄 제거 가능

태그에 클래스 여러개 줄 수 있다. 띄어쓰기로 구분 가능

예시) <ul class="navbar content">


### button

border: none

position: relative; = 내 원래 위치를 기준으로 이동

static = 좌표이동 X

fixed = 현재 화면 기준 (상단 고정 메뉴나 우측 하단 사이트 이동 버튼 만들 수 있다)

absolute = 내 부모 태그를 기준으로 좌표이동 (부모 중 포지션 relative 가진 태그를 기준)

absolute 에서 좌우 정렬하기 left:0; right:0; margin: auto; width:xx px; 같이 속성 부여

포지션을 부여하면 공중에 뜸

### z-index

포지션 속성을 부여하면 요소들이 공중에 뜨게 되는데 어떤 것이 앞으로 올 것인가?

z-index 가 높을수록 앞으로 온다

### max-width

퍼센트 기호로 width를 설정하면 작은 모바일 레이아웃에서도 적당한 크기를 갖는 반응형 웹을 만들 수 있다

하지만 pc 에서 큰 화면에서는 %로 설정된 값에 맞추면 너무 요소가 커질 수 있어 최대 크기를 설정할 수 있다.

width 는 실제 박스 내부의 content 영역의 너비기 때문에 패딩, 보더 등을 주면 생각한 크기가 아닐 수 있다.

박스 사이즈를 콘텐트 영역이 아니라 패딩 보더를 전부 포함한 영역을 width 로 설정할 수 있는데

box-sizing: border-box; 로 설정 가능

### normalize

브라우저 호환성을 위해 설정

### form & input

<form> 태그 이용 </form>
