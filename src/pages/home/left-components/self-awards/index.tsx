import React, { ChangeEvent, memo, useCallback } from 'react'

import { Input } from 'antd'
import styles from './style.module.scss'
import { useDispatch } from 'react-redux'
import { changeSelfAwards } from 'src/pages/home/store/index'

const SelfAwards: React.FC = () => {
  const dispatch = useDispatch()
  const handle = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value
      dispatch(changeSelfAwards(value))
    },
    [dispatch]
  )
  return (
    <div className={styles['self-awards']}>
      <Input.TextArea
        placeholder="请输入内容"
        autoSize={{ minRows: 3, maxRows: 12 }}
        showCount
        onChange={handle}
      />
    </div>
  )
}

export default memo(SelfAwards)
