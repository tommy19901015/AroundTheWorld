import { all, call, select, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { actionTypes, failure } from './actions';

export const current = (state) => state.current;

function* loadDataSaga() {
  try {
    let pageNum = yield select(current);
    console.log(pageNum);
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
