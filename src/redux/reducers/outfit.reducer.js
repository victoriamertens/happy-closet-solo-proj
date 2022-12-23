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
