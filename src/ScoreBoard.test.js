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
