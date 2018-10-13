import React from "react";
import Frame from "./Frame"
import { shallow } from "enzyme";

it('should display first and second roll along with total score', () => {
  const rolls = [5, 4];
  
  const wrapper = shallow(<Frame rolls={rolls} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const totalScore = wrapper.find('#totalScore').props().children;

  expect(firstRoll).toEqual(rolls[0]);
  expect(secondRoll).toEqual(rolls[1]);
  expect(totalScore).toEqual(rolls[0] + rolls[1]);
});

it('should display blank if rolls are empty', () => {
  const rolls = [];

  const wrapper = shallow(<Frame rolls={rolls} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const totalScore = wrapper.find('#totalScore').props().children;

  expect(firstRoll).toEqual('');
  expect(secondRoll).toEqual('');
  expect(totalScore).toEqual('');
});

it('should display blank total score if one roll is empty', () => {
  const rolls = [5];

  const wrapper = shallow(<Frame rolls={rolls} />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const totalScore = wrapper.find('#totalScore').props().children;
  
  expect(firstRoll).toEqual(5);
  expect(secondRoll).toEqual('');
  expect(totalScore).toEqual('');
});

it('should display blank if rolls array is undefined', () => {
  const wrapper = shallow(<Frame />);
  const firstRoll = wrapper.find('#firstRoll').props().children;
  const secondRoll = wrapper.find('#secondRoll').props().children;
  const totalScore = wrapper.find('#totalScore').props().children;

  expect(firstRoll).toEqual('');
  expect(secondRoll).toEqual('');
  expect(totalScore).toEqual('');
});