import { SET_GAMES, SET_GAME_VISIBLE, SET_GAME_INVISIBLE } from '../actions/games';

export const initialState = {
  games: [],
};

export default function games(state = initialState, action) {
  switch(action.type) {
    case SET_GAMES: {
      for(let obj of action.payload.games) {
        obj.isVisible = true;
      }
      return {
        ...state,
        games: action.payload.games,
      };
    }

    case SET_GAME_VISIBLE: {
      for(let obj of state.games) {
        if (obj.id === action.payload.id) {
          obj.isVisible = true;
        };
      }
      return {
        ...state,
      };
    }

    case SET_GAME_INVISIBLE: {
      for(let obj of state.games) {
        if (obj.id === action.payload.id) {
          obj.isVisible = false;
        };
      }
      return {
        ...state,
      };
    }
    
    default:
      return state;
  }
}
