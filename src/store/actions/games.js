export const GET_GAMES = 'GET_GAMES';
export const SET_GAMES = 'SET_GAMES';
export const START_ADDRESS = 'START_ADDRESS';
export const END_ADDRESS = 'END_ADDRESS';

export const getGames = () => ({
  type: GET_GAMES,
});

export const setGames = (games) => ({
  type: SET_GAMES,
  // payload: { games },
  payload: { g: [1, 2, 3] },
});

// export const setStartAddress = (startAddress) => ({
//   type: START_ADDRESS,
//   payload: { startAddress }
// });

// export const setEndAddress = (endAddress) => ({
//   type: END_ADDRESS,
//   payload: { endAddress }
// });
