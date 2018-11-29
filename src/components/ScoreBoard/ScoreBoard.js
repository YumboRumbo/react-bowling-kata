import React from "react";
import Frame from "../Frame/Frame";

const ScoreBoard = (props) => {
  const {currentFrame, frameScores, totalScore} = props
  // TODO: Current frame css is wack, find out how to fix it.
  return (
    <div className="scoreboard">
      <div className="currentFrame">Current Frame: {currentFrame}</div>
      <div className="frames">{renderFrames(frameScores)}</div>
      <h1 id="gameScore">Game Score = {totalScore}</h1>
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
  <Frame key={index} rolls={frameScore}/>
);

export default ScoreBoard;
