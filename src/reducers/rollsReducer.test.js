import rollsReducer from './rollsReducer';

describe('rollsReducer', () => {
  it('should handle initial state', () => {
    const expectedState = {
      currentFrame: 1,
      frameScores: [[]],
      totalScore: 0
    }

    const actualState = rollsReducer(undefined, {});

    expect(actualState).toEqual(expectedState);
  });

  it('should handle first shot of a frame', () => {
    const currentState = {
      currentFrame: 1,
      frameScores: [[]],
      totalScore: 0
    };
    const action = {
      type: 'ADD_SCORE',
      payload: {
        score: 5
      }
    };
    const expectedState = {
      currentFrame: 1,
      frameScores: [[5]],
      totalScore: 5
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });
    
  it('should handle second shot of a frame', () => {
    const currentState = {
      currentFrame: 1,
      frameScores: [[5]],
      totalScore: 5
    };
    const action = {
      type: 'ADD_SCORE',
      payload: {
        score: 3
      }
    };
    const expectedState = {
      currentFrame: 2,
      frameScores: [[5, 3], []],
      totalScore: 8
    };
    
    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should handle spares', () => {
    const currentState = {
      currentFrame: 2,
      frameScores: [[9, 1], [5]],
      totalScore: 10
    };
    const action = {
      type: 'ADD_SCORE',
      payload: {
        score: 3
      }
    };
    const expectedState = {
      currentFrame: 3,
      frameScores: [[9, 1], [5, 3], []],
      totalScore: 23
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should handle strikes',() => {
    const currentState = {
      currentFrame: 6,
      frameScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5]],
      totalScore: 63
    };
    const action = {
      type: 'ADD_SCORE',
      payload: {
        score: 5
      }
    };
    const expectedState = {
      currentFrame: 7,
      frameScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5, 5], []],
      totalScore: 88
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });
});