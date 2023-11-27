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
