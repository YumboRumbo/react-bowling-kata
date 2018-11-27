export const addScore = number => ({
  type: 'ADD_SCORE',
  payload: {
    score: number
  }
});

export const resetGame = () => ({
  type: 'RESET_GAME',
  payload: {}
});