import React from "react";
// import logo from "./logo.svg";
import "./App.css";

import WatchList from "./WatchList";
import AddMovie from "./AddMovie";
function App() {
  return (
    <div className="App">
      <header className="App-header mb-4">
        <h1 className="display-3">My Movies Library</h1>
      </header>
      <div className="container">
        <div className="row">
          <AddMovie />
          <div className="col">
            <WatchList watched={false} />
          </div>
          <div className="col">
            <WatchList watched={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
