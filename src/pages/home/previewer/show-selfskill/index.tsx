import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Divider } from 'antd'

import { ReducerMap } from 'src/store/reducer'
import ContainerMd from 'src/components/common/container-md'
import TitleHeader from 'src/components/common/title-header'

import styles from './style.module.scss'

const ShowSelfSkill = () => {
  const { selfSkill } = useSelector(
    (state: ReducerMap) => ({
      selfSkill: state.selfSkill,
    }),
    shallowEqual
  )

  return (
    <>
      {selfSkill && (
        <div className={styles['show-self-skill']}>
          <TitleHeader title="个人技能" />
          <ContainerMd content={selfSkill} />
          <Divider style={{ margin: '12px 0 12px 0' }} />
        </div>
      )}
    </>
  )
}

export default memo(ShowSelfSkill)
