import { SET_GAMES } from '../actions/games';

export const initialState = {
  games: [],
};

export default function games(state = initialState, action) {
  switch(action.type) {
    case SET_GAMES: {
      return {
        ...state,
        games: action.payload.games,
      };
    }
    
    default:
      return state;
  }
}
