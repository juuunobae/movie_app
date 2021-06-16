#  ReactJS App
### ReactJS와 create-react-app을 사용하여 웹 서비스 만들기

# Requirements
### nodeJS, npm, npx
- nodeJS
  - Chorome V8 Javascript 엔진으로 빌드된 Javascript 런타임이다.
  - 이벤트 기반, 논 블로킹 I/O 모델을 사용해 가볍고 효율적이다.
- npm
  - Node Package Manader의 약자이다.
  - Javascript 패키지 매니저이고, NodeJS에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할을 하며 설치/관리를 수행할 수 있는 CLI를  제공한다.
- npx
  - Node Package Runner
  - npm 레지스트리에 올라가있는 패키지를 쉽게 설치하고 관리할 수 있도록 도와주는 일회성 CLI도구 이다.
  - 한번만 실행하고 싶을 때 사용한다.
  - 일회성
    - npm으로 패키지를 글로벌 전역으로 설치하게 되면 많은 잔여 파일들이 컴퓨터에 설치되지만 이를 한 번 실행된 후에는 스스로 제거가 되는 것

# install
## create-react-app으로 실행 한다.
- create-react-app
  - 리액트는 ES의 최신 문법을 사용하는 경우가 존재하지만, 최신 문법을 지원해주지 않는 브라우저 때문에 webpack이나 babel등과 같은 작업 환경을 구축해야 한다.
  - 리액트 개발을 바로 시작할 수 있도록 위와 같은 작업환경(프로젝트 구조 작업, 설정 작업 등)을 하나의 명령을 실행해서 React Web App을 Set up 할 수 있게 해준다.
  
### install
- 터미널에 `npx create-react-app my_app`을 입력하고 설치한다.
  - [my_app] = 원하는 프로젝트 폴더명
- ```
    cd my_app
    npm start   
  ``` 
    - 프로젝트 폴더로 이동 후 로컬에서 실행할 수 있다.

# Code

## Component
- HTML을 반환하는 함수
- 컴포넌트를 사용하여 UI를 독립적이고 재사용 가능한 부분으로 분리하고 각 부분을 독립적으로 생각할 수 있다.
- 임의의 입력(props)을 받아들이고 어떤 게 화면에 나타나야 하는 지를 설명하는 리액트 요소를 반환한다.

### Component 생성
- 새로운 파일을 만들어서 생성해도 되고, App.js에서 생성해도 된다.
- Component의 이름은 대문자로 시작한다. 
```jsx

    // Component.js

    import React from 'react';

    function Component () {
        return (
            <div>Component</div>
        )
    }

    export default Component
```
- jsx = html문법을 Javascript내부에 작성한 것이다.
- jsx를 사용하려면 React를 import 해야 한다.

### Component 사용
```jsx
    
    // App.js

    import React from 'react';
    import Component from './Component';

    function App() {
        return  (
            <div>Hello React!</div>
            <Component />
        )
    }

    export default App
```
- 우리가 만든 Component를 불러올 때는 import를 사용해서 불러와준다.
- Component안에 Component를 import해서 사용할 수 있다.

## Props
- 부모 Component에서 자식 컴포넌트에게 주는 값
- 자식 Component에서는 props를 받아오기만 하고 수정하지는 못한다.
### Props 사용하기
```jsx

    // App.js

    import React from 'react';

    // props는 객체이다.
    function Component(props) {
        return <div>I am {props.name}, {props.age} years old</div>
    }

    // 최신 문법으로는 아래와 같이 사용가능하다.
    // prarmeter를 객체로 받으면 {}안에 key값만으로 value의 값를 사용할 수 있다.
    function Component({ name, age }) {
        return <div>I am {name}, {age} years old</div>
    }

    function App() {
        return (
            <div>Hello React!</div>
            <Component name='juno' age=28 />
        )
    }

    export default App
```
- props는 자식 컴포넌트의 첫번 째 argument로 간다

## 데이터 렌더링
- 배열을 Component로 변환해서 Component 여러개를 rendering한다.
- .map 메소드 사용하기
```jsx

    // App.js

    // 첫번 째 방법
    const people = [
        {
            name: 'juno',
            age: 28
        },
        {
            name: 'a',
            age: 23
        },
        {
            name: 'b',
            age: 15
        },
        {
            name: 'c',
            age: 45
        },{
            name: 'd',
            age: 36
        },
    ]

    function Component({ name, age }) {
        return (
            <div> I am {name}, {age} years old</div>
        );
    }

    function App() {
        return (
            <div>
                {people.map((person) => (
                    <Component name={person.name} age={person.age} />
                ))}
            </div>
        );
    }

    // 두번 째 방법

    function Component({ name, age }) {
        return (
            <div> I am {name}, {age} years old</div>
        );
    }


    // 함수를 외부로 빼준다.
    function renderPeople(person) {
        return <Component name={person.name} age={person.age} />
    }

    function App() {
        return (
            <div>
                {people.map(renderPeople)}
            </div>
        );
    }
```

### `Each child in a list should have a unique "key" prop` 에러 해결하기
- 리액트에서 배열을 랜더링할 때 고유한 key prop이 꼭 필요하다.
- 데이터를 추가할 때마다 고정적인 고유 값을 부여해주면 된다.
- 데이터베이스에 데이터를 추가하면 주로 해당 데이터를 가리키는 고유 id가 있고, 그 고유 id를 key prop으로 사용하면 된다.
  
```jsx

    // 각 
    const people = []
        {
            id: 0,
            name: 'juno',
            age: 28
        },
        {
            id: 1,
            name: 'a',
            age: 23
        },
        {
            id: 2,
            name: 'b',
            age: 15
        },
        {
            id: 3,
            name: 'c',
            age: 45
        },{
            id: 4,
            name: 'd',
            age: 36
        },
    ]

    function Component({ name, age }) {
        return (
            <div> I am {name}, {age} years old</div>
        );
    }

    function App() {
        return (
            <div>
                {people.map((person) => (
                    // key prop을 부여 해주고 자식 Component에서 사용하지 않아도 된다.
                    <Component key={person.id} name={person.name} age={person.age} />
                ))}
            </div>
        );
    }

```