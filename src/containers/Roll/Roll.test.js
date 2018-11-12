import React from "react";
import Roll from "./Roll"
import { shallow } from "enzyme";

it('should display number on button', () => {
  const number = 9;

  const wrapper = shallow(<Roll number={number} />);
  const button = wrapper.find('button');
  
  expect(button.props().children).toEqual(number);
});

it('should handle click event', () => {
  const props = {
    number: 9,
    handleRoll: jest.fn()
  }

  const wrapper = shallow(<Roll {...props} />);
  const button = wrapper.find('button');

  button.simulate('click')

  expect(props.handleRoll).toHaveBeenCalledWith(props.number)
})

