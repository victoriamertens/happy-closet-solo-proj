export const closet = (state = [], action) => {
  switch (action.type) {
    case 'SET_CLOSET':
      return action.payload.data;
    default:
      return state;
  }
};

export const newClothes = (state = {}, action) => {
  switch (action.type) {
    case 'CLOSET_ANSWER':
      console.log('In store, closet answer:', action.payload);
      return action.payload;
      return { ...state, [action.payload.answer]: action.payload.data };
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
