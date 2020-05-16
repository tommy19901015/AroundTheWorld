import { all, call, select, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { getPosts } from '../api/index';
import { actionTypes, failure, loadDataSuccess } from './actions';


export const current = (state) => state.current

function* loadDataSaga() {
  try {
    //const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    let pageNum = yield select(current)
    const res = yield fetch(`/api/attractions`);
    const data = yield res.json()
    yield put(loadDataSuccess(data.data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* updateDataSaga() {
  try {
    //const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    let pageNum = yield select(current)
    const res = yield call(`/api/attractions`, pageNum);
    console.log('~~~')
  } catch (err) {
    yield put(failure(err))
  }
}


function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga), takeEvery(actionTypes.UPDATE_DATA, updateDataSaga)])
}

export default rootSaga