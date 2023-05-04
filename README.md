# 201930138이지원
``` javascript
``` 
## 강의날짜:05/04(10주차)  
### 학습내용

## 챕터11 폼
### 학습내용
- 폼은 일반적으로 사용자로 부터 받기위한 양식에서 많이 사용됩니다
``` javascript
<form>
<label>
이름:
<input type="text" name="name"/>
</label>
<button type="submit">제출</button>
</form>
``` 
### 11.2 제어 컴포넌트
- 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트입니다. 
- 다음 코드는 사용자의 이름을 입력 받는 HTML폼을 리액트 제어 컴포넌트로 만든 것입니다.
``` javascript
function NameForm(pros){
    const[value,setValue]=useState('');
    const handleChange =(event)=>{
        setValue(event.target.value);
    }
    const handleSubmit=(event)=>{
        alert('입력한 이름:'+value);
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
        <label>
        이름:
        <input type="text" value={value} onChange={handleChange}/>
        </label>
        <button type="submit">제출</button>
        </form>
    )
    }
``` 
### 11.3 textarea 태그
- HTML에서는 textarea의 children으로 텍스트가 들어가는 형태입니다
``` javascript
<textarea>
안녕하세요,이렇게 텍스트가 들어갑니다
</textarea>
``` 
``` javascript
function RequestForm(pros){
    const[value,setValue]=useState('요청사항을 입력하세요');
    const handleChange =(event)=>{
        setValue(event.target.value);
    }
    const handleSubmit=(event)=>{
        alert('입력한 요청사항:'+value);
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
        <label>
        요청사항:
        <textarea value={value} onChange={handleChange}/>
        </label>
        <button type="submit">제출</button>
        </form>
    )
    }
``` 
### 11.4 select 태그
-select 태그도 textarea와 동일합니다
``` javascript
<select>
<option value="apple">사과</option>
<option value="banana">바나나</option>
<option selected value="grape">포도</option>
<option value="watermelon">수박</option>
</select>
``` 
### 11.5 File input 태그
- File input태그는 그 값이 읽기 전용이기 떄문에 리액트에서는 비제어 컴포넌트가 됩니다.
### 11.6 여러 개의 입력 다루기
``` javascript
function Reservation(props){
    const[havebreakfast,setHavebreakfast]=useState(true);
     const[numberOfGuest,setNumberOfGuest]=useState(2);
     const handleSubmit=(event)=>{
        alert('아침식사 여부:${haveBreakfast},방문객 수:$(numberOfGuest)');
        event.preventDefault();
     }
     return(
        <form onSubmit={handleSubmit}>
        <label>
          <input
          type="checkbox"
          checked={haveBeakfast}
          onChange={(event)=> {
            setHaveBreakfast(event.target.checked);
          }} />
      </label>
      <br />
      <label>
        방문객 수:
            <input type="number" value={numberOfGuest} 
        onChange={(event) => 
        setNumberOfGuest(event.target.value)} />
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
}
     
```
### 11.7 Input Null Value
- 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없습니다.
- 만악 value prop은 넣되 자유롭게 압력할 수있게 만들고 싶다면 값이 undefined또는 null을 넣어주면 됩니다.
```javascript
ReactDom.render(<input value="hi" />, rootNode);

setTimeout(function(){
  ReactDom.render(<input value={null} />, rootNode);
}, 1000);
```
## 챕터10 리스트와 키
### 학습내용
- 리스트는 자바스크립의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것
- 키는 각 객체나 아이템을 구분할 수있는 고유한 값을 의미
- 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링 할 수있습니다.  
### 여러 개의 컴포넌트 렌더링하기
- 에어비앤비의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있는 엘리먼트를 map()함수를 이용하여 렌더링 합니다.  
- 다음은 numbers배열에 들어있는 각각의 요소를 map()를 이용하여 하나씩 추출하여,2를 곱한후 doubled라는 배열에 다시 넣는 코드입니다.
``` javascript
const doubled=numbers map((number)=>number*2);
``` 
- 다음은 리엑트에서 map()함수를 사용한 예제입니다.
``` javascript
const numbers=[1,2,3,4,5];
const listItems=numbers.map((number)=>
<li>{number</li>});
``` 
- 이 코드는 number의 요소에 2를 곱하는 대신 li 태그를 결합해서 리턴하고있습니다.
- 리턴된 listItems는 ul태그와 결합하여 렌더링 됩니다.
``` javascript
ReactDom.render(
    <ul>
    <li>{1}</li>
    li>{2}</li>
    li>{3}</li>
    li>{4}</li>
    li>{5}</li>
    </ul>
    document.getElementById('root')
);
``` 
- 이 컴포넌트는 props로 받은 숫자를 number로 받아 리스트로 렌더링해줍니다.
``` javascript
function NumberList(props){
    const{numbers}=props;
    const listItems=numbers.map((number)=>
    <li>{number}</li>
    );
    return(
        <ul>{listItem}</ul>
    );
}
const numbers=[1,2,3,4,5];
ReactDOM.render(
    <numberList numbers={numbers}/>
    document.getElementById('root')
);

``` 
- 이코드를 실행하면 "리스트 아이템에 무조건 키가 있어야 한다"는 경고 문구가 나옵니다
- 경고문구가 나오는 이유는 각각의 아이템에 key props가 없기 때문입니다.
### 10.4 리스트의 키에 대해 알아보기
- 리스트에서의 키는 "리스트에서 아이템을 구별하기위한 고유한 문자열입니다."
- 이 키는 리스트에서 어떤 아이템이 변경,추가 또는 제거되었는지 구분하기 위해 사용합니다.
- 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됩니다.
- 리액트에서는 키를 명시적으로 넣어 주지 않으면 기본적으로 이 인덱스 값을 키값으로 사용
## 강의날짜:04/27(9주차)  
### 학습내용
## 챕터9 조건부 렌더링

