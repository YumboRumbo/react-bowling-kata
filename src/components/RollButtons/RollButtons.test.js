import React from 'react';
import RollButtons from './RollButtons';
import Roll from '../Roll/Roll';
import { shallow } from 'enzyme';

it('should render 11 Roll components', () => {
  const handleRoll = jest.fn();

  const wrapper = shallow(<RollButtons handleRoll={handleRoll}/>);
  const rolls = wrapper.find(Roll);
  
  expect(rolls.length).toEqual(11);
});

it('should pass handleRoll method to Roll components', () => {
  const handleRoll = jest.fn()

  const wrapper = shallow(<RollButtons handleRoll={handleRoll} />)
  const rolls = wrapper.find(Roll);
  
  expect(rolls.first().props().handleRoll).toEqual(handleRoll);
});

// TODO: Write test: "IF gameOver == true, THEN disable all buttons."