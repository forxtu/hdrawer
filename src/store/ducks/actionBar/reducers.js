import * as types from './types'
import createReducer from '../../utils/createReducer'

const initialState = {
  isFullscreen: false
};

const actionBarReducer = createReducer(initialState)({
  [types.SET_IS_FULLSCREEN]: (state, action) => ({
      ...state,
      isFullscreen: !state.isFullscreen
    })
});

export default actionBarReducer;

