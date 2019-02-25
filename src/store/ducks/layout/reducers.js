import * as types from './types'
import createReducer from '../../utils/createReducer'

const initialState = {
  isSidebarOpen: true
};

const sidebarReducer = createReducer(initialState)({
  [types.TOGGLE_SIDEBAR]: (state, action) => ({
      ...state,
      isSidebarOpen: !state.isSidebarOpen
    })
});

export default sidebarReducer;

