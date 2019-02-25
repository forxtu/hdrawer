import * as types from './types'
import createReducer from '../../utils/createReducer'

const initialState = {
  listOfTags: []
};

const actionBarReducer = createReducer(initialState)({
  [types.PUSH_TAGS_TO_LIST]: (state, action) => ({
      ...state,
      listOfTags: state.listOfTags.concat(action.newItem)
    })
});

export default actionBarReducer;

