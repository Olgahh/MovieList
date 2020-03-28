import {
  ADD_MOVIE,
  DELETE_MOVIE,
  TOGGLE_MOVIE_WATCH
} from "../actions/actionTypes";
const initialState = {
  movies: [
    {
      movie_name: "Lion",
      watched: false
    },
    {
      movie_name: "Lion King",
      watched: false
    },
    { movie_name: "Cellular", watched: true }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      const newMovie = {
        movie_name: action.payload,
        watched: false
      };
      return {
        ...state,
        movies: state.movies.concat([newMovie])
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie !== action.payload)
      };
    case TOGGLE_MOVIE_WATCH:
      const movie = action.payload;
      movie.watched = !movie.watched;
      return {
        ...state,
        movies: [...state.movies]
        //new array
      };
    default:
      return state;
    // if we don't have the default then the entire initial state will fail to set up
  }
};
