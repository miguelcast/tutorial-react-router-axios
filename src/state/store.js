import { createStore, combineReducers } from 'redux';
import productReducer from './product/reducer';

const reducers = combineReducers({
  productReducer,
});

export default createStore(reducers);
