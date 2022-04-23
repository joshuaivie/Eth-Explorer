// Actions
export const SEARCH_TRANSACTION = 'SEARCH_TRANSACTION';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

// Action creators
export const searchValue = (payload) => ({
  type: SEARCH_TRANSACTION,
  payload,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});

// Reducer
export default function SearchReducer(state = '', action = {}) {
  switch (action.type) {
    case SEARCH_TRANSACTION:
      return action.payload;
    case CLEAR_SEARCH:
      return '';
    default: return state;
  }
}