``` javascript
function Greeting(props){
    const isLoggenIn =props.isLoggedIn;
    if(isLoggenIn){
        return<UserGreeting/>;

    }
    return <GuestGreeting/>;
}

``` 
- props로 전달 받은 isLoggenIn이 true이면 <UserGreeting/>을  
 false면<GuestGreeting/>을 return합니다  
 - 이와 같은 렌더링을 조건부 렌더링 이라고 합니다.
 ### 엘리먼트 변수
 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수입니다.  
 272page 코드처럼 state에 따라 button 변수에 컴포넌트의 객체를 저장하여 return문에서 사용하고있습니다.  
 ``` javascript
let button;
if(isLoggedIn){
    button=<LogoutButton onClick={handleLogoutClick}/>;
}else{
    button=<LoginButton onClick={handleLogoutClick}/>;
}
return(
    <div>
    <Greeting isLoggedIn={isLoggedIn}/>
    {button}
    </div>
   )

``` 
### 인라인 조건
- 필요한 곳에 조건문을 직접 넣어 사용하는 방법입니다.
1. 인라인 if  
- if문을 직접 사용하지 않고,동일한 효과를 내기위해 &&논리 연산자를 사용합니다.
- &&는 And연산자로 모든 조건이 참일때만 참이 됩니다. 
- 첫 번째 조간이 거짓이면 두번째 조건은 판단할 필요가 없습니다.단축평가.
``` javascript
true && expression ->expression
false && expression ->false
{unreadMessages.length>0 &&
<h2>
현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
</h2>
}
```
*판단만 하지 않는 것이고 결과 값은 그대로 리턴됩니다.  
인라인 if-else  
삼항 연산자를 사용합니다   
문자열이나 엘리먼트를 넣어서 사용할 수도 있습니다.
``` javascript
function UserStatus(props){
    return(
        <div>
        이 사용자는 현재 <b>{props.isLoggedIn?'로그인':'로그인하지 않은'}</b>상태입니다.
        </div>
    )
}
<div>
<Greeting isLoggedIn={isLoggedIn}/>
{isLoggedIn
?<LogoutButton onClick={habdleLogoutClick}/>
:<LoginButton onClick={habdleLoginClick}/>
}
``` 
### 컴포넌트 렌더링 막기
- 컴포넌트를 렌더링 하고 싶지않을 떄에는 null을 리턴합니다.
``` javascript
function WarningBanner(props){
    if(!props.warning){
        return null;
    }
    return(
        <div>경고!</div>
    );
}
``` 

