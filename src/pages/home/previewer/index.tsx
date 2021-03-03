import React, { memo } from 'react'

import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import styles from './style.module.scss'

const Previewer: React.FC = () => {
  const handleClick = () => {
    window.print()
  }
  return (
    <div className={styles.previewer}>
      <div className={styles['top-title']}>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          size="middle"
          className={styles['previewer-btn']}
          onClick={handleClick}
        >
          下载
        </Button>
      </div>

      <div className={styles.container}>preiver</div>
    </div>
  )
}

export default memo(Previewer)
