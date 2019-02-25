import { uniq } from 'ramda'

export const fetchTags = (list) => list
    .map(tag => tag.fieldValue.split(`, `))
    .reduce((acc, val) => acc.concat(val), [])