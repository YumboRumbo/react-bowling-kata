import React from "react";

const Frame = ({ rolls }) => {
  return (
    <div className="frame">
      <span id="firstRoll">{getRollScore(rolls[0])}</span>
      <span id="secondRoll">{getRollScore(rolls[1])}</span>
      <p id="totalScore">{getTotalScore(rolls)}</p>
    </div>
  );
};

const getRollScore = number => number === undefined ? '' : number;

const getTotalScore = rolls => isOneOfRollsMissing(rolls) ? '' : rolls[0] + rolls[1];

const isOneOfRollsMissing = rolls => rolls[0] === undefined || rolls[1] === undefined;


export default Frame;
