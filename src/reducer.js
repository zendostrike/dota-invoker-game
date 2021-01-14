export function reducer(state, action) {
  switch (action.type) {
    case 'incrementScore':
      return { ...state, score: state.score + 1};
    case 'clearScore':
      return { ...state, score: 0};
    case 'setLastScore':
      return { ...state, lastScore: state.score};
    default:
      throw new Error();
  }
}

export const initialState = {score: 0, lastScore: 0};