## 챕터8(이벤트 핸들링)
DOM에서 클릭이벤트 처리
```javascript
<button onclick="activate()">
button
</button>
```
React에서 클릭 이벤트 처리하는 예제코드
``` javascript
<button onClick={activate}>
button
</button>
```  
- 둘의 차이점은 click의 c의 대소문자 차이(Camel case)  
- 전달하려는 함수는 문자열에서 함수 그대로 전달  
- 이벤트 발생시 해당 이벤트를 처리하는 함수를 "이벤트 핸들러(Event Handler)"라고 합니다.
또는 이벤트가 발생하는 것을 계속 듣고있다는 의미로 "이벤트 리스너(Event Listener)"라고 
부르기도 합니다.  
 ### 이벤트 핸들러 추가하는 방법은?
-  버튼을 클릭하면 이벤트 핸들러 함수인 handleClick()함수를 호출 하도록 되어 있습니다.
- bind를 사용하지 않으면 this.handleClick은 글로벌 스코프에서 호출되어,undefined로 사용할 수 없기 떄문입니다 
- bind를 사용하지 않을려면 화살표 함수를 사용하는 방법도 있습니다.
- 하지만 클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 이 내용은 참고만 합니다.
``` javascript
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={isToggleOn:true};
        //콜백에서 this를 사용하기 위해선 바인딩을 필수적으로 해야됨
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        thos.setState(prevState=>({
            isToggleOn:!prevState.isToggleOn
        }));
    }
    render(){
        return(
            <button onClick={this.handleClick}>
            {this.state.isToggleOn?'켜짐':'꺼짐'}
            </button>
        );
    }
}
``` 
- 클래스형을 함수형으로 바꾸면 다음 코드와 같습니다
``` javascript
function Toggle(props){
    const[isToggleOn,setIsToggleOn]=useState(true);
    //방법1.함수 안에 함수로 정의
    function handleClick(){
        setIsToggleON((isToggleOn)=>!isToggleOn);
    }
    //방법2. row function을 사용하여 정의
    const handleClick=()=>{
        setIsToggleOn((isToggeOn)=>!isToggleOn);
    }
    return(
        <button onClick={handleClick}>
        {isTOggleOn?"켜짐":"꺼짐"}
        </button>
    );
}
``` 
함수형에서 이벤트 핸들러를 정의하는 방법은 두가지입니다.
함수형에선this를 사용하지 않고 onClick에서 바로 HandleClick을 넘기면 됩니다.
### Arguments 전달하기
함수를 정의할 떄는 파라미터 혹은 매개변수  
함수를 사용할 떄는 Argument혹은 인자 라고 부릅니다.  
이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많습니다.  
``` javascript
<button onClick={(event)=>this.deleteItem(id,event)}>삭제하기</button>
<button onClick={this.deleteItem.bind(this,id)}>삭제하기</button>
``` 
위의 코드는 모두 동일한 역할은 하지만 하나는 화살표 함수를,다른 하나는 bind를 사용했습니다.  
event라는 매개변수는 리액트의 이벤트 객체를 의미합니다.  
두 방법 모두 첫번째 매개변수는 id이고 두 번째 매개변수로 event가 전달됩니다     
첫 번째 코드는 명시적으로 event를 매개변수로 넣어 주었고 ,  
두 번째 코드는 id이후 두번째 매개변수로 
event가 자동 전달 됩니다.(이 방법은 클래스형에서 사용하는 방법입니다.)  
함수형 컴포넌트에서 이벤트 핸들러에 매개변수를 전달할 때는 p.254 코드와 같이합니다.
``` javascript
import React, { useState } from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;
``` 
Toolbar

```js
import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}

            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;
```
LandingPage
```js
import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
        </div>
    );
}

export default LandingPage;
```
## 강의날짜:04/13(7주차)  
### 학습내용
## 챕터7(훅)
 - 클래스형 컴포넌트에서는 생성자에서 state를 정의 setState()함수를 통해 업데이트  
 - 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하기 위해 추가된 기능이 훅(Hook)  
 - 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수있게 되었습니다.  
 - Hook이란 state와 생명주기 기능에 갈고리 걸어 원하는 시점에 정해진 함수를 실행되도록 만든함수
 - 훅의 이름은 모두 'use'를 사용
