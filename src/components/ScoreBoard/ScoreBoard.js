import React from "react";
import Frame from "../Frame/Frame";
import LastFrame from '../LastFrame/LastFrame'

const ScoreBoard = (props) => {
  const {currentFrame, rollScores, frameScores} = props
  // TODO: Current frame css is wack, find out how to fix it.
  return (
    <div className="scoreboard">
      <div id="currentFrame">Current Frame: {currentFrame}</div>
      <div className="frames">{renderFrames(rollScores, frameScores)}</div>
    </div>
  );
};

const renderFrames = (rollScores, frameScores) => {
  const frames = [];
  for (let i = 0; i < 9; i++) {
    frames.push(renderFrame(i, rollScores[i], frameScores[i]));
  }
  frames.push(renderLastFrame(9, rollScores[9], frameScores[9]));
  return <React.Fragment>{frames}</React.Fragment>;
};

const renderFrame = (index, rolls, frameScore) => (
  <Frame key={index} rolls={rolls} frameScore={frameScore} />
);

const renderLastFrame = (index, rolls, frameScore) => (
  <LastFrame key={index} rolls={rolls} frameScore={frameScore} />
);

export default ScoreBoard;
