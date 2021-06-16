import React from "react";
import ReactDOM from "react-dom";
// react앱을 최초 렌더링 하기위해 엔트리 포인트에서 쓰인다.
import App from "./App";
// App이라는 리엑트 컴포넌트를 import 하는 것

// 브라우저에 리액트 컴포넌트를 보여주기 위해서 ReactDom.render 함수를 사용한다.
// 첫번 째 파라미터는 렌디링 할 결과물이고, 두번 째 파라미터는 컴포넌트를 렌더링 할 DOM이다.
// id가 root인 태그에 App 컴포넌트를 렌더링하는 것
// 해당 태그는 public/index.html 파일에서 찾는다.
ReactDOM.render(<App />, document.getElementById("root"));
// react application은 한 번에 하나의 component만 rendering 할 수 있다.
// 새로운 component를 생성하면 App.js에 추가한다.
