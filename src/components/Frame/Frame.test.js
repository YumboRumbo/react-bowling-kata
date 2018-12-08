import React from "react";
import Frame from "./Frame"
import { shallow } from "enzyme";

it('should display first and second roll along with frame score', () => {
  const rolls = [5, 4];
  const expectedFrameScore = 25;
  
  const wrapper = shallow(<Frame rolls={rolls} frameScore={expectedFrameScore} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const actualFrameScore = wrapper.find('#frameScore').props().children;

  expect(firstRoll).toEqual(rolls[0]);
  expect(secondRoll).toEqual(rolls[1]);
  expect(actualFrameScore).toEqual(expectedFrameScore);
});

it('should display blank if rolls are empty', () => {
  const rolls = [];

  const wrapper = shallow(<Frame rolls={rolls} frameScore={undefined} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const frameScore = wrapper.find('#frameScore').props().children;

  expect(firstRoll).toEqual('');
  expect(secondRoll).toEqual('');
  expect(frameScore).toEqual('');
});

it('should display blank if rolls array is undefined', () => {
  const wrapper = shallow(<Frame />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const frameScore = wrapper.find('#frameScore').props().children;

  expect(firstRoll).toEqual('');
  expect(secondRoll).toEqual('');
  expect(frameScore).toEqual('');
});

it('should display spares as /', () => {
  const rolls = [8, 2];
  const wrapper = shallow(<Frame rolls={rolls} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;

  expect(firstRoll).toEqual(8);
  expect(secondRoll).toEqual('/');
});

it('should display strikes as X', () => {
  const rolls = [10];
  const wrapper = shallow(<Frame rolls={rolls} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;

  expect(firstRoll).toEqual('');
  expect(secondRoll).toEqual('X');
});