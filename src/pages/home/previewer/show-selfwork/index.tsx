import React, { Fragment, memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Divider } from 'antd'

import { filterObj } from 'src/utils/index'
import { ReducerMap } from 'src/store/reducer'
import ContainerMd from 'src/components/common/container-md'
import TitleHeader from 'src/components/common/title-header'
import ListItemHeader from 'src/components/common/list-item-header'

import styles from './style.module.scss'

const ShowSelfSkill = () => {
  const { selfWork } = useSelector(
    (state: ReducerMap) => ({
      selfWork: state.selfWork,
    }),
    shallowEqual
  )

  const gapPaddingClass = selfWork.length > 1 ? 'gap-padding' : ''

  return (
    <>
      {Object.keys(selfWork).length > 0 && (
        <div className={styles['show-selfwork']}>
          <TitleHeader title="工作经历" />
          <div className={`${styles['content']}`}>
            {selfWork.map((item, index) => (
              <div className={`${gapPaddingClass}`} key={index}>
                {<ListItemHeader headerData={filterObj(item, 'detail')} />}
                <ContainerMd content={item['detail']} />
              </div>
            ))}
          </div>
          <Divider style={{ margin: '12px 0 12px 0' }} />
        </div>
      )}
    </>
  )
}

export default memo(ShowSelfSkill)
