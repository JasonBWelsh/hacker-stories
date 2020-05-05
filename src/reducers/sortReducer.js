const sortReducer = (state, action) => {
  console.log('DRD sortReducer:::', state, action.type);
  switch (action.type) {
    case 'SORT_MOST_RECENT':
      return {
        ...state,
      };
    case 'SORT_OLDEST':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default sortReducer;
