import rollsReducer from './rollsReducer';

describe('rollsReducer', () => {
  it('should handle initial state', () => {
    const expectedState = {
      currentFrame: 1,
      frameScores: [[]],
      totalScore: 0,
      gameOver: false
    }

    const actualState = rollsReducer(undefined, {});

    expect(actualState).toEqual(expectedState);
  });

  it('should handle first shot of a frame', () => {
    const currentState = {
      currentFrame: 1,
      frameScores: [[]],
      totalScore: 0,
      gameOver: false
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
      totalScore: 5,
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });
    
  it('should handle second shot of a frame', () => {
    const currentState = {
      currentFrame: 1,
      frameScores: [[5]],
      totalScore: 5,
      gameOver: false
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
      totalScore: 8,
      gameOver: false
    };
    
    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should handle spares', () => {
    const currentState = {
      currentFrame: 2,
      frameScores: [[8, 2], []],
      totalScore: 10,
      gameOver: false
    };
    const action = {
      type: 'ADD_SCORE',
      payload: {
        score: 5
      }
    };
    const expectedState = {
      currentFrame: 2,
      frameScores: [[8, 2], [5]],
      totalScore: 20,
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should handle strikes', () => {
    const currentState = {
      currentFrame: 6,
      frameScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5]],
      totalScore: 78,
      gameOver: false
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
      totalScore: 88,
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should handle the last frame', () => {
    const currentState = {
      currentFrame: 10,
      frameScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5, 5], [5, 3], [6, 3], [9, 1], [9, 1]],
      totalScore: 139,
      gameOver: false
    };
    const action = {
      type: 'ADD_SCORE',
      payload: {
        score: 10
      }
    };
    const expectedState = {
      currentFrame: 10,
      frameScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5, 5], [5, 3], [6, 3], [9, 1], [9, 1, 10]],
      totalScore: 149,
      gameOver: true
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should handle perfect 300 game', () => {
    const currentState = {
      currentFrame: 10,
      frameScores: [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10]],
      totalScore: 290,
      gameOver: false
    };
    const action = {
      type: 'ADD_SCORE',
      payload: {
        score: 10
      }
    };
    const expectedState = {
      currentFrame: 10,
      frameScores: [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]],
      totalScore: 300,
      gameOver: true
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should be able to reset game that is in progress', () => {
    const currentState = {
      currentFrame: 6,
      frameScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5]],
      totalScore: 78,
      gameOver: false
    };
    const action = {
      type: 'RESET_GAME',
      payload: {}
    };
    const expectedState = {
      currentFrame: 1,
      frameScores: [[]],
      totalScore: 0,
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should be able to reset game that is done', () => {
    const currentState = {
      currentFrame: 10,
      frameScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5, 5], [5, 3], [6, 3], [9, 1], [9, 1, 10]],
      totalScore: 149,
      gameOver: true
    };
    const action = {
      type: 'RESET_GAME',
      payload: {}
    };
    const expectedState = {
      currentFrame: 1,
      frameScores: [[]],
      totalScore: 0,
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });
});