import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import {ReducerMap} from 'src/store/reducer'
import ItemContainer from 'src/components/item-container'

const ShowSelfSkill = () => {
  const { selfWork } = useSelector(
    (state: ReducerMap) => ({
      selfWork: state.selfWork,
    }),
    shallowEqual
  )

  return (
    <ItemContainer itemData={selfWork} title="工作经历" />
  )
}

export default memo(ShowSelfSkill)
