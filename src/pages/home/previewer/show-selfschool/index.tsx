import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import {ReducerMap} from 'src/store/reducer'
import ItemContainer from 'src/components/item-container'

const ShowSelfSchool = () => {
  const { selfSchool } = useSelector(
    (state: ReducerMap) => ({
      selfSchool: state.selfSchool,
    }),
    shallowEqual
  )

  return (
    <ItemContainer itemData={selfSchool} title="校园经历" />
  )
}

export default memo(ShowSelfSchool)
