import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// Movie들을 랜더링할 함수 componet를 생성 후 props를 인자로 받는다.
function Movie({ title, year, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__date">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

// Movie component에서 사용할 prop들의 Type을 정의해준다.
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
