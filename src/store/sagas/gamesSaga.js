import { takeEvery, put } from 'redux-saga/effects';
import { games } from '../../games.json';
import { GET_GAMES, setGames} from '../actions/games';

export function* getGamesSaga(action) {
  const data = games; // Here would be a call to an API in a real app with a backend

  if (data.hasOwnProperty('games')) {
    const gamesList = data.games.reduce((prev, item) => {
      prev.push({value: item, label: item});

      return prev;
    }, []);

    yield put(setGames(gamesList));
  }
}

export function* gamesSaga() {
  yield takeEvery(GET_GAMES, getGamesSaga);
}
