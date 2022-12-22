import { combineReducers } from 'redux';

const closet = (state = [], action) => {
  switch (action.type) {
    case 'SET_CLOSET':
      return action.payload.data;
    default:
      return state;
  }
};

const newClothes = (state = {}, action) => {
  switch (action.type) {
    case 'CLOSET_ANSWER':
      console.log('In store, closet answer:', action);
      //return action.payload.data;
      return state;
    default:
      return state;
  }
};

export default combineReducers({ closet, newClothes });
