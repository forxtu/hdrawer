import * as types from './types';

// utils
import theme from 'src/styles/theme';
import createReducer from 'src/store/utils/createReducer';

const initialState = {
  currentTheme: theme
};

const actionBarReducer = createReducer(initialState)({
  [types.SET_CURRENT_THEME]: (state, action) => ({
    ...state,
    currentTheme: action.val
  })
});

export default actionBarReducer;
