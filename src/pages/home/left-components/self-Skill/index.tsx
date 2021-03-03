import React, { ChangeEvent, memo } from 'react'

import {Input} from 'antd'
import styles from './style.module.scss'

const SelfSkill: React.FC = () => {
  const handle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value)
  }
  return (
    <div className={styles['self-skill']}>
      <Input.TextArea placeholder="请输入内容" autoSize={{ minRows: 3, maxRows: 12 }} showCount onChange={handle} />
    </div>
  )
}

export default memo(SelfSkill)