const initialState = {
  currentFrame: 1,
  frameScores: [[]],
  totalScore: 0,
  gameOver: false
};

const rollsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_SCORE':
      return addScore(state, action.payload.score);
    case 'RESET_GAME':
      return initialState;
    default:
      return state;
  }
};

const addScore = (state, score) => {
  var newState = Object.assign({}, state);
  const frameIndex = newState.currentFrame - 1;
  if (onLastFrame(frameIndex)) {
    handleLastFrame(newState, frameIndex, score);
  } else if (frameIsEmpty(newState.frameScores[frameIndex])) {
    newState.frameScores[frameIndex].push(score);
  } else {
    if (!isValidScoreInput(newState.frameScores[frameIndex], score)) {
      return newState;
    }
    completeFrame(newState, frameIndex, score);
  }
  newState.totalScore = parseInt(calculateTotalScore(newState.frameScores), 10);
  return newState;
};

const calculateTotalScore = frameScores => {
  var totalScore = 0;
  for (var frameIndex = 0; frameIndex < frameScores.length; frameIndex++) {
    const currentFrame = frameScores[frameIndex];
    if (isNonEmptyFrame(currentFrame)) {
      totalScore += calculateFrameScore(currentFrame, frameScores, frameIndex);
    }
  }
  return totalScore;
};

// ----- 'addScore' HELPER FUNCTIONS -----
const isValidScoreInput = (frame, score) => {
  return (
    frame.length === 0 ||
    (frame.length === 1 && (getFrameSum(frame) + score) <= 10)
  );
};

const completeFrame = (newState, frameIndex, score) => {
  newState.frameScores[frameIndex].push(score);
  newState.frameScores.push([]);
  newState.currentFrame++;
};

const handleLastFrame = (newState, frameIndex, score) => {
  if (frameIsEmpty(newState.frameScores[frameIndex])) {
    newState.frameScores[frameIndex].push(score);
  } else {
    if (newState.frameScores[frameIndex].length === 1) {
      newState.frameScores[frameIndex].push(score);
      if (getFrameSum(newState.frameScores[frameIndex]) !== 10) {
        newState.gameOver = true;
      }
    } else if (newState.frameScores[frameIndex].length === 2) {
      newState.frameScores[frameIndex].push(score);
      newState.gameOver = true;
    }
  }
};
// ----- END -----

// ----- 'calculateTotalScore' HELPER FUNCTIONS
const calculateFrameScore = (currentFrame, frameScores, frameIndex) => {
  var frameScore = 0;
  frameScore += getFrameSum(currentFrame);
  if (frameIsStrike(currentFrame)) {
    frameScore += handleStrike(frameIndex, frameScores);
  } else if (frameIsSpare(currentFrame)) {
    frameScore += getFrameSpareScore(frameScores[frameIndex + 1]);
  }
  return frameScore;
};

const handleStrike = (frameIndex, frameScores) => {
  var strikeBonusScore = 0;
  if (onSecondToLastFrame(frameIndex)) {
    if (isNonEmptyFrame(frameScores[frameIndex + 1])) {
      if (frameScores[frameIndex + 1].length === 1) {
        strikeBonusScore += frameScores[frameIndex + 1][0];
      } else if (frameScores[frameIndex + 1].length >= 2) {
        strikeBonusScore += (frameScores[frameIndex + 1][0] + frameScores[frameIndex + 1][1]);
      }
    }
  } else {
    strikeBonusScore += getFrameStrikeScore(frameScores[frameIndex + 1], frameScores[frameIndex + 2]);
  }
  return strikeBonusScore;
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
// ----- END -----

// ----- HELPER FUNCTIONS -----
const onLastFrame = frameIndex => frameIndex === 9;

const onSecondToLastFrame = frameIndex => frameIndex === 8;

const getFrameSum = frame => frame.reduce(add, 0);

const isNonEmptyFrame = frame => frame instanceof Array && !frameIsEmpty(frame);

const frameIsEmpty = frame => frame.length === 0;

const frameIsSpare = frame => frame.length === 2 && getFrameSum(frame) === 10;

const frameIsStrike = frame => frame.length === 1 && frame[0] === 10;

const frameIsOpenOrSpare = frame => frame.length === 2;

const add = (a, b) => a + b;
// ----- END -----

export default rollsReducer;