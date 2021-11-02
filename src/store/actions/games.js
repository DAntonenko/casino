export const GET_GAMES = 'GET_GAMES';
export const SET_GAMES = 'SET_GAMES';
export const SET_GAME_VISIBLE = 'SET_GAME_VISIBLE';
export const SET_GAME_INVISIBLE = 'SET_GAME_INVISIBLE';

export const getGames = () => ({
  type: GET_GAMES,
});

export const setGamesList = (games) => ({
  type: SET_GAMES,
  payload: { games },
});

export const setGameVisible = (id) => ({
  type: SET_GAME_VISIBLE,
  payload: { id },
});

export const setGameInvisible = (id) => ({
  type: SET_GAME_INVISIBLE,
  payload: { id },
});
