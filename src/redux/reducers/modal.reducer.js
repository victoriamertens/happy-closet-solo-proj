export const showModal = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      console.log('Show modal TRUE');
      return true;
    case 'HIDE_MODAL':
      console.log('Show modal FALSE');
      return false;
    default:
      return state;
  }
};
