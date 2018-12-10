import React from "react";
import ScoreBoard from "./ScoreBoard";
import Frame from "../Frame/Frame";
import LastFrame from '../LastFrame/LastFrame';
import { shallow } from "enzyme";

const initialState = {
  currentFrame: 1,
  rollScores: [[]],
  frameScores: []
};

it("should render nine Frame components and one LastFrame component", () => {
  var wrapper = shallow(<ScoreBoard {...initialState} />);
  expect(wrapper.find(Frame).length).toEqual(9);
  expect(wrapper.find(LastFrame).length).toEqual(1);
});

it("should render beginning of the game", () => {
  const wrapper = shallow(<ScoreBoard {...initialState} />);
  const frames = wrapper.find(Frame);
  const firstFrame = frames.first();
  const lastFrame = wrapper.find(LastFrame);

  expect(firstFrame.props().rolls).toEqual([]);
  expect(firstFrame.props().frameScore).toEqual(undefined);
  for (var index = 1; index < 9; index++) {
    expect(frames.at(index).props().rolls).toEqual(undefined);
    expect(frames.at(index).props().frameScore).toEqual(undefined);
  }
  expect(lastFrame.props().rolls).toEqual(undefined);
  expect(lastFrame.props().frameScore).toEqual(undefined);
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
