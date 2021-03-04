import React, { Fragment, memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Divider } from 'antd'

import { ReducerMap } from 'src/store/reducer'
import TitleHeader from 'src/components/common/title-header'
import ListItemHeader from 'src/components/common/list-item-header'

import styles from './style.module.scss'

const ShowSelfEdu = () => {
  const { selfEdu } = useSelector(
    (state: ReducerMap) => ({
      selfEdu: state.selfEdu,
    }),
    shallowEqual
  )

  return (
    <>
      {Object.keys(selfEdu).length > 0 && (
        <div className={styles['show-selfedu']}>
          <TitleHeader title="教育背景" />
          <div className={styles['content']}>
            {selfEdu.map((item, index) => (
              <Fragment key={index}>{<ListItemHeader headerData={item} />}</Fragment>
            ))}
          </div>
          <Divider style={{ margin: '12px 0 12px 0' }} />
        </div>
      )}
    </>
  )
}

export default memo(ShowSelfEdu)
