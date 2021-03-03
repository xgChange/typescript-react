/**
 * @description 教育信息组件
 */

import React, { memo } from 'react'

import FormCommon from 'src/components/form-common'

import styles from './style.module.scss'

const SelfProject: React.FC = () => {
  const finished = (values: any) => {
    console.log('cc', values)
  }
  return (
    <div className={styles['self-project']}>
      <FormCommon label={['项目', '职位', '项目时间']} field={['project', 'job', 'projectTime']}
        onFinished={(values: any) => finished(values)} />
    </div>
  )
}

export default memo(SelfProject)
