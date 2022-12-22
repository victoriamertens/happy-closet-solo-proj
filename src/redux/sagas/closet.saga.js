import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function getCloset() {
  console.log('In getCloset');
}

function* closetSaga() {
  yield takeEvery('GET_CLOSET', getCloset);
}

export default closetSaga;
