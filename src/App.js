// 파일에서 jsx를 사용하려면 React를 import 해주어야 한다.
// jsx = html문법을 Javascript내부에 작성한 것
import React from "react";

function Food({ fav }) {
  return <h2>I like {fav}</h2>;
}

const foods = ["noodle", "bergur", "rice", "pasta"];

// ReactDom에서 rendering 할 Component
function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foods.map((food) => (
        <Food fav={food} />
      ))}
    </div>
  );
}

export default App;
