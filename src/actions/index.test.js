import * as actions from './index';

describe('rolls action', () => {
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
  })
});