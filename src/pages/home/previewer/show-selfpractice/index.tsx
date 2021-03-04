import React, { Fragment, memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Divider } from 'antd'

import { filterObj } from 'src/utils/index'
import { ReducerMap } from 'src/store/reducer'
import ContainerMd from 'src/components/common/container-md'
import TitleHeader from 'src/components/common/title-header'
import ListItemHeader from 'src/components/common/list-item-header'

import styles from './style.module.scss'

const ShowSelfPractice = () => {
  const { selfPractice } = useSelector(
    (state: ReducerMap) => ({
      selfPractice: state.selfPractice,
    }),
    shallowEqual
  )

  return (
    <>
      {Object.keys(selfPractice).length > 0 && (
        <div className={styles['show-self-practice']}>
          <TitleHeader title="实习经历" />
          <div className={styles['content']}>
            {selfPractice.map((item, index) => (
              <Fragment key={index}>
                {<ListItemHeader headerData={filterObj(item, 'detail')} />}
                <ContainerMd content={item['detail']} />
              </Fragment>
            ))}
          </div>
          <Divider style={{ margin: '12px 0 12px 0' }} />
        </div>
      )}
    </>
  )
}

export default memo(ShowSelfPractice)
