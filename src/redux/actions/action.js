import { ADD_MOVIE, DELETE_MOVIE, TOGGLE_MOVIE_WATCH } from "./actionTypes";

export const toggleMovieWatch = movie => {
  return {
    type: TOGGLE_MOVIE_WATCH,
    payload: movie
  };
};
export const addMovie = movieName => {
  return {
    type: ADD_MOVIE,
    payload: movieName
  };
};

export const deleteMovie = movie => {
  return {
    type: DELETE_MOVIE,
    payload: movie
  };
};
