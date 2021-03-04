import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Divider } from 'antd'

import { ReducerMap } from 'src/store/reducer'
import ContainerMd from 'src/components/common/container-md'
import TitleHeader from 'src/components/common/title-header'

import styles from './style.module.scss'

const ShowSelfAwards = () => {
  const { selfAwards } = useSelector(
    (state: ReducerMap) => ({
      selfAwards: state.selfAwards,
    }),
    shallowEqual
  )

  return (
    <>
      {selfAwards && (
        <div className={styles['show-self-awards']}>
          <TitleHeader title="获奖情况" />
          <ContainerMd content={selfAwards} />
          <Divider style={{ margin: '12px 0 12px 0' }} />
        </div>
      )}
    </>
  )
}

export default memo(ShowSelfAwards)
