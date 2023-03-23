# 201930138이지원
## 강의날짜:03/23(4주차) <br>
### 학습내용: 
 jsx -- https://ko.reactjs.org/docs/introducing-jsx.html  
 jsx 문법   자바스크립트의 확장문법  
 jsx 속성  태그사용시 꼭 닫아야함   

--- 
## jsx의 역할  
1. jsx는 내부적으로 XML/HTML코드를 자바스크립트로 변환  
2. React가 createElement함수를 사용해 자동으로 자바스크립트로 변환해줌  
3. 만약JS작업시 직접 createElement함수를 사용해야함  
4. JSX는 가독성을 높이는 역할 (p.98/99)

## jsx의 장점  
코드가 간결해짐(가독성 up)  
injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강함

## jsx 사용법
모든 자바스크립트 문법 지원  
XML이나 html울 섞어서 사용  
HTML이나 xml에 자바스크립트 코들 사용하고 싶으면{} 사용(p.104)  



 



---
 강의날짜:<h2>03/16(3주차)</h2><br>
 학습내용(필수):<h2> <br>
 개발 환경 설정하기<br>
 node.js와 npm설치하기<br>
 node --version <--노드 버전 확인<br>
 npm -v <--npm 버전 확인<br>
 </h2>
------------
<h2>리액트란 무엇인가?<br></h2>
<b>리액트의 정의 </b><br>
<h3>사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리<h3><br>
리액트 개념정리<br>
- 복잡한 사이트를 쉽고 빠르게 만들고 관리하기 위해 만들어진 도구<br>
- SPA(Single Page Application)를 쉽고 빠르게 만들 수 있도록 해주는 도구<br>
<b>리액트의 장점</b><br>
1. 빠른 업데이트와 렌더링 속도<br>
<b>-Virtual DOM떄문에 가능</b><br>
- DOM(Document Object Model)이란 XML,HTML문서의 각 항목을 계층으로 표현하여 생성,변형 삭제할 수있도록 돕는 인터페이스<br>
- Virtual DOM은 기존 DOM조작이 비효율적이며 속도가 느려 고안된 방법<br>
- DOM은 동기식(전체부분 전송 ->속도 느림) Virtual DOM은 비동기식(바뀐부분[클릭한 부분]만 전송->속도 빠름)<br>
DOM은 트리구조 ex: head-> body->title->h1->....<br>

2.리액트의 모든 구조는 컴포넌트로 구성<br>
컴포넌트 구조는 재사용성이 뛰어남<br>
대표적인 컴포넌트 구조 웹사이트:https://www.airbnb.co.kr/<br>

3.재사용성<br>
- 반복적인 작업을 줄여줌<br>
- 유지보수가 용이<br>
- 재사용이 가능할려면 해당 모듈의 의존성이 없어야 함<br>
4.p.66<br>
5.모바일 앱 개발 가능
-리액트 네이비트 모바일 환경 UI 프레임워크를 사용하면 크로스 플랫폼 모바일 앱 개발 가능<br>

<b>리액트의 단점</b><br>
1.방대한 학습량<br>
2.높은 상태 관리 복잡도<br>
-state,<strong>component life cycle</strong>등의 개념 (둘다 class형 컴포넌트에서 사용)<br> 
<br>
CDN(ContentsDeliveryNetwork): https://ko.reactjs.org/docs/cdn-links.html<br>
<Br>
2. 강의날짜:<h2>03/09<h2><br>
3. 학습내용(필수):HTML<br>
-태그를 사용하요 웹사이트 구조를 만듦<br>
CSS<br>
-웹사이트의 레이아웃 글꼴 색상등의 디자인을 입하는 역활을 하는 언어<br>
JAVA SCRIPT<br>
-웹스크립트 동적구현 언어<br>
-정식명칭은 ECMAScript<br>
-자바스크립트의 대표적 자료형,연산자,함수<br>
4. 작성코드(선택)<br>
5. 최근 내용이 위에 오도록 작성<br>
6. 날자 별 구분이 잘가도록 작성 <br>