import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCloset() {
  try {
    console.log('In getCloset');
    const response = yield axios.get('/closet');
    console.log('The closet:', response);
    yield put({ type: 'SET_CLOSET', payload: response });
  } catch (error) {
    console.log(error);
  }
}

function* makeItem(action) {
  try {
    console.log('in MakeItem', action);
  } catch (error) {
    console.log(error);
  }
}

function* closetSaga() {
  yield takeEvery('GET_CLOSET', fetchCloset);
  yield takeEvery('CLOSET_ANSWER', makeItem);
}

export default closetSaga;
