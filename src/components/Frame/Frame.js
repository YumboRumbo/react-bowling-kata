import React from "react";
import { get } from 'lodash';

const Frame = (props) => {
  var firstRoll = get(props, 'rolls[0]', '');
  var secondRoll = get(props, 'rolls[1]', '');
  var rolls = get(props, 'rolls', []);
  var frameScore = get(props, 'frameScore', '');

  if (rolls.length === 2 && (firstRoll + secondRoll) === 10) {
    secondRoll = '/';
  } else if (rolls.length === 1 && firstRoll === 10) {
    firstRoll = 'X';
  }

  return (
    <div className="frame">
      <span id="firstRoll">{firstRoll}</span>
      <span id="secondRoll">{secondRoll}</span>
      <p id="frameScore">{frameScore}</p>
    </div>
  );
};

export default Frame;
