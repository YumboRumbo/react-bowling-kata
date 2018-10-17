import * as actions from './index';

describe('rolls action', () => {
  it('addScore should create ADD_SCORE action', () => {
    const number = 5;

    expect(actions.addScore(number)).toEqual({
      type: 'ADD_SCORE',
      payload: {
        score: number
      }
    });
  })
});