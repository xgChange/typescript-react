import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { ReducerMap } from 'src/store/reducer'
import ItemContainer from 'src/components/item-container'

const ShowSelfPractice = () => {
  const { selfPractice } = useSelector(
    (state: ReducerMap) => ({
      selfPractice: state.selfPractice,
    }),
    shallowEqual
  )

  return (
    <ItemContainer itemData={selfPractice} title="实习经历" />
  )
}

export default memo(ShowSelfPractice)
