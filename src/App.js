// 파일에서 jsx를 사용하려면 React를 import 해주어야 한다.
// jsx = html문법을 Javascript내부에 작성한 것
import React from "react";
import axios from "axios";

// ReactDom에서 rendering 할 Component
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
