### JS코드를 내가 작성할 HTML 파일의 아래에 작성하자.


### UI 만드는 스텝

1. HTML/CSS로 디자인을 미리 만들기
2. JS로 만든 디자인을 보여주기

onclick 속성 안에 자바스크립트 코드를 작성해줄 수 있다.

### function

> 긴 코드를 짧은 단어로 축약할 수 있다.

간결한 이름으로 작성하고, 여러 단어라면 카멜케이스로 작성

괄호 안에 매개변수 넣을 수 있다.

코드 실행할 때 매개변수(parameter) 를 넣어 실행해 한 함수로 여러 기능 실행 가능함

파라미터 2개 이상 사용도 가능하다.

함수에서 id 가 아닌 class 이름으로 찾아 쓸 수도 있다.

getElementsByClassName('class')[0]

이렇게 사용할 때는 클래스 이름이 중복될 수 있기 때문에 인덱싱[0]을 통해 위에서부터 몇 번째 요소인지 명시해야 한다.

이 외에도 여러가지 요소 찾기 문법이 있음.

### EventListener

알림창 끌때 onclick 을 버튼에 부여하지 않고 이벤트리스너를 사용해서도 가능.

이벤트 = 클릭, 키입력, 스크롤, 드래그 등

이벤트리스너 안에 있는 function == 함수 파라미터 자리에 들어가는 콜백 함수


### Bootstrap

Bootstrap을 설치해 버튼, 탭, 메뉴등을 편하게 불러와 사용할  수 있다.

class 탈부착기능 이용가능

### querySelector()

요소 찾을때 지금까지 사용한 getElementById()와 다른 방법으로 찾는 셀렉터

css셀렉터 문법으로 사용가능하다.

> querySelector('#test1')

> querySelector('.navbar')

.으로 클래스, #을 써서 id

### jQuery

라이브러리를 사용해서 읽고 쓰기 쉽게 코드 짤 수 있다.

$('') 처럼 $로 찾으면 jQuery 함수만 뒤에 붙일 수 있다.

on = addEventListener

### CSS UI animation 만들기

one-way animation

A -> B 로 이동하는 애니메이션

1. 시작 전 스타일
2. 최종 스타일
3. js로 원할 때 최종스타일로 변경시키는 코드
4. transition 추가