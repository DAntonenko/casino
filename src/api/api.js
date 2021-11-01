// export const getGamesFromServer = async () => {
//   return fetch('https://loft-taxi.glitch.me/addressList')
//   .then(res => res.json())
// };

import { games } from '../games.json';

export const getGamesFromServer = async () => {
  return games
  // .then(res => res.json())
};