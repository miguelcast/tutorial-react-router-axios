import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import productReducer from './product/reducer';

const reducers = combineReducers({
  productReducer,
});

export default createStore(reducers, applyMiddleware(thunk));
