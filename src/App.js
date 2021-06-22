// 파일에서 jsx를 사용하려면 React를 import 해주어야 한다.
// jsx = html문법을 Javascript내부에 작성한 것
import React from "react";
// API를 사용하기 위해서 axios를 설치 후 import 해준다.
import axios from "axios";
// 각 movie들을 랜더링할 Moive component를 import 해준다.
import Movie from "./movies";
import "./App.css";

// ReactDom에서 rendering 할 Component
class App extends React.Component {
  state = {
    isLoading: true, // API 응답이 완료되었는지 확인하는 변수
    movies: [], // API 요청으로 응답받은 Movies를 담을 배열
  };

  // moive list의 API를 요청하는 함수
  getMovies = async () => {
    // axios로 API요청을 보내고 받은 데이터중에 필요한 부분을 ES6문법으로 필요한 movies배열을 사용하는 코드
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    // API요청으로 얻은 데이터를 setState로 state를 변경해준다.
    // API요청으로 얻은 movies 배열을 state에서 정의한 movies 배열에 담는다.
    // 요청이 끝나서 로딩도 끝났기 때문에 isLoading를 false로 바꿔준다.
    this.setState({ movies, isLoading: false });
  };

  // component가 생성된 후 실행될 comnentDidMount를 생성해 API요청을 보낼 함수를 작성해준다.
  // render함수가 실행된 후에 componentDidMount가 실행될 것이고, 그 안에 작성되어 있는 코드인 getMovies 함수를 실행시킬 것이다.
  componentDidMount() {
    this.getMovies();
  }

  // 브라우저에 rendering할 코드 작성
  render() {
    // state에 정의한 변수들을 불러온다.
    const { isLoading, movies } = this.state;
    // isLoading이 true이면(API 응답이 아직 완료되지 않았을 때) 'Loading...'을 보여주고,
    // isLoadingdl false이면(API 응답이 완료되었을때) movies.map을 실행시킨다.
    // 브라우저에 보여줄 API데이터들을 props로 Movie component에 넘겨준다.
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