## useState  (p.210)
- useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook입니다.  
- 증가 시킬 수 있지만 증가할떄는 재랜더링 x  
- useState() 함수 사용법
1. state의 이름(변수명)이고,
2. state의 set함수, 즉 state를 업데이트 하는 함수  
3. 함수를 호출 할 때 state의 초기값을 설정
4. 함수의 리턴 값은 배열의 형태
``` javascript
import React,{useState}from"react";
function Counter(props){
    const[count,setCount]=useState(0);
    return(
        <div>
        <p> 총{count}번 클릭했습니다</p>
        <button onClick={()=>setCount(count+1)}>
        클릭
        </button>
        </div>
    );
}
``` 
## useEffect(p.212) ☆
- useState와 함께 많이 사용하는 Hook
- 함수는 sideeffect를 수행하기위한것
- sideEffect는 개발자가 의도하지않은 코드가 실행되면서 버그가 발생하는 것

useEffect 함수 사용법
1. 파라미터는 이팩트 함수가 들어가고 두번째 파라미터는 의존성 배열이 들어감
``` javascript
useEffect(이펙트함수,의존성배열);
```
2. 의존성 배열은 이펙트가 의존하고 있는 배열로 배열 안에 있는 변수 중 하나라도 값이 변경되엇을때 이펙트 함수가 실행  
3. 이펙트 함수는 첨 컴포넌트가 렌더링 된 이후,그리고 재 렌더링 이후에 실행됨
4. 이펙트함수가 마운트와 언마운트 될때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됩니다. 이경우 props나 state에 있는 어떤 값에도 의존하지 않기때문에 여러 번 실행되지 않습니다.   

useEffect((){})  
컴포넌트가 마운트 된이후  
의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행  
의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운시에 단 한 번씩만 실행됨  
의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨  
return  
컴포넌트가 마운트 해제되기전에 실행}
}  
## useMemo
- useMemo()혹은 Memoizde value를 리턴하는 훅  
- 이전계산값을 갖고 있기때문에 연산량이 많은 반복을 피할수 있음  
- 이 훅은 렌더링이 일어나는 동안 실행됩니다.  
- 띠라서 렌더링이 일어나는 동안 실행되서는 안될 작업을 넣으면 안됩니다.  
- 예를 들면 useEffect에서 실행되어야 할 사이드 이팩트 같은것  
``` javascript
const memoizedValue =useMemo(
    ()=>{
        return conputeExpensiveValue(의존성 변수1,의존성 변수2);
    },
    [의존상 변수1,의존성 변수2]
    
);
```
``` javascript
const memoizedValue =useMemo(
    ()=> conputeExpensiveValue(a,b)
);
``` 
## useCallback
- useMemo와 유사한 역할
- 차이점은 usememo는 값, useCallback은 함수를 사용  
## useRef
- useRef()훅은 레퍼런스를 사용하기 위한훅
- 특정 컴포넌트에 접근할 수있는 객체를 의미
- useRef()혹은 바로 이 레퍼런스 객체를 반환  
- 레퍼런스 객체에는 .current란 속성이 있는데,이것은 참조하고있는 엘리먼트를 의미
``` javascript
const refContainer=useRef(초깃값);

``` 
- 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지됨  
- 즉,컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미
## 훅의 규칙  
### 1-1.  무조건 최상의 레벨에서만 호출  
1-2. 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됨  
1-3. 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 함.

### 2-1. 리액트 함수형 컴포넌트에서만 훅을 호출  
2-2. 일반자바스크립트 함수에서 훅 호출 X  
2-3. 리액트의 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출
## 커스텀 훅 추출하기  
- 두개의 자바스크립트 함수에서 하나의 로직을 공유하도록 하고 싶을 때 새로운 함수를 하나 만드는 방법을 사용합니다  
- 리액트 컴포넌트와 훅은 모두 함수이기 때문에 동일한 방법을 사용할 수 있습니다.  
- 아름을 use로 시작하고, 내부에서 다른 훅을 호출하는 자바스크립트 함수를 만들면 됩니다.
- 한가지 주의 할점은 일반 컴포넌트와 마찬가지로 다른훅을 호출하는 것은 무조건 커스텀 훅의 최상의 레벨서 사용
- 
---
## 강의날짜:04/06(6주차)
### 학습내용  
## 컴포넌트 추출  (p.157)
- 복잡한 컴포넌트를 쪼개 여러개로 나눌수 있음  
- 큰 컴포넌트에서 일부 추출해 새로운 컴포넌트를 만드는 것  
    Comment.jsx/CommentList.jsx  
    jsx파일로 배포 x public에서만 배포됨 
 ## State와 생명주기(6장)  
