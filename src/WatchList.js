import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import MoviesRow from "./MoviesRow";

class WatchList extends Component {
  state = {
    query: ""
  };

  searchMovies = event => this.setState({ query: event.target.value });

  render() {
    const watchList = this.props.movies
      .filter(
        movie =>
          movie.watched === this.props.watched &&
          movie.movie_name
            .toLowerCase()
            .includes(this.state.query.toLowerCase())
        //XOR
        //weather or not this particulr movie is wached
        // if (this.props.watched && !movie.watched) return true;
        // if (!this.props.watched && movie.watched) return true;
      )
      .map(movie => <MoviesRow movie={movie} key={movie.movie_name} />);
    return (
      <div>
        <div className="d-flex justify-content-between">
          <p>
            {this.props.watched ? "Watched" : "Watchlist"}
            <span class="badge badge-primary badge-pill ml-3">
              {watchList.length}
            </span>
          </p>
        </div>
        <ul class="list-group list-group-flush border px-4">
          <li class="list-group-item d-flex justify-content-between">
            <div className="input-group input-group-sm mb-3 ml-auto">
              <input
                className="form-control"
                type="text"
                placeholder="Search here ..."
                onChange={this.searchMovies}
              />
            </div>
          </li>

          {watchList.length === 0 ? "No movies found" : watchList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.moviesState.movies
  };
};

export default connect(mapStateToProps)(WatchList);
