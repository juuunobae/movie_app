// 파일에서 jsx를 사용하려면 React를 import 해주어야 한다.
// jsx = html문법을 Javascript내부에 작성한 것
import React from "react";
import ProtoType from "prop-types";

// ReactDom에서 rendering 할 Component
class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };

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
