import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TransactionReducer from './transaction/transaction';
import SearchReducer from './search/search';

const rootReducer = combineReducers({ transactions: TransactionReducer, search: SearchReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
