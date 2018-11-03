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
  newState.totalScore = parseInt(calculateTotalScore(newState.frameScores), 10);
  return newState;
};

const calculateTotalScore = frameScores => {
  var totalScore = 0;
  for (var i = 0; i < frameScores.length; i++) {
    const frame = frameScores[i];
    if (isNonEmptyFrame(frame)) {
      totalScore += getFrameSum(frame);
      if (frameIsStrike(frame)) {
        totalScore += getFrameStrikeScore(frameScores[i + 1], frameScores[i + 2]);
      } else if (frameIsSpare(frame)) {
        totalScore += getFrameSpareScore(frameScores[i + 1]);
      }
    }
  }
  return totalScore;
};

const getFrameSpareScore = nextFrame => {
  if (isNonEmptyFrame(nextFrame)) {
    return nextFrame[0];
  }
  return 0;
};

const getFrameStrikeScore = (firstNextFrame, secondNextFrame) => {
  if (frameIsOpenOrSpare(firstNextFrame)) {
    return getFrameSum(firstNextFrame);
  } else if (frameIsStrike(firstNextFrame)) {
    if (isNonEmptyFrame(secondNextFrame)) {
      return getFrameSum(firstNextFrame) + secondNextFrame[0];
    } else {
      return getFrameSum(firstNextFrame);
    }
  }
  return 0;
}

const getFrameSum = frame => frame.reduce(add, 0);

const isNonEmptyFrame = frame => frame instanceof Array && !frameIsEmpty(frame);

const frameIsEmpty = frame => frame.length === 0;

const frameIsSpare = frame => frame.length === 2 && getFrameSum(frame) === 10;

const frameIsStrike = frame => frame.length === 1 && frame[0] === 10;

const frameIsOpenOrSpare = frame => frame.length === 2;

const add = (a, b) => a + b;

export default rollsReducer;