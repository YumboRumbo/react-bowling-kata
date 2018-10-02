import React from "react";
import ScoreBoard from "./ScoreBoard";
import Frame from "./Frame";
import { shallow } from "enzyme";

it("should render ten Frame components", () => {
  const props = {
    currentFrame: 1,
    frameScores: []
  };

  var wrapper = shallow(<ScoreBoard {...props} />);
  expect(wrapper.find(Frame).length).toEqual(10);
});

it("should render beginning of the game", () => {
  const props = {
    currentFrame: 1,
    frameScores: []
  };

  const wrapper = shallow(<ScoreBoard {...props} />);
  const frames = wrapper.find(Frame);
  
  frames.map(frame => {
    expect(frame.props().score).toEqual("");
  });
});

it("should correctly display an empty game score", () => {
  const props = {
    currentFrame: 1,
    frameScores: []
  };

  const wrapper = shallow(<ScoreBoard {...props} />);
  const gameScore = wrapper.find('#gameScore').props().children[1];

  expect(gameScore).toEqual(0);
});

it("should display a game score", () => {
  const props = {
    currentFrame: 4,
    frameScores: [[5,5], [3,4], [1,2]]
  };

  const wrapper = shallow(<ScoreBoard {...props} />);
  const gameScore = wrapper.find('#gameScore').props().children[1];

  expect(gameScore).toEqual(20);
});
