import React, { memo } from 'react'

import MySvg from '../svg/index'
import styles from './style.module.scss'
import { Input } from 'antd'

export default memo(function index() {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-left']}>
        <MySvg iconName="PROFILE" />
        <span className={styles.title}>简历编辑</span>
      </div>
      <div className={`${styles['header-middle']} all-center`}>
        <div className={`${styles['middle-input']} all-center`}>
          <label>简历名称：</label>
          <Input size="middle" />
        </div>
      </div>
    </div>
  )
})
