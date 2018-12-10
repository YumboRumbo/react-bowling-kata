import React from "react";
import LastFrame from './LastFrame'
import { shallow } from "enzyme";

it('should display empty for empty rolls and frame score', () => {
  const rolls = [];
  const expectedFrameScore = undefined;

  const wrapper = shallow(<LastFrame rolls={rolls} frameScore={expectedFrameScore} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const thirdRoll = wrapper.find('#thirdRoll').props().children;
  const actualFrameScore = wrapper.find('#frameScore').props().children;

  expect(firstRoll).toEqual('');
  expect(secondRoll).toEqual('');
  expect(thirdRoll).toEqual('');
  expect(actualFrameScore).toEqual('');
});

it('should display rolls and frame score', () => {
  const rolls = [5, 4];
  const expectedFrameScore = 18;

  const wrapper = shallow(<LastFrame rolls={rolls} frameScore={expectedFrameScore} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const thirdRoll = wrapper.find('#thirdRoll').props().children;
  const actualFrameScore = wrapper.find('#frameScore').props().children;

  expect(firstRoll).toEqual(rolls[0]);
  expect(secondRoll).toEqual(rolls[1]);
  expect(thirdRoll).toEqual('');
  expect(actualFrameScore).toEqual(expectedFrameScore);
});

it('should display spare for the second roll and strike for the third roll', () => {
  const rolls = [9, 1, 10];

  const wrapper = shallow(<LastFrame rolls={rolls} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const thirdRoll = wrapper.find('#thirdRoll').props().children;

  expect(firstRoll).toEqual(rolls[0]);
  expect(secondRoll).toEqual('/');
  expect(thirdRoll).toEqual('X');
});

it('should display strike for the first roll and spare for the third roll', () => {
  const rolls = [10, 7, 3];

  const wrapper = shallow(<LastFrame rolls={rolls} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const thirdRoll = wrapper.find('#thirdRoll').props().children;

  expect(firstRoll).toEqual('X');
  expect(secondRoll).toEqual(rolls[1]);
  expect(thirdRoll).toEqual('/');
});

it('should display strikes as X', () => {
  const rolls = [10, 10, 10];

  const wrapper = shallow(<LastFrame rolls={rolls} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const thirdRoll = wrapper.find('#thirdRoll').props().children;

  expect(firstRoll).toEqual('X');
  expect(secondRoll).toEqual('X');
  expect(thirdRoll).toEqual('X');
});