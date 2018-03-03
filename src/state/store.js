import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  data: null,
});

export default createStore(reducers);
