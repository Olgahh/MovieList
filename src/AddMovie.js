import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovie } from "./redux/actions";
class AddMovie extends Component {
  state = {
    movieName: ""
  };

  render() {
    return (
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          placeholder="Movie Name..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={event => this.setState({ movieName: event.target.value })}
          value={this.state.movieName}
        />
        <div
          className="input-group-append"
          onClick={() => {
            if (this.state.movieName) {
              this.props.addMovie(this.state.movieName);
              this.setState({ movieName: "" });
            }
          }}
        >
          <button className="btn btn-info" id="inputGroup-sizing-lg">
            Add
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: movieName => dispatch(addMovie(movieName))
  };
};
export default connect(null, mapDispatchToProps)(AddMovie);
