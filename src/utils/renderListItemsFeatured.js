import { mapIndexed } from 'ramda-adjunct'
import React from 'react'

const renderListItems = (Component, dataProp, data) =>
  mapIndexed((dataItem, key) => {
    const props = {
      [dataProp]: dataItem
    }
    return <Component key={key} {...props} />
  }, data)

export default renderListItems
