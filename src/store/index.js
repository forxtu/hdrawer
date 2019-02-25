import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import * as reducers from './ducks'

export default function configureStore(initialState) {
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, initialState, applyMiddleware(logger));
}
