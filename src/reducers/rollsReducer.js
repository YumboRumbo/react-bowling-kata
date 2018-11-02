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
    if (isNonEmptyFrame(frameScores[i])) {
      totalScore += getFrameSum(frameScores[i]);
      if (frameIsSpare(frameScores[i])) {
        if (isNonEmptyFrame(frameScores[i + 1])) {
          totalScore += frameScores[i + 1][0];
        }
      }
    }
  }
  return totalScore;
};

const getFrameSum = frame => frame.reduce(add, 0);

const add = (a, b) => a + b;

const isNonEmptyFrame = frame => frame instanceof Array && !frameIsEmpty(frame);

const frameIsEmpty = frame => frame.length === 0;

const frameIsSpare = frame => frame.length === 2 && getFrameSum(frame) === 10;

export default rollsReducer;