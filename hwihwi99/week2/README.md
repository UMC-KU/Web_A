 ## class
- index.html의 6번 div의 경우 lightbuld, orange 두개의 클래스를 모두 받는다.
- 클래스의 경우 같은 이름의 클래스를 한 파일 속 여러 곳에 사용할 수 있다.
- 나는 학생이자 알바생, 통학생이므로 여러가지 역할 즉, 클래스를 가질 수 있다.

 ## id
- id의 경우 한 파일에 하나씩만 쓰는 것을 권장합니다.
    - Q.  왜 id는 다 적용되긴하던데 하나의 아이디는 한 파일에서 한번만 사용되야할까?
- 나는 다양한 번호의 학번과 주민등록번호를 가질 수 없으므로!   

> class, id 참고
>- 6번 div의 경우 lightbule orange이렇게 되어있는데 이럴때는(style.css) 현재 lightbule가 적용된다.
왜냐하면 css는 위에서부터 아래로 적용되는데 lightbule가 아래에 있어서 이게 적용이 된 것이라서 
css에 아래에 구현되어 있는 부분이 구현됩니다.
>
>- 만약 한 태그안에 class, id가 다 포함되어 있다면 무엇을 적용해야 할까요?    
    - 여기에는 우선순위가 있습니다. 범위가 좁을 수록 높은 우선순위를 갖게되는데 우선순위가 높은 순으로 따져보면 id, 클래스, 태그순으로 적용됩니다.     
    - 하지만 어느곳이든 !important를 사용하면 다른 규칙이 무시되고0순위가 됩니다. 이것은 거의 사용하지 말자..

## 가상 선택자
hover : 마우스를 위에 올려놓았을 때
active : 마우스로 누르고 있을 때

div의 경우 focus를 적용할 수 없다.
-> 해당 부분을 누르면 적용됩니다.
 
## block element
- p태그처럼 한 블록을 다 차지하는 것을 의미
- p, div, ul, li, h1~h6
- height, weight속성이 적용됨

## inline element
- span태그처럼 본인의 텍스트만큼만 차지하는 것을 의미
- span, a, img, button
- height, weight속성이 적용되지 않음

## display 속성
- none, inline, block, inline-block
- inline -> block element를 inline element로 바꿈
- block -> inline element를 inline element로 바꿈
- none -> display를 없앤다.

## 반응형 웹 사이트
- 화면 크기에 따라 속성의 크기를 바꿔주기 위해서 em, rem, % 단위를 주곤 합니다.
- %는 높이, 너비를 조절할 때 주로 사용합니다.
- rem, em은 패딩이나 마진을 위해 주로 사용합니다.