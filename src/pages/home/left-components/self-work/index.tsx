/**
 * @description 教育信息组件
 */

import React, { memo } from 'react'

import FormCommon from 'src/components/form-common'

import styles from './style.module.scss'

const SelfWork: React.FC = () => {
  const finished = (values: any) => {
    console.log('cc', values)
  }
  return (
    <div className={styles['self-work']}>
      <FormCommon label={['公司', '职位', '工作时间']} field={['company', 'job', 'workTime']}
        onFinished={(values: any) => finished(values)} />
    </div>
  )
}

export default memo(SelfWork)
