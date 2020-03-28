import React from "react";
import { connect } from "react-redux";
import { deleteMovie, toggleMovieWatch } from "./redux/actions";

const MoviesRow = props => {
  const movie = props.movie;
  return (
    <li
      class="list-group-item d-flex justify-content-between"
      key={movie.movie_name}
    >
      {movie.movie_name}
      <div>
        <button
          type="button"
          class="btn btn-info mr-1 "
          onClick={() => props.toggleMovieWatch(movie)}
        >
          {movie.watched ? "Unwatched" : "Watched"}
        </button>
        <button
          type="button"
          class="btn btn-danger  "
          onClick={() => props.deleteMovie(movie)}
        >
          DELETE
        </button>
      </div>
    </li>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    toggleMovieWatch: movie => dispatch(toggleMovieWatch(movie)),
    deleteMovie: movie => dispatch(deleteMovie(movie))
  };
};
export default connect(null, mapDispatchToProps)(MoviesRow);
