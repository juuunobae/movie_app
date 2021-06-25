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
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
