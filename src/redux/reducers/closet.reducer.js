const closet = (state = [], action) => {
  switch (action.type) {
    case 'SET_CLOSET':
      return action.payload.data;
    default:
      return state;
  }
};

export default closet;
