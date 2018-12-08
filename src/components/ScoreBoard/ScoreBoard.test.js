import React from "react";
import ScoreBoard from "./ScoreBoard";
import Frame from "../Frame/Frame";
import { shallow } from "enzyme";

const initialState = {
  currentFrame: 1,
  rollScores: [[]],
  frameScores: []
};

it("should render ten Frame components", () => {
  var wrapper = shallow(<ScoreBoard {...initialState} />);
  expect(wrapper.find(Frame).length).toEqual(10);
});

it("should render beginning of the game", () => {
  const wrapper = shallow(<ScoreBoard {...initialState} />);
  const frames = wrapper.find(Frame);
  const firstFrame = frames.first();

  expect(firstFrame.props().rolls).toEqual([]);
  for (var index = 1; index < 10; index++) {
    expect(frames.at(index).props().rolls).toEqual(undefined);
  }
});

it("should display the current frame number", () => {
  const state = {
    currentFrame: 2,
    rollScores: [[5, 2], []],
    frameScores: [7]
  };

  const wrapper = shallow(<ScoreBoard {...state} />);
  const currentFrame = wrapper.find('.currentFrame').props().children[1];

  expect(currentFrame).toEqual(2);
});
