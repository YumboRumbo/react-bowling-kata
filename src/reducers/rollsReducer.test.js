import rollsReducer from './rollsReducer';

describe('rollsReducer', () => {
  it('should handle initial state', () => {
    expect(
      rollsReducer(undefined, {})
    ).toEqual({
      currentFrame: 1,
      frameScores: [[]]
    });
  });

  it('should handle ADD_SCORE', () => {
    expect(
      rollsReducer(
        {
          currentFrame: 1,
          frameScores: [[]]
        }, 
        {
          type: 'ADD_SCORE',
          score: 5
        }
      )
    ).toEqual({
      currentFrame: 1,
      frameScores: [[5]]
    });

    expect(
      rollsReducer(
        {
          currentFrame: 1,
          frameScores: [[5]]
        },
        {
          type: 'ADD_SCORE',
          score: 5
        }
      )
    ).toEqual({
      currentFrame: 2,
      frameScores: [[5, 5], []]
    });
  });
});