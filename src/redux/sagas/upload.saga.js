import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* uploadPhoto(action) {
  try {
    console.log('Data for upload:', action.payload);
    let response = yield axios.post('/upload', action.payload);

    yield put({ type: 'UPLOAD_IMAGE', payload: response });
  } catch (error) {
    console.log('Error with photo upload:', error);
    //
  }
}

function* uploadSaga() {
  yield takeLatest('UPLOAD_PHOTO', uploadPhoto);
}

export default uploadSaga;
