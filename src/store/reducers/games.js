import { SET_GAMES, START_ADDRESS, END_ADDRESS } from '../actions/games';

export const initialState = {
  games: [],
  // startAddress: '',
  // endAddress: '',
};

export default function games(state = initialState, action) {
  switch(action.type) {
    case SET_GAMES: {
      return {
        ...state,
        games: action.payload.games,
      };
    }

    case START_ADDRESS: {
      return {
        ...state,
        startAddress: action.payload.startAddress,
      };
    }

    case END_ADDRESS: {
      return {
        ...state,
        endAddress: action.payload.endAddress,
      };
    }
    
    default:
      return state;
  }
}
