export const newOutfit = (state = [], action) => {
  switch (action.type) {
    case 'MAKE_OUTFIT':
      console.log('In store, new outfit item:', action.payload);
      return [...state, action.payload];
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
