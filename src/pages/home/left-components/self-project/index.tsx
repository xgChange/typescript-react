/**
 * @description 教育信息组件
 */
import { changeSelfProject } from 'src/pages/home/store'
import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import FormCommon from 'src/components/form-common'

import styles from './style.module.scss'

const SelfProject: React.FC = () => {
  const dispatch = useDispatch()

  const finished = useCallback(
    (values: any) => {
      console.log('selfProject', values)
      dispatch(changeSelfProject(values))
    },
    [dispatch]
  )
  return (
    <div className={styles['self-project']}>
      <FormCommon
        label={['项目', '职位', '项目时间']}
        field={['project', 'job', 'projectTime']}
        onFinished={(values: any) => finished(values)}
      />
    </div>
  )
}

export default memo(SelfProject)
