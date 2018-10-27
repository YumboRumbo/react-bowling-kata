import iassign from 'immutable-assign';

const initialState = {
  currentFrame: 1,
  frameScores: [[]],
  totalScore: 0
};

const rollsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_SCORE':
      return addScore(state, action.payload.score);
    default:
      return state;
  }
};

const addScore = (state, score) => {
  var newState = Object.assign({}, state);
  const frameIndex = newState.currentFrame - 1;
  if (frameIsEmpty(newState.frameScores[frameIndex])) {
    newState.frameScores[frameIndex].push(score);
  } else {
    newState.frameScores[newState.currentFrame - 1].push(score);
    newState.frameScores.push([]);
    newState.currentFrame++;
  }
  // TODO: Quick fix, total score is being converted to string for some reason.
  // Find out better solution than parseInt.
  newState.totalScore = parseInt(calculateTotalScore(newState.frameScores), 10);
  return newState;
};

const calculateTotalScore = frameScores => {
  var totalScore = 0;
  for (var i = 0; i < frameScores.length; i++) {
    if (frameScores[i] instanceof Array && !frameIsEmpty(frameScores[i])) {
      totalScore += calculateTotalScore(frameScores[i]);
    } else {
      totalScore += frameScores[i];
    }
  }
  return totalScore;
};

const frameIsEmpty = frame => frame.length === 0;

export default rollsReducer;