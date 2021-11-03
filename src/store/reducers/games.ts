import { IGame } from '../../models/game/i-game';
import { SET_GAMES, SET_GAME_VISIBLE, SET_GAME_INVISIBLE } from '../actions/games';

interface IGamesStore {
  games: IGame[];
}

export const initialState: IGamesStore = {
  games: [],
};

export default function games(state: IGamesStore = initialState, action: any): IGamesStore {
  switch (action.type) {
    case SET_GAMES: {
      return {
        ...state,
        games: action.payload.games,
      };
    }

    case SET_GAME_VISIBLE: {
      return {
        ...state,
        games: state.games.map((game) => {
          if (game.id === action.payload.id) {
            return {
              ...game,
              isVisible: true,
            };
          }

          return game;
        }),
      };
    }

    case SET_GAME_INVISIBLE: {
      return {
        ...state,
        games: state.games.map((game) => {
          if (game.id === action.payload.id) {
            return {
              ...game,
              isVisible: false,
            };
          }

          return game;
        }),
      };
    }

    default:
      return state;
  }
}
