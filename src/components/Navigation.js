import React from "react";

// Link 태그를 만들기 위해 import
import { Link } from "react-router-dom";

// css 파일 import
import "./Navigation.css";

function Navigation() {
  return (
    // Link Component를 이용해 페이지가 새로고침 되지않는 link를 만들어주고
    // to props에 경로를 지정해준다.
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
