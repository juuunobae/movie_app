import React from "react";

// Router를 만들기 위해 import
import { HashRouter, Route } from "react-router-dom";

// 영화 목록을 보여줄 Home Component import
import Home from "./routes/Home";

// 사이트에 대한 정보를 보여줄 About Component import
import About from "./routes/About";

// 페이지의 Navigation Component import
import Navigation from "./components/Navigation";

// 각 영화의 세부 페이지를 보여줄 Detail Component import
import Detail from "./routes/Detail";

// css 파일 import
import "./App.css";

function App() {
  // HashRouter 태그 안에 Navigation과 Route Component를 호출해준다.
  // Navigation Component에는 Link Component를 호출하고 있다.
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      {/* 예를 들어 사용자가 한 영화(Link 태그)를 클릭하면 movie/{id}로 접근을 할 것이고 
          Route의 /movie/:id가 /movie/{id}로 인식하여 Detail Component를 연결시켜 줄 것이다.
       */}
    </HashRouter>
    // root경로의 Route에는 exact로 하위 경로를 중복 rendering하지 않게 하고 Home Component를 연결한다.
    // /about으로 url 요쳥이 들어오면 About Component로 연결한다.
    // /movie/:id로 url 요쳥이 들어오면 Dtaile Component로 연결하고,
    // :(콜론)은 동적 라우팅을 할 때 path앞에 붙여 변수로 사용되게 한다.
  );
}

export default App;
