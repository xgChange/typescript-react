/**
 * @description 教育信息组件
 */

import React, { memo } from 'react'

import FormCommon from 'src/components/form-common'

import styles from './style.module.scss'

const SelfSchool: React.FC = () => {
  const finished = (values: any) => {
    console.log('cc', values)
  }
  return (
    <div className={styles['self-work']}>
      <FormCommon label={['组织', '职位', '工作时间']} field={['organization', 'job', 'workTime']}
        onFinished={(values: any) => finished(values)} />
    </div>
  )
}

export default memo(SelfSchool)
