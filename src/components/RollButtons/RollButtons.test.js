import React from 'react';
import RollButtons from './RollButtons';
import Roll from '../../containers/Roll/Roll';
import { shallow } from 'enzyme';

it('should render 11 Roll components', () => {
  const handleClick = jest.fn();

  const wrapper = shallow(<RollButtons handleClick={handleClick}/>);
  const rolls = wrapper.find(Roll);
  
  expect(rolls.length).toEqual(11);
});

it('should pass handleClick method to Roll components', () => {
  const handleClick = jest.fn()

  const wrapper = shallow(<RollButtons handleClick={handleClick} />)
  const rolls = wrapper.find(Roll);
  
  expect(rolls.first().props().handleClick).toEqual(handleClick);
})