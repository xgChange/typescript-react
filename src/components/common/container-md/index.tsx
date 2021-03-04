import React, { memo } from 'react'
import MarkDown from 'markdown-to-jsx'

import styles from './style.module.scss'

interface ListContainerProps {
  content: string
  useMarkdown?: boolean
}

const ContainerMd = ({ content, useMarkdown = false }: ListContainerProps) => {
  return (
    <div className={styles['list-container']}>
      <div className={styles['linebreak']}>{content}</div>
      {useMarkdown && <MarkDown>{content}</MarkDown>}
    </div>
  )
}

export default memo(ContainerMd)
