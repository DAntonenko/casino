import { IGame } from '../game/i-game';

export interface IGamesStore {
  games: IGame[];
}

export interface IGamesGamesStore {
  games: IGamesStore;
}