import React, { memo, PropsWithChildren } from 'react'

import { Divider } from 'antd'
import MySvg from 'src/components/svg'
import styles from './style.module.scss'

interface TitleProps {
  title: string
  icon?: string
  className?: string
  showLine?: boolean
}

const TitleHeader = ({
  title,
  icon,
  className,
  showLine = false,
}: PropsWithChildren<TitleProps>) => {
  return (
    <div className={`${styles['title-header']} ${className}`}>
      {icon && <MySvg iconName="icon" />}
      <span className={styles['title']}>{title}</span>
      {showLine && <Divider className={styles['divider']} />}
    </div>
  )
}

export default memo(TitleHeader)
