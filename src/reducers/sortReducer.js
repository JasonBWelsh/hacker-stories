const sortReducer = (state, action) => {
  console.log('DRD reducer state:::', state);
  switch (action.type) {
    case 'SORT_MOST_RECENT':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default sortReducer;
