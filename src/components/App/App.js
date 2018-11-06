import React, { Component } from "react";
import logo from "../../logo.svg";
import "./App.css";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import RollButtons from "../RollButtons/RollButtons";

const initialState = {
  currentFrame: 1,
  frameScores: [[]],
  totalScore: 0,
  gameOver: false
};

const handleClick = number => {
  console.log(number);
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Bowling</h2>
        </div>
        <RollButtons handleClick={handleClick} />
        <ScoreBoard {...initialState} />
      </div>
    );
  }
}

export default App;
