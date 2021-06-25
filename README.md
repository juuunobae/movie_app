
# ReactJS App 

### ReactJS와 create-react-app을 사용하여 웹 서비스 만들기

## 목차
- [ReactJS App](#reactjs-app)
    - [ReactJS와 create-react-app을 사용하여 웹 서비스 만들기](#reactjs와-create-react-app을-사용하여-웹-서비스-만들기)
  - [목차](#목차)
- [Requirements](#requirements)
    - [nodeJS, npm, npx](#nodejs-npm-npx)
- [Install](#install)
  - [create-react-app으로 실행 하기](#create-react-app으로-실행-하기)
    - [install](#install-1)
- [Code](#code)
  - [Component](#component)
  - [Component 생성](#component-생성)
    - [Function Component](#function-component)
    - [Class Component](#class-component)
  - [Component 사용](#component-사용)
  - [Component Life Cycle API](#component-life-cycle-api)
    - [Mounting](#mounting)
    - [Updating](#updating)
    - [Unmounting](#unmounting)
  - [Props](#props)
    - [Props 사용하기](#props-사용하기)
    - [PropTypes](#proptypes)
  - [State](#state)
    - [State 정의](#state-정의)
    - [setState](#setstate)
  - [Data Rendering](#data-rendering)
  - [`Each child in a list should have a unique "key" prop` 에러 해결하기](#each-child-in-a-list-should-have-a-unique-key-prop-에러-해결하기)
- [Github 페이지에 배포하기](#github-페이지에-배포하기)
- [React Router Dom 라이브러리](#react-router-dom-라이브러리)
  - [Install](#install-2)
  - [초기화 및 구조 설정](#초기화-및-구조-설정)
  - [패키지 적용](#패키지-적용)
    - [Navigation Component 생성](#navigation-component-생성)
      - [Link](#link)
    - [App Component 생성](#app-component-생성)
      - [BrowserRouter](#browserrouter)
      - [Route](#route)
    - [Route Props](#route-props)
    - [Route props 사용](#route-props-사용)
    - [props object](#props-object)
      - [**History**](#history)
      - [**Location**](#location)
      - [**match**](#match)

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

# Install
## create-react-app으로 실행 하기
- create-react-app
  - 리액트는 ES의 최신 문법을 사용하는 경우가 존재하지만, 최신 문법을 지원해주지 않는 브라우저 때문에 webpack이나 babel등과 같은 작업 환경을 구축해야 한다.
  - 리액트 개발을 바로 시작할 수 있도록 위와 같은 작업환경(프로젝트 구조 작업, 설정 작업 등)을 하나의 명령을 실행해서 React Web App을 Set up 할 수 있게 해준다.
  
### install
- 터미널에 `npx create-react-app my_app`을 입력하고 설치한다.
  - [my_app] = 원하는 프로젝트 폴더명
     ```
        cd my_app
        npm start   
    ``` 
  - 프로젝트 폴더로 이동 후 로컬에서 실행할 수 있다.

# Code

## Component
- HTML을 반환하는 함수
- 컴포넌트를 사용하여 UI를 독립적이고 재사용 가능한 부분으로 분리하고 각 부분을 독립적으로 생각할 수 있다.
- 임의의 입력(props)을 받아들이고 어떤 게 화면에 나타나야 하는 지를 설명하는 리액트 요소를 반환한다.

## Component 생성
- 새로운 파일을 만들어서 생성해도 되고, App.js에서 생성해도 된다.
- Component의 이름은 대문자로 시작한다. 

### Function Component
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

### Class Component
- class component는 return을 가지지 않는다.
- App Component는 React Component에서 확장된 Component이며, React Component가 가지고 있는 기능들을 App Component에서도 수정 및 사용할 수 있다.
- class component는 항상 render method를 실행한다.
- class component에서는 state를 사용할 수 있다.
```jsx

    // App.js

    import React from 'react';

    class App extends React.Component {
        render() {
            return (
                <h1>Im a class Component</h1>
            )
        }
    }
```

> Funtion Component는 function이고 무언가를 return하고 스크린에 표시된다.<br/>
> Class Component는 class이고, react Component로 부터 확장되고 render method를 이용해 screen에 표시된다.

## Component 사용
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

## Component Life Cycle API
- component가 브라우저에서 나타날 때, 사라질 때, 업데이트 될 때 호출되는 API이다.]

### Mounting
- 생성될 때
  - constructor()
    - react의 기능은 아니고 javascript에서 class가 만들어지면 실행되는 메서드이다.
    - component가 mount(생성)되기 전에 호출된다.
    - `this.state`에 객체를 할당하여 지역 state를 초기화와 인스턴스에 이벤트처리 메서드를 바인딩 목적으로 사용된다.
    - `React.Component`를 상속한 component의 생성자를 구현할 때에는 먼저 `super(props)`를 호출해야 한다.
  
  - render()
    - class component에서 반드시 구현되어야하는 유일한 메서드이다.
    - 작성한 jsx를 html로 변환해 실제 브라우저에 rendering한다.
  
  - componentDidMount()
    - component가 mount된 직후에 호출된다.
    - render() 메서드가 실행된 후에 실행된다.
    - DOM 노드가 있어야 하는 초기화 작업은 이 메서드에 작성하면 된다.
    - 외부에서 데이터를 불러와야 한다면, 네트워크 요청을 보내기 적절하다.
  
### Updating 
- 업데이트 될 때
  - componentDidUpdate()
    - setState가 실행될 때, 즉 props의 업데이트가 완료되면 실행되는 메서드이다.
    - component가 갱신되었을 때 DOM을 조작하거나, 이전과 현재 props를 비교하여 네트워크 요청을 보내는 작업을 할 때 이 메서드를 사용한다.

### Unmounting
- 사라질 때
  - componentWillUnmount()
    - component가 mount 해제되어 제거되기 직전에 호출된다.
    - 타이머 제거, 네트워크 요청 취소, componentDidUpdate()내에서 생성된 구독 해제 등 필요한 모든 정리작업을 수행할 때 이 메서드를 사용한다.

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

### PropTypes
- 부모의 Component로 부터 전달 받은 props의 데이터의 유효성을 검증해 자식 Component에서 명시해 놓은 props type과 일치하는지 확인해주는 모듈
- 일치하지 않으면 console창에 에러 경고문이 띄워진다.
  
- `npm install prop-types`로 설치
```jsx

    // App.js

    import PropTypes from 'prop-types'

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

    // propTypes의 이름은 항상 propTypes여야 한다.
    Component.propTyeps = {
        // key = props
        // velue = 데이터의 타입을 명시
        // ** isRequired = 필수로 제공되어야 하는 props
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
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
```
> [PropTypes](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)에 여러 데이터타입을 명시해줄 수 있다.

## State
- state는 object이다.
- component에서 동적인 데이터를 다룰 때 사용된다.
### State 정의
- state객체를 생성한 후 그 안에 동적 데이터를 정의 한다.
```jsx
    class App extends React.Component {
        state = {
            count: 0,
        };
        
        render() {
            return (
                // state안에 있는 count를 불러오는 코드
                <div>
                    <h1>The number is {this.state.count}</h1>
                </div>
            );
        }   
    }

    export default App; 
```

### setState
- state에 있는 데이터를 직접 변경하지 못한다.
- state에 있는 값을 바꾸기 위해서는 setState가 필욛하다.
- setState함수가 호출되면 컴포넌트가 리렌더링된다.
```jsx
    class App extends React.Component {
        state = {
            count: 0,
        };

        // 이벤트 콜백함수를 생성한 후 내부에 setState method를 사용한다.
        // state는 객체이기 때문에 setState method의 인자는 객체나 함수형태로 줄 수 있다.
        // 객체나 함수안에 변경할 데이터와 값을 넣는다.

        // setState를 객체로 사용

        // add = () => {
        //     this.setState({
        //         count: this.state.count + 1,
        //     })
        // }


        // setState를 함수로 사용
        // 함수의 인자는 현재의 state객체를 전달해준다.

        add = () => {
            this.setState(current => ({
                count: current.count + 1,
            }))
        }

        minus = () => {
            this.setState(current => ({
                count: current.count - 1,
            }))
        }
        
        render() {
            return (
                <div>
                    <h1>The number is {this.state.count}</h1>
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.minus}>Minus</button>
                </div>
            );
        }   
    }

    export default App; 
```


## Data Rendering
- 배열을 Component로 변환해서 Component 여러개를 rendering한다.
- .map 메소드 사용하기
```jsx

    // App.js

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

    // 첫번 째 방법

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

## `Each child in a list should have a unique "key" prop` 에러 해결하기
- 리액트에서 배열을 랜더링할 때 고유한 key prop이 꼭 필요하다.
- 데이터를 추가할 때마다 고정적인 고유 값을 부여해주면 된다.
- 데이터베이스에 데이터를 추가하면 주로 해당 데이터를 가리키는 고유 id가 있고, 그 고유 id를 key prop으로 사용하면 된다.
  
```jsx

    // 각 
    const people = [
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

# Github 페이지에 배포하기
1. `npm i gh-pages` 설치
2. package.JSON파일에 `homepage` 값 생성 (소문자로 작성)
    ```json
        {
            "hompage": "https://{username}.github.io/{projectname}/"
        }
    ```
3. package.JSON파일의 `script`에 명령어 추가
    ```json
        "script": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            // 아래 명령어 2개 추가
            "deploy": "gh-pages -d build",
            "predeploy": "npm run build"
        }
    ```
    - `npm run build` 명령어는 build 폴더를 우리에게 제공한다.
    - `gh-pages -d build` 명령어는 build 폴더를 upload 한다.
4. 터미널에 `npm run deploy` 실행
    - deploy 명령어를 호출하면 predeploy가 자동으로 실행된다.
    - `npm run deploy` 명령어를 호출하면 predeploy(`npm run build`)가 먼저 실행되면서 build 폴더를 생성하고 그 다음deploy(`gh-pages -d build`)가 실행되면 build 폴더를 upload한다.

# React Router Dom 라이브러리
- 웹에서 사용하는 리액트 라우터이며 네비게이션을 만들어 준다.
  - Routing
    - URL주소에 따라 다른 뷰를 보여주는 것
- React의 SPA 구현에 가장 많이 사용되는 패키지이다.
  - SPA(Single Page Application)
    - 페이지가 1개인 Application
    - 화면의 구성요소들이 다시 로드가 되어도 변경되지 않은 부분들은 그대로 유지한 채 변경된 부분의 데이터만 수정하는 웹사이트
  - React로 SPA를 구현한다는 것은 해당 요청에 맞는 Component만 라우팅하여 부분적으로 rendering 하는 것을 의미한다.

## Install
- `npm install react-router-dom`으로 패키지 설치

## 초기화 및 구조 설정
- 디렉토리 생성
  - `src/components`: 컴포넌트들이 있는 디렉토리
  - `src/routes`: 각 라우트들이 있는 디렉토리
  
## 패키지 적용

### Navigation Component 생성
- 어떠한 URL로 접근하기 위한 `Link`태그를 담은 Navigation Component를 새로운 파일에 만들어준다.
- URL경로를 지정하고 해당 URL로 접근 시 화면에 rendering할 Component를 설정해준다.
- `react-router-dom` 패키지에서 `Likn` component를 import 한다.
```jsx

    // src/components/Navigation.js

    import React from 'react';
    import { Link } from 'react-router-dom';

    function Navigation(){
        // 새로고침되는 a태그와 href속성대신 Link와 to를 사용해 경로를 지정해준다.
        // Link와 to는 DOM에 생성될 때 a태그와 href로 생성된다.
        return (
            <div>
                <Link to='/'>Home</Link>
            </div>
        )
    }

    export default Navigation
```

#### Link
- 클릭하면 해당 URL로 이동하는 과정에서 새로 불러오지 않고 `History API`만 사용하여 페이지 주소만 변경해준다.
- Router Component안에서만 동작한다.

### App Component 생성
- App Component에 Router를 설정해준다.
- Router를 사용하기 위해 `react-router-dom` 패키지에서 `BrowserRouter`와 `Route`를 component를 import 해주고 앞서 만든 Navigation component도 import해준다.
```jsx
    
    // src/App.js

    import React from 'react';
    import { BrowserRouter, Route } from 'react-router-dom';
    import Navigation from '../components/Navigation';
    import Home from './routes/components/Home'
    import About from './routes/components/About'

    // class Component를 사용해도 된다.
    function App() {
        // Navigation Component는 Router Component안에 작성해주어야 한다.
        return (
            <BrowserRouter>
                <Navigation />
                <Route exact path='/' component={Home} />
                <Route paht='/about/:id' componrnt={About}>
            </BrowserRouter>
        )
    }

    // Path는 URL 경로를 지정하는 것이고, component는 해당 URL로 접근할 시 보여주게 될 Component이다.
    // exact는 지정한 URL 경로와 정확히 일치해야 해당 Component를 보여주는 것이다.

    export default App
```

#### BrowserRouter
- 페이지를 새로고침하지 않고 주소를 변경할 수 있게 해준다.

#### Route
- path 프로퍼티의 URL주소에 따라 그에 해당하는 Component를 보여주는 routing 기능을 가진 component이다.

> `Route`는 사용자가 어떤 URL로 접근하면 해당 component를 보여주는 것이고,
> `Link`는 사용자가 어떠한 URL로 접근할 수 있게 링크 태그(버튼)을 만들어 주는 것이다.</br>
> 즉, 사용자가 `Link`를 눌러서 어떠한 URL로 접근하게 되면 `Route`가 그에 해당하는 component를 보여주는 것이다.

### Route Props
- Link를 통해 해당 경로로 Routing될 때 Component에 props를 전달
- `Link` component에 `to` props를 문자열, 객체, 함수중 하나의 방식으로 작성해 Router로 넘겨줄 수 있다.
  - 문자열
    ```jsx
        <Link to="/about?sort=name" />
    ```
    - 경로, 검색, 해쉬 속성을 하나의 문자열로 링크를 생성
  
  - 객체
    - pathname: URL경로를 작성
    - search: 쿼리 매개변수를 문자열로 작성
    - hash: URL에 넣을 해쉬
    - state: URL에 할당된 Component로 전달되는 props
    ```jsx
        function App() {
            return (
                <BrowserRouter>
                    <Link 
                        to={{
                            pathname: `/about/${id}`,
                            search: '?sort=name',
                            hash: '#the-hash',  
                            state: {
                                name: 'a',
                                age: 25,
                            }
                        }}
                    />
                    <Route path='/about/:id' component={Component} />
                </BrowserRouter>
            )
        }
    ```
    - `:id` = :를 붙여 주면 해당 위치의 경로에 값을 넣어 파라미터를 전송할 수 있다.
  
  - 함수
    ```jsx
        <Link to={location => ({...location, pathname: '/about'})} />

        <Link to={location => `${location.pathname}?sort=name`} />
    ```

### Route props 사용
- `Link to`를 통해 전달 받은 props를 연결된 component에서 사용하려면
- function
    ```jsx

        // src/components/About.js

        import React from 'react';

        function About(props){
            console.log(props)

            return(
                <h1>This is Home Component</h1>
            ) 
        }
    ```
  
- class
    ```jsx
        
        /// scr/components/About.js

        import React from 'react';

        class About extends React.Component {
            render() {
                console.log(this.props);
                
                return(
                    <h1>This is Home Component</h1>
                )
            }
        }

    export default Home

    ```

### props object
- 전달받은 props에는 `history, location, match`가 담겨있다.

#### **History**
- 브라우저의 history와 유사하다. stack에 현재까지 이동한 url 경로들이 담겨있는 형태로 주소를 임의로 변경하거나 되돌아갈 수 있도록 해준다.</br></br>

- **length**: [number] 전체 history 스택의 길이
- **action**: [string] 최근에 수행된 action(PUSH, REPLACE or POP)
- **location**: [JSON object] 최근 경로 정보
- **push(path, [state])**: [function] 새로운 경로를 history 스택으로 푸시하여 페이지를 이동
- **replace(path, [state])**: [function] 최근 경로를 history 스택에서 교체아여 페이지를 이동
- **go(n)**: [function] history 스택의 포인터를 n번째로 이동
- **goBack()**: [function] 이전 페이지로 이동
- **goForward()**: [function] 앞 페이지로 이동
- **block(prompt)**: [function] history 스택의 PUSH/POP 동작을 제어

#### **Location**
- 현재 페이지의 정보를 가지고 있다. URL을 다루기 쉽게 쪼개서 가지고 있다.</br></br>

- **pathname**: [string] 현재 페이지의 경로명
- **search**: [string] 현재 페이지의 query string
- **hash**: [string] 현재 페이지의 hash
- **state**:

#### **match**
- <Route />의 'path'에서 정의한 것과 매치된 정보를 담고있다.