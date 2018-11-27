import * as actions from './index';

it('addScore should create ADD_SCORE action', () => {
  const number = 5;
  const actualAction = actions.addScore(number);
  const expectedAction = {
    type: 'ADD_SCORE',
    payload: {
      score: number
    }
  };

  expect(actualAction).toEqual(expectedAction);
});

it('resetGame should create RESET_GAME action', () => {
  const actualAction = actions.resetGame();
  const expectedAction = {
    type: 'RESET_GAME',
    payload: {}
  };

  expect(actualAction).toEqual(expectedAction);
});