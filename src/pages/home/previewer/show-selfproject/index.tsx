import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { ReducerMap } from 'src/store/reducer'
import ItemContainer from 'src/components/item-container'

const ShowSelfProject = () => {
  const { selfProject } = useSelector(
    (state: ReducerMap) => ({
      selfProject: state.selfProject,
    }),
    shallowEqual
  )

  return (
    <ItemContainer itemData={selfProject} title="项目经历" />
  )
}

export default memo(ShowSelfProject)
