import React from "react";

// componentDidMount() 함수를 사용하기 위해 class component 생성
class Detail extends React.Component {
  // Detail component를 rendering 후 잘못된 접근이면 home으로 redirect 시키기 위한 코드
  componentDidMount() {
    console.log(this.props);

    // Route에서 넘겨받은 props에 있는 location, history 객체를 불러온다.
    const { location, history } = this.props;

    // Link 태그에서 넘겨받은 state에 값이 없으면 home으로 redirect 시킨다.
    // 사용자가 직접 url 주소를 치고 잘못된 주소로 접근하면 state는 undefined가 된다.
    if (location.state === undefined) {
      history.push("/"); // root 경로로 redirect
    }
  }

  render() {
    // Route에서 넘겨받은 props의 location 객체 안의 state를 불러온다.
    const {
      location: { state },
    } = this.props;

    // state에 값이 있으면 코드를 return하고 componentDidMount() 함수를 실행
    if (state) {
      return (
        <div>
          <div>{state.title}</div>
          <div>{state.year}</div>
        </div>
      );

      // state에 값이 없으면 null을 return하고 componentDidMount() 함수를 실행
    } else {
      return null;
    }
  }
}

export default Detail;
