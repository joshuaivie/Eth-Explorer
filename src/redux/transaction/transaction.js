import FetchTransactions from '../../services/transactions';

// Actions
export const GET_TRANSACTIONS_PROCESSING = 'GET_TRANSACTIONS_PROCESSING';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_TRANSACTIONS_ERROR = 'GET_TRANSACTIONS_ERROR';

// Initial State
const initialState = {
  transactions: [],
  loading: true,
  error: null,
};

// Reducer
export default function TransactionReducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case GET_TRANSACTIONS_PROCESSING:
      return { ...state, loading: true, error: null };
    case GET_TRANSACTIONS_ERROR:
      return { ...state, loading: false, error: true };
    case GET_TRANSACTIONS:
      return { transactions: payload, loading: false, error: null };
    default:
      return state;
  }
}

// Action creators
export const gettingTransactions = () => ({
  type: GET_TRANSACTIONS_PROCESSING,
});

export const errorFetchingTransactions = (error) => ({
  type: GET_TRANSACTIONS_ERROR,
  payload: error,
});

export const fetchedTransactions = (transactions) => ({
  type: GET_TRANSACTIONS,
  payload: transactions,
});

// Side Effects
export const GetTransactions = ({ order }) => async (dispatch) => {
  console.log('HHH');
  dispatch(gettingTransactions());
  console.log('HHH');
  try {
    const payload = await FetchTransactions({ order });
    dispatch({
      type: GET_TRANSACTIONS,
      payload,
    });
    return payload;
  } catch (error) {
    return dispatch(errorFetchingTransactions(error));
  }
};
