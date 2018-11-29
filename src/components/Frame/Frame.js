import React from "react";
import { get } from 'lodash';

const Frame = (props) => {
  var firstRoll = get(props, 'rolls[0]', '');
  var secondRoll = get(props, 'rolls[1]', '');
  var rolls = get(props, 'rolls', []);

  if (rolls.length === 2 && (firstRoll + secondRoll) === 10) {
    secondRoll = '/';
  }

  return (
    <div className="frame">
      <span id="firstRoll">{firstRoll}</span>
      <span id="secondRoll">{secondRoll}</span>
      <p id="totalScore">{getTotalScore(rolls)}</p>
    </div>
  );
};

const getTotalScore = rolls => isOneOfRollsMissing(rolls) ? '' : rolls[0] + rolls[1];

const isOneOfRollsMissing = rolls => rolls[0] === undefined || rolls[1] === undefined;


export default Frame;
