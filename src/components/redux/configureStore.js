import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import missionsReducer from './missions';

const rootReducer = combineReducers({ mission: missionsReducer });

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;