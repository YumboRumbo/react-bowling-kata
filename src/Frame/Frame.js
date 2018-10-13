import React from "react";
import { get } from 'lodash';

const Frame = (props) => {
  const firstRoll = get(props, 'rolls[0]', '');
  const secondRoll = get(props, 'rolls[1]', '');
  const rolls = get(props, 'rolls', []);

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
