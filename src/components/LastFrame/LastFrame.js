import React from 'react';
import { get } from 'lodash';

const LastFrame = (props) => {
  var rolls = get(props, 'rolls', []);
  var firstRoll = get(props, 'rolls[0]', '');
  var secondRoll = get(props, 'rolls[1]', '');
  var thirdRoll = get(props, 'rolls[2]', '');
  var frameScore = get(props, 'frameScore', '');

  if (rolls.length === 1 && firstRoll === 10) {
    firstRoll = 'X';
  } else if (rolls.length === 2) {
    if (firstRoll === 10 && secondRoll === 10) {
      firstRoll = 'X';
      secondRoll = 'X';
    } else if (firstRoll + secondRoll === 10) {
      secondRoll = '/';
    } else if (firstRoll === 10 && secondRoll < 10) {
      firstRoll = 'X';
    }
  } else if (rolls.length === 3) {
    if (firstRoll === 10 && secondRoll === 10 && thirdRoll === 10) {
      firstRoll = 'X';
      secondRoll = 'X';
      thirdRoll = 'X';
    } else if (firstRoll === 10 && secondRoll === 10 && thirdRoll < 10) {
      firstRoll = 'X';
      secondRoll = 'X';
    } else if (firstRoll === 10 && secondRoll + thirdRoll === 10) {
      firstRoll = 'X';
      thirdRoll = '/';
    } else if (firstRoll === 10 && secondRoll + thirdRoll < 10) {
      firstRoll = 'X';
    } else if (firstRoll + secondRoll === 10 && thirdRoll === 10) {
      secondRoll = '/';
      thirdRoll = 'X';
    } else if (firstRoll + secondRoll === 10 && thirdRoll < 10) {
      secondRoll = '/';
    }
  }

  return (
    <div className="lastFrame">
      <span id="firstRoll">{firstRoll}</span>
      <span id="secondRoll">{secondRoll}</span>
      <span id="thirdRoll">{thirdRoll}</span>
      <p id="frameScore">{frameScore}</p>
    </div>
  );
}

export default LastFrame;