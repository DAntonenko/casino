import { takeEvery, call, put } from 'redux-saga/effects';
import { getGamesFromServer } from '../../api/api';
import { GET_GAMES, setGamesList } from '../actions/games';

export function* getGamesSaga() {
  const data = yield call(getGamesFromServer);
  yield put(setGamesList(data));
}

export function* gamesSaga() {
  yield takeEvery(GET_GAMES, getGamesSaga);
}
