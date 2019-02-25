import * as types from './types'

export const pushTagsToList = newItem => ({
  type: types.PUSH_TAGS_TO_LIST,
  newItem
})
