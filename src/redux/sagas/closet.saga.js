import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCloset() {
  try {
    console.log('In getCloset');
    const closet = yield axios.get('/closet');
    console.log('The closet:', closet);
  } catch (error) {
    console.log(error);
  }
}

function* closetSaga() {
  yield takeEvery('GET_CLOSET', fetchCloset);
}

export default closetSaga;
