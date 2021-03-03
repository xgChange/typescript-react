/**
 * @description 工作信息组件
 */

import { changeSelfWork } from 'src/pages/home/store'
import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import FormCommon from 'src/components/form-common'

import styles from './style.module.scss'

const SelfWork: React.FC = () => {
  const dispatch = useDispatch()

  const finished = useCallback(
    (values: any) => {
      console.log('selfWork', values)
      dispatch(changeSelfWork(values))
    },
    [dispatch]
  )
  return (
    <div className={styles['self-work']}>
      <FormCommon
        label={['公司', '职位', '工作时间']}
        field={['company', 'job', 'workTime']}
        onFinished={(values: any) => finished(values)}
      />
    </div>
  )
}

export default memo(SelfWork)
