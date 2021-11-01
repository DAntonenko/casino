import { takeEvery, call, put } from 'redux-saga/effects';
import { getGamesFromServer } from '../../api/api';
import { GET_GAMES, setGamesList } from '../actions/games';

// export function* getGamesSaga(action) {
//   const data = yield call(getGamesFromServer);
//   console.log(data)

//   if (data.hasOwnProperty('addresses')) {
//     const gamesList = data.addresses.reduce((prev, item) => {
//       prev.push({value: item, label: item});

//       return prev;
//     }, []);

//     yield put(setGamesList(gamesList));
//   }
// }

// export function* gamesSaga() {
//   yield takeEvery(GET_GAMES, getGamesSaga);
// }

export function* getGamesSaga(action) {
  const data = yield call(getGamesFromServer);
  console.log(data)

  if (data) {
    const gamesList = data.reduce((prev, item) => {
      prev.push({value: item, label: item});

      return prev;
    }, []);

    yield put(setGamesList(gamesList));
  }
}

export function* gamesSaga() {
  yield takeEvery(GET_GAMES, getGamesSaga);
}
