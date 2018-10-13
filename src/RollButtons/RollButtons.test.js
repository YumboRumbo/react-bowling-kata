import React from 'react';
import RollButtons from './RollButtons';
import Roll from '../Roll/Roll';
import { shallow } from 'enzyme';

it('should render 11 Roll components', () => {
  const wrapper = shallow(<RollButtons />);
  const rolls = wrapper.find(Roll);
  
  expect(rolls.length).toEqual(11);
});