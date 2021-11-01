import { games } from '../games.json';

// in a real application with a backend there would be a fetch request to the server
export const getGamesFromServer = () => {
  return games;
};
