import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  contacts: [],
  filter: '',
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
