import React from "react";
import Frame from "./Frame";

const ScoreBoard = ({ frameScores, ...rest }) => {
  return (
    <div className="scoreboard">
      <div className="frames">{renderFrames(frameScores)}</div>
      <h1>Game Score = 133</h1>
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
  <Frame key={index} score={frameScore ? frameScore : ""} />
);

export default ScoreBoard;
