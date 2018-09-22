import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ScoreBoard from "./ScoreBoard";
import RollButtons from "./RollButtons";

const defaultProps = {
  currentFrame: 1,
  frameScores: []
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Bowling</h2>
        </div>
        <RollButtons />
        <ScoreBoard {...defaultProps} />
      </div>
    );
  }
}

export default App;
