const initialState = {
  currentFrame: 1,
  rollScores: [[]],
  frameScores: [],
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
  if (state.gameOver === true) {
    return state;
  }
  var newState = Object.assign({}, state);
  const frameIndex = newState.currentFrame - 1;
  const frame = newState.rollScores[frameIndex];
  if (frameIndex === 9) {
    if (frameIsNew(frame)) {
      newState.rollScores[frameIndex].push(score);
    } else if (frameIsInProgress(frame) && frame[0] + score < 10) {
      newState.rollScores[frameIndex].push(score);
      newState.gameOver = true;
    } else if (frameIsInProgress(frame) && frame[0] + score >= 10) {
      newState.rollScores[frameIndex].push(score);
    } else if (frame.length === 2 ) {
      newState.rollScores[frameIndex].push(score);
      newState.gameOver = true;
    }
  } else if (isValidScoreInput(frame, score)) {
    if (frameIsNew(frame)) {
      newState.rollScores[frameIndex].push(score);
      if (score === 10) {
        newState.rollScores.push([]);
        newState.currentFrame++;
      }
    } else if (frameIsInProgress(frame)) {
      newState.rollScores[frameIndex].push(score);
      newState.rollScores.push([]);
      newState.currentFrame++;
    }
  }
  newState.frameScores = getFrameScores(newState.rollScores);
  return newState;
};

const getFrameScores = rollScores => {
  var frameScores = [];
  var totalScore = 0;
  for (var i = 0; (i < rollScores.length && i < 8); i++) {
    const frame = rollScores[i];
    const frameScore = getFrameScore(frame, rollScores[i + 1], rollScores[i + 2]);
    if (frameScore !== false) {
      totalScore += frameScore;
      frameScores.push(totalScore);
    } else {
      break;
    }
  }
  if (rollScores[8] !== undefined) {
    const secondToLastFrameScore = getSecondToLastFrameScore(rollScores[8], rollScores[9]);
    if (secondToLastFrameScore !== false) {
      totalScore += secondToLastFrameScore;
      frameScores.push(totalScore);
    }
  }
  if (rollScores[9] !== undefined) {
    // TODO: fix this so that it only calculates when last frame is complete
    totalScore += sum(rollScores[9]);
    frameScores.push(totalScore);
  }
  
  return frameScores;
};

const getSecondToLastFrameScore = (frame, nextFrame) => {
  if (frameIsComplete(frame)) {
    if (frameIsOpen(frame)) {
      return sum(frame);
    } else if (frameIsSpare(frame) && nextFrame[0] !== undefined) {
      return sum(frame) + nextFrame[0];
    } else if (frameIsStrike(frame)) {
      if (nextFrame[0] !== undefined && nextFrame[1] !== undefined) {
        return sum(frame) + nextFrame[0] + nextFrame[1];
      }
    }
  }
  return false;
};

const getFrameScore = (frame, nextFrame, nextNextFrame) => {
  if (frameIsComplete(frame)) {
    if (frameIsOpen(frame)) {
      return sum(frame);
    } else if (frameIsSpare(frame) && nextFrame[0] !== undefined) {
      return sum(frame) + nextFrame[0];
    } else if (frameIsStrike(frame)) {
      if (frameIsOpen(nextFrame) || frameIsSpare(nextFrame)) {
        return sum(frame) + sum(nextFrame);
      } else if (frameIsStrike(nextFrame) && nextNextFrame !== undefined) {
        if (nextNextFrame[0] !== undefined) {
          return sum(frame) + sum(nextFrame) + nextNextFrame[0];
        }
      }
    }
  }
  return false;
};

const isValidScoreInput = (frame, score) => (
  frame.length === 0 || 
  (frame.length === 1 && frame[0] + score <= 10)
);

const frameIsNew = frame => frame.length === 0;

const frameIsInProgress = frame => frame.length === 1;

const frameIsComplete = frame => (
  frame.length === 2 ||
  (frame.length === 1 && frame[0] === 10)
);

const frameIsOpen = frame => (
  frame.length === 2 && sum(frame) < 10
);

const frameIsSpare = frame => (
  frame.length === 2 && sum(frame) === 10
);

const frameIsStrike = frame => (
  frame.length === 1 && frame[0] === 10
);

const sum = array => array.reduce(add, 0);

const add = (a, b) => a + b;

export default rollsReducer;