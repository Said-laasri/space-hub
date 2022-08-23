import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({ rocket: rocketReducer });

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
