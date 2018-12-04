import rollsReducer from './rollsReducer';

describe('rollsReducer', () => {
  it('should handle initial state', () => {
    const expectedState = {
      currentFrame: 1,
      rollScores: [[]],
      frameScores: [],
      gameOver: false
    }

    const actualState = rollsReducer(undefined, {});

    expect(actualState).toEqual(expectedState);
  });

  it('should handle first shot of a frame', () => {
    const currentState = {
      currentFrame: 1,
      rollScores: [[]],
      frameScores: [],
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
      rollScores: [[5]],
      frameScores: [],
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });
    
  it('should handle second shot of a frame', () => {
    const currentState = {
      currentFrame: 1,
      rollScores: [[5]],
      frameScores: [],
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
      rollScores: [[5, 3], []],
      frameScores: [8],
      gameOver: false
    };
    
    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should handle spares', () => {
    const currentState = {
      currentFrame: 2,
      rollScores: [[8, 2], []],
      frameScores: [],
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
      rollScores: [[8, 2], [5]],
      frameScores: [15],
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should handle strikes', () => {
    const currentState = {
      currentFrame: 6,
      rollScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5]],
      frameScores: [15, 24, 33, 58],
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
      rollScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5, 5], []],
      frameScores: [15, 24, 33, 58, 78],
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should handle the last frame', () => {
    const currentState = {
      currentFrame: 10,
      rollScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5, 5], [5, 3], [6, 3], [9, 1], [9, 1]],
      frameScores: [15, 24, 33, 58, 78, 93, 101, 110, 129],
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
      rollScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5, 5], [5, 3], [6, 3], [9, 1], [9, 1, 10]],
      frameScores: [15, 24, 33, 58, 78, 93, 101, 110, 129, 149],
      gameOver: true
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should handle perfect 300 game', () => {
    const currentState = {
      currentFrame: 10,
      rollScores: [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10]],
      frameScores: [],
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
      rollScores: [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]],
      frameScores: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
      gameOver: true
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should be able to reset game that is in progress', () => {
    const currentState = {
      currentFrame: 6,
      rollsScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5]],
      frameScores: [15, 24, 33],
      gameOver: false
    };
    const action = {
      type: 'RESET_GAME',
      payload: {}
    };
    const expectedState = {
      currentFrame: 1,
      rollScores: [[]],
      frameScores: [],
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should be able to reset game that is done', () => {
    const currentState = {
      currentFrame: 10,
      rollScores: [[8, 2], [5, 4], [9, 0], [10], [10], [5, 5], [5, 3], [6, 3], [9, 1], [9, 1, 10]],
      frameScores: [15, 24, 33, 58, 78, 93, 101, 110, 129, 149],
      gameOver: true
    };
    const action = {
      type: 'RESET_GAME',
      payload: {}
    };
    const expectedState = {
      currentFrame: 1,
      rollScores: [[]],
      frameScores: [],
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should restrict impossible scores', () => {
    const currentState = {
      currentFrame: 2,
      rollScores: [[2, 2], [5]],
      frameScores: [4],
      gameOver: false
    };
    const action = {
      type: 'ADD_SCORE',
      payload: {
        score: 7
      }
    };
    const expectedState = {
      currentFrame: 2,
      rollScores: [[2, 2], [5]],
      frameScores: [4],
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should not calculate spare frame score until possible', () => {
    const currentState = {
      currentFrame: 3,
      rollScores: [[5, 4], [9, 1], []],
      frameScores: [9],
      gameOver: false
    };
    const action = {
      type: 'ADD_SCORE',
      payload: {
        score: 5
      }
    };
    const expectedState = {
      currentFrame: 3,
      rollScores: [[5, 4], [9, 1], [5]],
      frameScores: [9, 24],
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });

  it('should not calculate strike frame score until possible', () => {
    const currentState = {
      currentFrame: 3,
      rollScores: [[10], [10], []],
      frameScores: [],
      gameOver: false
    };
    const action = {
      type: 'ADD_SCORE',
      payload: {
        score: 10
      }
    };
    const expectedState = {
      currentFrame: 4,
      rollScores: [[10], [10], [10], []],
      frameScores: [30],
      gameOver: false
    };

    const actualState = rollsReducer(currentState, action);

    expect(actualState).toEqual(expectedState);
  });
});