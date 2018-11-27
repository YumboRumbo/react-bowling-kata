import React, { Component } from "react";
import { connect } from 'react-redux';
import logo from "../../logo.svg";
import "./App.css";
import { addScore } from '../../actions/index';
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import RollButtons from "../RollButtons/RollButtons";

class App extends Component {
  render() {
    console.log('this.props', this.props)
    const { handleRoll, ...rest } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Bowling</h2>
        </div>
        <RollButtons handleRoll={handleRoll} />
        <ScoreBoard {...rest} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state for mapStateToProps', state);
  return state;
};
const mapDispatchToProps = dispatch => ({
  handleRoll: score => dispatch(addScore(score))
})

export { App }
export default connect(mapStateToProps, mapDispatchToProps)(App);