### state란?  
- 리액트 컴포넌트의 상태를 의미함  
- 상태의 의미는 컴포넌트의 데이터(변경가능한 데이터)  
- State가 변하면 다시 랜더링 되기 때문에 렌더링과 관련된 값만 state에 포함 시켜아함  
### State의 특징  
- 자바스크립트 객체  
ex) LikeButton은 class의 컴포넌트임  
constructor는 생성자 이고 그안에 있는 this.stae가 현state임  
*함수형에서는 useState()라는 함수 사용
``` javascript
class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            liked:false
        }
    }
}
```
state는 변경가능하다고 했지만 직접수정 안됨  
state를 변경하고자 할 때는 setState()함수 사용
``` javascript
//state를 직접 수정(잘못된 사용밥)
this.state={
    name:`Inje`
}
```
``` javascript
//state를 직접 수정(옳바른 사용밥)
this.setState=({
    name:`Inje`
});
```
데이터전달 2가지  
props,state 

### 생명주기(p.183)
 - 생명주기는 컴포넌트 생성시점, 사용 시점,종료 시점을 나타내는 것  
 - Constructor가 실행되면서 컴포넌트 생성  
 - 컴포넌트가 소멸하기 전까지 여러 번 랜더링 함  
 - 랜더링은 props,setState(),forceUpdate()에 의해 상태가 변경되면 이루어짐  
 - 랜더링이 끝나면 componentDidUpdate()함수 호출
---

## 강의날짜:03/30 (5주차)

### 학습내용
## 4장 엘리먼트에 대해 p.118  
https://ko.reactjs.org/docs/rendering-elements.html
1. 앨리먼트의 정의   
 -엘리먼트는 리액트 앱을 구성하는 가장 작은 요소  
 -리액트 앨리먼트는 virtual DOM형태를 취하고 있음  
 
 2. 엘리먼트의 생김새  
 -리액트 엘리먼트는 자바스크립트 객체의 형태로 존재  
 -이 객체는 마음대로 변경 할 수 없는 불변성을 가지고 있음  
 -첫번쨰 매개변수에는 type 태그가 들어가면 말그대로 표현   
 -두번쨰 매개변수 props prps는 읽기전용   
 -세번쨰는 children 

3. 엘리먼트의 특징  
-불변성(한번 생성된 앨리먼트의 children이나 attributes(속성)을 바꿀수 없음)   
만약 내용이 바뀌면 새로운 엘리먼트를 생성해야됨  
새로운 엘리먼트를 생성후 바꿔치기 해야함(p.127 그림)  
4. 엘리먼트 랜더링하기  
-렌더링을 위해 ReactDoM의 render()사용   
5.랜더링된 앨리먼트 업데이트하기  
-새로운 엘리먼트를 생성후 바꿔치기 해야함
---
## 5장 컴포넌트에 대해  
리액트 컴포넌트는 어떠한 속성들을 입력받아 그에 맞는 리엑트 엘리먼트를 생성하여 리턴해줌  
---
### props에 대해 알아보기 
1. props의 개념  
props는 property의 준말  
컴포넌트 속성임  
컴포넌트에 어떤 속성을 넣느냐에 따라 속성이 다른 엘리먼트가 출력됨  
props는 컴포넌트에 전달 할 다양한 정보를 담고있는 javascript의 객체  
2. props의 특징  
읽기전용  
속성이다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됨  
pure 함수 vs.impure함수  
pure함수는 함수 내부에서도 변하지 않는 함수  
impure함수는 함수 내부에서 변하는 함수  

### 컴포넌트 만들기  
1. 컴포넌트의 종류  
 함수 컴포넌트  
 클래스형 컴포넌트  
 2. 함수형 컴포넌트  
 props를 전달 받음

 3. 클래스형 컴포넌트   
react에 있는 componen class로 부터 상속 받아 선언  
4. 컴포넌트 이름 짓기  
이름은 항상 대문자 시작  
*컴포넌트 파일 이름과 컴포넌트 이름은 같게 한다.
5. 컴포넌트의 렌더링  
welcom 호출 const element로 reactDOM안에있는 element로 이동(p.154그림)  
### 컴포넌트 합성  
컴포넌트 합성은 여러 개의 컴포넌트를 합쳐 하나의 컴포넌트를 만드는 것  
리액트에서 컴포넌트안에 또 다른 컴포넌트 사용가능  
복잡한 화면을 여러 개의 컴포넌트로 나누어 구현 가능  



## 강의날짜:03/23 (4주차) <br>
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