const initialState = {
  currentFrame: 1,
  frameScores: [[]]
};

const rollsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_SCORE':
      return addScore(state, action.score);
    default:
      return state;
  }
};

const addScore = (state, score) => {
  const frameIndex = state.currentFrame - 1;
  var frameScores = state.frameScores;
  if (frameIsEmpty(frameScores[frameIndex])) {
    frameScores[frameIndex].push(score);
    return {
      currentFrame: state.currentFrame,
      frameScores: frameScores
    };
  } else if (!frameIsEmpty(frameScores[frameIndex])) {
    frameScores[state.currentFrame - 1].push(score);
    frameScores.push([]);
    return {
      currentFrame: (state.currentFrame + 1),
      frameScores: frameScores
    }
  }
};

const frameIsEmpty = frame => frame.length == 0;

export default rollsReducer;