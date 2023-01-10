export const closet = (state = [], action) => {
  switch (action.type) {
    case 'SET_CLOSET':
      return action.payload.data;
    case 'CLEAR_CLOSET':
      return [];
    default:
      return state;
  }
};

export const newClothes = (state = {}, action) => {
  switch (action.type) {
    case 'CLOSET_ANSWER':
      console.log('In store, closet answer:', action.payload);
      return action.payload;
    case 'RESET_NEW_ITEM':
      return {};
    default:
      return state;
  }
};

export const itemDetails = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ITEM_DETAILS':
      console.log('In store, itemsDetails:', action.payload);
      return action.payload;
    case 'RESET_ITEM_DETAILS':
      return {};
    default:
      return state;
  }
};

export const uploadImg = (state = '', action) => {
  switch (action.type) {
    case 'UPLOAD_IMAGE':
      console.log('In store, itemsDetails:', action.payload);
      return action.payload;
    case 'RESET_UPLOAD_IMAGE':
      return '';
    default:
      return state;
  }
};
