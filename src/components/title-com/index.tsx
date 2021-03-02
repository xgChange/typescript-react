import React, { memo, PropsWithChildren } from 'react'
import styles from './style.module.scss'
import MySvg from '../svg/index'

interface TabContentProp {
  icon?: string
  text: string
}
const TitleCom: React.FC<TabContentProp> = (props: PropsWithChildren<TabContentProp>) => {
  const { icon, text } = props
  return (
    <div className={styles['tab-content']}>
      {icon && <MySvg iconName={icon} />}
      <span>{text}</span>
    </div>
  )
}

export default memo(TitleCom)