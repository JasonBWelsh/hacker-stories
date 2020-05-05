import sortBy from 'lodash/sortBy';

const storiesReducer = (state, action) => {
  console.log('DRDX action.payload:::', action.payload);
  console.log('DRDX state:::', state);
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: sortBy(action.payload, 'created_at').reverse(),
      };
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    case 'SORT_MOST_RECENT':
      return {
        ...state,
        data: sortBy(state.data, 'created_at').reverse(),
      };
    case 'SORT_OLDEST':
      return {
        ...state,
        data: sortBy(state.data, 'created_at'),
      };
    case 'SORT_MOST_POINTS':
      return {
        ...state,
        data: sortBy(state.data, 'points').reverse(),
      };
    case 'SORT_LEAST_POINTS':
      return {
        ...state,
        data: sortBy(state.data, 'points'),
      };
    case 'SORT_MOST_COMMENTS':
      return {
        ...state,
        data: sortBy(state.data, 'num_comments').reverse(),
      };
    case 'SORT_LEAST_COMMENTS':
      return {
        ...state,
        data: sortBy(state.data, 'num_comments'),
      };
    default:
      return state;
  }
};

export default storiesReducer;
