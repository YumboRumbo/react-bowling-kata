import React from "react";
import Frame from "../Frame/Frame";

const ScoreBoard = ({ frameScores, ...rest }) => {
  return (
    <div className="scoreboard">
      <div className="frames">{renderFrames(frameScores)}</div>
      <h1 id="gameScore">Game Score = {calculateGameScore(frameScores)}</h1>
    </div>
  );
};

const renderFrames = frameScores => {
  const frames = [];
  for (let i = 0; i < 10; i++) {
    frames.push(renderFrame(i, frameScores[i]));
  }

  return <React.Fragment>{frames}</React.Fragment>;
};

const renderFrame = (index, frameScore) => (
  <Frame key={index} rolls={frameScore} score={frameScore ? frameScore : ""} />
);

// TODO: Add bowling score calculation
const calculateGameScore = frameScores => {
  let gameScore = 0;
  frameScores.forEach(function(element) {
    if (typeof element === 'object') {
      gameScore += calculateGameScore(element);
    } else {
      gameScore += element;
    }
  });
  return gameScore;
}

export default ScoreBoard;
