import React from 'react';
import {App} from './App'
import { shallow } from 'enzyme';

it('should render without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(App)).toBeDefined();
});

it('should render button row of Load Game, Save Game, and Delete Game', () => {
  const wrapper = shallow(<App />);
  const loadGameButton = wrapper.find('#loadGame');
  const saveGameButton = wrapper.find('#saveGame');
  const deleteGameButton = wrapper.find('#deleteGame');

  expect(loadGameButton.text()).toEqual('Load Game');
  expect(saveGameButton.text()).toEqual('Save Game');
  expect(deleteGameButton.text()).toEqual('Delete Game');
});