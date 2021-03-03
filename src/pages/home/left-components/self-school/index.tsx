/**
 * @description 教育信息组件
 */
import { changeSelfSchool } from 'src/pages/home/store'

import React, { memo, useCallback } from 'react'

import FormCommon from 'src/components/form-common'

import styles from './style.module.scss'
import { useDispatch } from 'react-redux'

const SelfSchool: React.FC = () => {
  const dispatch = useDispatch()

  const finished = useCallback(
    (values: any) => {
      console.log('selfSchool', values)
      dispatch(changeSelfSchool(values))
    },
    [dispatch]
  )
  return (
    <div className={styles['self-work']}>
      <FormCommon
        label={['组织', '职位', '工作时间']}
        field={['organization', 'job', 'workTime']}
        onFinished={(values: any) => finished(values)}
      />
    </div>
  )
}

export default memo(SelfSchool)
