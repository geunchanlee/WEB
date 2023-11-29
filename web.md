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


### inline-block

display: inline-block;

display: block;이 기본속성인데 이를 대체

블록은 한 줄을 다 차지하지만 인라인 블록은 자기 크기만큼 공간을 차지한다

정렬을 위해 폰트 0 등등 한다

글자가 안에 들어가면 베이스라인 위에 오려는 속성 때문에 이상해지는것을 해결해야한다. -> vertical-align: top;