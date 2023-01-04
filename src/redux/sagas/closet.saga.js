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

function* addClothes(action) {
  try {
    console.log('In sagas addClothes:', action);
    yield axios.post('/closet/newitem', action.payload);
    yield put({ type: 'RESET_NEW_ITEM' });
    yield put({ type: 'GET_CLOSET' });
  } catch (error) {
    console.log(error);
  }
}

function* postOutfit(action) {
  try {
    console.log('Post outfit:', action.payload);
    yield axios.post('/outfit/newOutfit', action.payload);
    yield put({ type: 'RESET_NEW_OUTFIT' });
    yield put({ type: 'RESET_OUTFIT_COMMENT' });
    yield put({ type: 'GET_CLOSET' });
  } catch (error) {
    console.log(error);
  }
}

function* getOutfits() {
  try {
    console.log('Getting outfits');
    const response = yield axios.get('/outfit');
    console.log(response);
    yield put({ type: 'SET_OUTFITS', payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* getDetails(action) {
  try {
    console.log('Getting details:', action.payload);
    const response = yield axios.get(`/closet/details/${action.payload}`);
    console.log(response.data[0]);
    yield put({ type: 'SET_ITEM_DETAILS', payload: response.data[0] });
  } catch (error) {
    console.log(error);
  }
}

function* updateField(action) {
  try {
    console.log('Updating Field:', action.payload);
    yield axios.put(`/closet/details/${action.payload.id}`, {
      payload: action.payload,
    });
    yield put({ type: 'GET_CLOSET' });
  } catch (error) {
    console.log(error);
  }
}

function callback(count) {
  console.log('in the callback:', count);
}

function* deleteItem(action) {
  try {
    console.log('Delteing Item:', action.payload);
    const response = yield axios.get(`/closet/delete/${action.payload}`);
    console.log('Response', response.data);

    if (response.data > 0) {
      console.log('in conditional');
      yield axios.put(`/closet/delete/${action.payload}`);
    } else {
      yield axios.delete(`/closet/delete/${action.payload}`);
    }
    yield put({ type: 'GET_CLOSET' });
  } catch (error) {
    console.log(error);
  }
}

function* closetSaga() {
  yield takeEvery('GET_CLOSET', fetchCloset);
  yield takeEvery('ADD_TO_CLOSET', addClothes);
  yield takeEvery('POST_OUTFIT', postOutfit);
  yield takeEvery('GET_OUTFITS', getOutfits);
  yield takeEvery('GET_DETAILS', getDetails);
  yield takeEvery('UPDATE_FIELD', updateField);
  yield takeEvery('DELETE_ITEM', deleteItem);
}

export default closetSaga;
