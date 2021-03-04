import React, { memo, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'

import styles from './style.module.scss'

interface ShowInfoProps {
  position: 'left' | 'right' | 'center'
}

const ShowSelfInfo = ({ position }: PropsWithChildren<ShowInfoProps>) => {
  const [] = useSelector((state) => ({
    selfInfo: state
  }))
  return (
    <div className={styles['show-self-info']}>
      <p>向茂贤</p>
      <p>www.xiangmaoxian@qq.com</p>
      <p>15697407301</p>
      <p>22岁</p>
    </div>
  )
}

export default memo(ShowSelfInfo)