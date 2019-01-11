import React, { Component } from "react";
import { connect } from 'react-redux';
import logo from "../../logo.svg";
import "./App.css";
import { addScore, resetGame } from '../../actions/index';
import ScoreBoard from '../../components/ScoreBoard/ScoreBoard';
import RollButtons from "../../components/RollButtons/RollButtons";

class App extends Component {
  render() {
    const { handleRoll, handleResetGame, ...rest } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Bowling</h2>
        </div>
        <div className="gameActions">
          <button
            id="saveGame"
            type="button"
          >
            Save Game
          </button>
          <button
            id="deleteGame"
            type="button"
          >
            Delete Game
          </button>
        </div>
        <RollButtons handleRoll={handleRoll} />
        <ScoreBoard {...rest} />
        <button
          type="button"
          onClick={() => handleResetGame()}
        >
          Reset Game
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  handleRoll: score => dispatch(addScore(score)),
  handleResetGame: () => dispatch(resetGame())
});

export { App, mapStateToProps, mapDispatchToProps }
export default connect(mapStateToProps, mapDispatchToProps)(App);
