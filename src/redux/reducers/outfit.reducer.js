export const newOutfit = (state = [], action) => {
  switch (action.type) {
    case 'MAKE_OUTFIT':
      console.log('In store, new outfit item:', action.payload);
      return [...state, action.payload];
    case 'REMOVE_ITEM_FROM_OUTFIT':
      const newArr = state.filter((item) => {
        console.log('Each ITem:', item.id !== Number(action.payload));
        return item.id !== Number(action.payload);
      });
      console.log('NewARR:', newArr);
      return newArr;
    case 'RESET_NEW_OUTFIT':
      return [];
    default:
      return state;
  }
};

export const outfitComment = (state = {}, action) => {
  switch (action.type) {
    case 'MAKE_OUTFIT_COMMENT':
      console.log('In store, new outfit comment:', action.payload);
      return action.payload;
    case 'RESET_OUTFIT_COMMENT':
      return {};
    default:
      return state;
  }
};

export const outfits = (state = [], action) => {
  switch (action.type) {
    case 'SET_OUTFITS':
      console.log('In store, set outfits:', action.payload);
      return action.payload;
    default:
      return state;
  }
};
