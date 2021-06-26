import React from "react";

// Link 태그를 만들기위해 import
import { Link } from "react-router-dom";

// Props의 type을 지정해주기 위해 import
import PropTypes from "prop-types";

// css 파일 import
import "./Movie.css";

// Movie들을 랜더링할 함수 componet를 생성 후 props를 인자로 받는다.
function Movie({ id, title, year, summary, poster, genres }) {
  return (
    // 각 영화들에 따라 다른 세부페이지를 보여주기 위해 그에 해당하는 각각의 데이터들을 to props로 전달한다.
    // pathname에는 영화 데이터들의 id값을 넣고, state에는 필요한 데이터들을 넣어 Route로 넘겨준다.
    // 사용자가 클릭을 하면 그 영화 데이터의 id값을 path에 넣어 Route에게 요청을 할 것이다.
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          title,
          year,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__date">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li className="genres__genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

// Movie component에서 사용할 prop들의 Type을 정의해준다.
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
